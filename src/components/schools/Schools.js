import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import classes from "../vehicles/Vehicles.module.css";
import AgGridTable from "../../UI/AgGridTable";
import TextArea from "antd/es/input/TextArea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteSchoolData, fetchSchoolData, postSchoolData, puttSchoolData, queryClientObj } from "../../util/http";
import SchoolsFormModal from "./SchoolsFormModal";

const initialSchoolParameters = {
  schoolName: "",
  branch: "",
  city: "",
  state: "",
  coordinates: "",
  zone: "",
  zipCode: "",
  address: "",
}


function Schools() {
  const [schoolsDataList, setSchoolsDataList] = useState([]);
  const [isAddSchoolModalOpen, setIsAddSchoolModalOpen] = useState(false);
  const [schoolParameters, setSchoolParameters] = useState(initialSchoolParameters);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(false);
  let isFormValid = false;

  function handleStartUpdateRow(data) {
    const {
      id,
      schoolName,
      branch,
      city,
      state,
      coordinates,
      zone,
      zipCode,
      address,
    } = data;
    console.log(data);
    setEditingId(id);
    setSchoolParameters({
      schoolName,
      branch,
      city,
      state,
      coordinates,
      zone,
      zipCode,
      address,
    });
    setIsEdit(true);
    setIsAddSchoolModalOpen(true);
  }

  function handleDeleteRow(data) {
    const { id } = data;
    deleteSchoolMutate(id);
  }

  function handleUpdateSchool(){
    schoolMutate({SchoolData : schoolParameters, id: editingId});
  }

  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: 'schoolName', headerName: "School Name", filter: false, minWidth: 200 },
    {field: 'branch', headerName: "Branch", filter: false, minWidth: 200},
    {field: "city", headerName: "City", filter: false, minWidth: 200},
    {field: "state", headerName: "State", filter: false, minWidth: 200},
    {field: "zone", headerName: "Zone", filter: false, minWidth: 200},
    {field: "coordinates", headerName: "Coordinates", filter: false, minWidth: 200},
    {field: "zipCode", headerName: "Zipcode", filter: false, minWidth: 200},
    {field: "address", headerName: "Address", filter: false, minWidth: 300},
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

  const {mutate: schoolMutate} = useMutation({
    mutationFn: isEdit ? puttSchoolData : postSchoolData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["school"]);
      setIsAddSchoolModalOpen(false);
      setEditingId(null);
      setIsEdit(false);
      setSchoolParameters(initialSchoolParameters)
    }
  })
  const {mutate: deleteSchoolMutate} = useMutation({
    mutationFn: deleteSchoolData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["school"]);
    }
  })

  const {data: schoolData} = useQuery({
    queryKey: ["school"],
    queryFn: ({signal})=> fetchSchoolData({signal}),
  })

  useEffect(()=>{
    if(schoolData){
      console.log("school data: ", schoolData)
      const updateSchoolData = schoolData.map((each, index)=>{
        return {...each, Sno: index+1}
      })
      setSchoolsDataList(updateSchoolData);
    }
  },[schoolData])

  function hanldeInputChange(identifier, event) {
    setSchoolParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddSchool() {
    setIsAddSchoolModalOpen(true);
  }

  function handleCloseAddSchoolModal() {
    setSchoolParameters(initialSchoolParameters);
    setIsAddSchoolModalOpen(false);
  }

  if (
    schoolParameters.schoolName.trim() === "" ||
    schoolParameters.coordinates.trim() === "" ||
    schoolParameters.city.trim() === "" ||
    schoolParameters.branch.trim() === "" ||
    schoolParameters.zipCode.trim() === "" ||
    schoolParameters.state.trim() === "" ||
    schoolParameters.zone.trim() === "" ||
    schoolParameters.address.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddSchool() {
    console.log("Added school parameters:", schoolParameters);
    schoolMutate(schoolParameters);
    // setSchoolsDataList(prev=> [...prev, {Sno: prev.length+1, ...schoolParameters}])
    setSchoolParameters(initialSchoolParameters);
    setIsAddSchoolModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "flex-end" }}
        onClick={handleStartAddSchool}
      >
        Add School
      </Button>
      {isAddSchoolModalOpen && (
        <SchoolsFormModal 
            isAddSchoolModalOpen={isAddSchoolModalOpen}
            handleAddSchool={handleAddSchool}
            handleCloseAddSchoolModal={handleCloseAddSchoolModal}
            schoolParameters={schoolParameters}
            handleUpdateSchool={handleUpdateSchool}
            isFormValid={isFormValid}
            hanldeInputChange={hanldeInputChange}
            isEdit={isEdit}
        />
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={schoolsDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default Schools;
