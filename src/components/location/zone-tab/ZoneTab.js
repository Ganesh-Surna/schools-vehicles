import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import classes from "../../vehicles/Vehicles.module.css";
import AgGridTable from "../../../UI/AgGridTable";
import TextArea from "antd/es/input/TextArea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteZoneTabData, fetchZoneTabData, postZoneTabData, putZoneTabData, queryClientObj } from "../../../util/http";
import ZoneTabFormModal from "./ZoneTabFormModal";

const initialZoneTabParameters = {
  zone: "",
  description: "",
}


function ZoneTab() {
  const [zoneTabsDataList, setZoneTabsDataList] = useState([]);
  const [isAddZoneTabModalOpen, setIsAddZoneTabModalOpen] = useState(false);
  const [zoneTabParameters, setZoneTabParameters] = useState(initialZoneTabParameters);
  let isFormValid = false;
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(false);
  
  function handleStartUpdateRow(data) {
    const {
      id,
      zone,
      description,
    } = data;
    console.log(data);
    setEditingId(id);
    setZoneTabParameters({
      zone,
      description,
    });
    setIsEdit(true);
    setIsAddZoneTabModalOpen(true);
  }

  const {mutate: zoneTabMutate} = useMutation({
    mutationFn: isEdit ? putZoneTabData : postZoneTabData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["zoneTab"]);
      setIsAddZoneTabModalOpen(false);
      setZoneTabParameters(initialZoneTabParameters);
      setIsEdit(false);
      setEditingId(null);
    }
  })
  const {mutate: deleteZoneTabMutate} = useMutation({
    mutationFn: deleteZoneTabData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["zoneTab"]);
    }
  })

  function handleDeleteRow(data) {
    const { id } = data;
    deleteZoneTabMutate(id);
  }

  function handleUpdateZoneTab(){
    zoneTabMutate({zoneTabData : zoneTabParameters, id: editingId});
  }

  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: "zone", headerName: "Zone Name", filter: false, minWidth: 200},
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

  const {data: zoneTabData} = useQuery({
    queryKey: ["zoneTab"],
    queryFn: ({signal})=> fetchZoneTabData({signal}),
  })

  useEffect(()=>{
    if(zoneTabData){
      console.log("zonetab data: ", zoneTabData)
      const updatedData = zoneTabData.map((each, index)=>{
        return {...each, Sno: index+1}
      })
      setZoneTabsDataList(updatedData);
    }
  },[zoneTabData])

  function hanldeInputChange(identifier, event) {
    setZoneTabParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddZoneTab() {
    setIsAddZoneTabModalOpen(true);
  }

  function handleCloseAddZoneTabModal() {
    setZoneTabParameters(initialZoneTabParameters);
    setIsAddZoneTabModalOpen(false);
  }

  if (
    zoneTabParameters.zone.trim() === "" ||
    zoneTabParameters.description.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddZoneTab() {
    console.log("Added ZoneTab parameters:", zoneTabParameters);
    zoneTabMutate(zoneTabParameters);
    // setZoneTabsDataList(prev=> [...prev, {Sno: prev.length+1, ...zoneTabParameters}])
    setZoneTabParameters(initialZoneTabParameters);
    setIsAddZoneTabModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "center" }}
        onClick={handleStartAddZoneTab}
      >
        Add Zone
      </Button>
      {isAddZoneTabModalOpen && (
        <ZoneTabFormModal 
          hanldeInputChange={hanldeInputChange}
          isAddZoneTabModalOpen={isAddZoneTabModalOpen}
          handleAddZoneTab={handleAddZoneTab}
          isEdit={isEdit}
          handleCloseAddZoneTabModal={handleCloseAddZoneTabModal}
          isFormValid={isFormValid}
          zoneTabParameters={zoneTabParameters}
          handleUpdateZoneTab={handleUpdateZoneTab}
        />
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={zoneTabsDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default ZoneTab;


