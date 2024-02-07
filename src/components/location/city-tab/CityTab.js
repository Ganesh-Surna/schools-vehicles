import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import classes from "../../vehicles/Vehicles.module.css";
import AgGridTable from "../../../UI/AgGridTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCityTabData, fetchCityTabData, postCityTabData, putCityTabData, queryClientObj } from "../../../util/http";
import CityTabFormModal from "./CityTabFormModal";
// import TextArea from "antd/es/input/TextArea";

const initialCityTabParameters = {
  city: "",
  state: "",
  zipCode: "",
  // coordinates: "",
  // address: "",
}


function CityTab() {
  const [cityTabsDataList, setCityTabsDataList] = useState([]);
  const [cityTabParameters, setCityTabParameters] = useState(initialCityTabParameters);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(false);
  const [isAddCityTabModalOpen, setIsAddCityTabModalOpen] = useState(false);
  let isFormValid = false;

  const {mutate: cityTabMutate} = useMutation({
    mutationFn: isEdit ? putCityTabData : postCityTabData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["cityTab"]);
      setIsAddCityTabModalOpen(false);
      setIsEdit(false);
      setEditingId(null);
      setCityTabParameters(initialCityTabParameters)
    }
  })

  const {data: cityTabData} = useQuery({
    queryKey: ["cityTab"],
    queryFn: ({signal})=> fetchCityTabData({signal}),
  })

  useEffect(()=>{
    if(cityTabData){
      console.log("cityTab data: ", cityTabData)
      const updatedData = cityTabData.map((each, index)=>{
        return {...each, Sno: index+1}
      })
      setCityTabsDataList(updatedData);
    }
  },[cityTabData])

  const { mutate: deleteCityTabMutate } = useMutation({
      mutationFn: deleteCityTabData,
      onSuccess: async () => {
        await queryClientObj.invalidateQueries(["cityTab"]);
      },
  });
  
    function handleStartUpdateRow(data) {
      const {
        id,
        city,
        state,
        zipCode,
      } = data;
      console.log(data);
      setEditingId(id);
      setCityTabParameters({
        city,
        state,
        zipCode,
      });
      setIsEdit(true);
      setIsAddCityTabModalOpen(true);
    }
  
    function handleDeleteRow(data) {
      const { id } = data;
      deleteCityTabMutate(id);
    }
  
    function handleUpdateCityTab(){
      cityTabMutate({cityTabData : cityTabParameters, id: editingId});
    }

  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: "city", headerName: "City Name", filter: false, minWidth: 200},
    {field: "state", headerName: "State Name", filter: false, minWidth: 200},
    {field: "zipCode", headerName: "Zipcode", filter: false, minWidth: 200},
    // {field: "coordinates", headerName: "Coordinates", filter: false, minWidth: 200},
    // {field: "address", headerName: "Address", filter: false, minWidth: 300},
    {
      headerName: "Actions",
      field: "Sno",
      filter: false,
      // minWidth: 300,
      cellRenderer: (params) => (
        <div>
          <Button
            type="primary"
            style={{backgroundColor:"green", marginRight: "0.5rem"}}
            onClick={handleStartUpdateRow.bind(this, params.data)}
          >
            Update
          </Button>
          <Button
            type="primary"
            style={{backgroundColor:"red"}}
            onClick={handleDeleteRow.bind(this, params.data)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ]

  function hanldeInputChange(identifier, event) {
    setCityTabParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddCityTab() {
    setIsAddCityTabModalOpen(true);
  }

  function handleCloseAddCityTabModal() {
    setCityTabParameters(initialCityTabParameters);
    setIsAddCityTabModalOpen(false);
  }

  if (
    // cityTabParameters.coordinates.trim() === "" ||
    //  cityTabParameters.address.trim() === ""||
    cityTabParameters.city.trim() === "" ||
    cityTabParameters.zipCode.trim() === "" ||
    cityTabParameters.state.trim() === "" 
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddCityTab() {
    console.log("Added cityTab parameters:", cityTabParameters);
    cityTabMutate(cityTabParameters);
    // setCityTabsDataList(prev=> [...prev, {Sno: prev.length+1, ...cityTabParameters}])
    setCityTabParameters(initialCityTabParameters);
    setIsAddCityTabModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "center" }}
        onClick={handleStartAddCityTab}
      >
        Add City
      </Button>
      {isAddCityTabModalOpen && (
        <CityTabFormModal 
            isAddCityTabModalOpen={isAddCityTabModalOpen}
            handleAddCityTab={handleAddCityTab}
            handleCloseAddCityTabModal={handleCloseAddCityTabModal}
            cityTabParameters={cityTabParameters}
            handleUpdateCityTab={handleUpdateCityTab}

            isFormValid={isFormValid}
            hanldeInputChange={hanldeInputChange}
            isEdit={isEdit}
        />
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={cityTabsDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default CityTab;

