import { Button, Col, Input, Modal, Row } from "antd";
import React, { useState, useEffect } from "react";
import classes from "../../vehicles/Vehicles.module.css";
import AgGridTable from "../../../UI/AgGridTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteHotspotTabData, fetchHotspotTabData, postHotspotTabData, putHotspotTabData, queryClientObj } from "../../../util/http";
import TextArea from "antd/es/input/TextArea";
import HotspotTabFormModal from "./HotspotTabFormModal";

const initialHotspotTabParameters = {
  hotspot: "",
  description: "",
}


function HotspotTab() {
  const [hotspotTabsDataList, setHotspotTabsDataList] = useState([]);
  const [isAddHotspotTabModalOpen, setIsAddHotspotTabModalOpen] = useState(false);
  const [hotspotTabParameters, setHotspotTabParameters] = useState(initialHotspotTabParameters);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(false);
  let isFormValid = false;

  function handleStartUpdateRow(data) {
    const {
      id,
      hotspot,
      description,
    } = data;
    console.log(data);
    setEditingId(id);
    setHotspotTabParameters({
      hotspot,
      description,
    });
    setIsEdit(true);
    setIsAddHotspotTabModalOpen(true);
  }

  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: "hotspot", headerName: "Hotspot Name", filter: false, minWidth: 200},
    {field: "description", headerName: "Description", filter: false, minWidth: 200},
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

  const {mutate: hotspotTabMutate} = useMutation({
    mutationFn: isEdit ? putHotspotTabData : postHotspotTabData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["hotspotTab"]);
      setIsAddHotspotTabModalOpen(false);
      setEditingId(null);
      setIsEdit(false);
      setHotspotTabParameters(initialHotspotTabParameters)
    }
  })

  const {mutate: deleteHotspotTabMutate} = useMutation({
    mutationFn: deleteHotspotTabData ,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["hotspotTab"]);
    }
  })

  const {data: hotspotTabData} = useQuery({
    queryKey: ["hotspotTab"],
    queryFn: ({signal})=> fetchHotspotTabData({signal}),
  })

  useEffect(()=>{
    if(hotspotTabData){
      console.log("hotspotTab data: ", hotspotTabData)
      const updatedData = hotspotTabData.map((each, index)=>{
        return {...each, Sno: index+1}
      })
      setHotspotTabsDataList(updatedData);
    }
  },[hotspotTabData])

  function handleDeleteRow(data) {
    const { id } = data;
    deleteHotspotTabMutate(id);
  }

  function handleUpdateHotspotTab(){
    hotspotTabMutate({hotspotTabData : hotspotTabParameters, id: editingId});
  }

  function hanldeInputChange(identifier, event) {
    setHotspotTabParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddHotspotTab() {
    setIsAddHotspotTabModalOpen(true);
  }

  function handleCloseAddHotspotTabModal() {
    setHotspotTabParameters(initialHotspotTabParameters);
    setIsAddHotspotTabModalOpen(false);
  }

  if (
    hotspotTabParameters.hotspot.trim() === "" ||
    hotspotTabParameters.description.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddHotspotTab() {
    console.log("Added hotspotTab parameters:", hotspotTabParameters);
    hotspotTabMutate(hotspotTabParameters)
    // setHotspotTabsDataList(prev=> [...prev, {Sno: prev.length+1, ...hotspotTabParameters}])
    setHotspotTabParameters(initialHotspotTabParameters);
    setIsAddHotspotTabModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "center" }}
        onClick={handleStartAddHotspotTab}
      >
        Add Hotspot
      </Button>
      {isAddHotspotTabModalOpen && (
        <HotspotTabFormModal 
          isAddHotspotTabModalOpen = {isAddHotspotTabModalOpen}
          handleAddHotspotTab={handleAddHotspotTab}
          handleCloseAddHotspotTabModal=  {handleCloseAddHotspotTabModal}
          hotspotTabParameters={hotspotTabParameters}
          handleUpdateHotspotTab={handleUpdateHotspotTab}
          isFormValid={isFormValid}
          hanldeInputChange={hanldeInputChange}
          isEdit={isEdit}
        />
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={hotspotTabsDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default HotspotTab;

