import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import classes from "../../vehicles/Vehicles.module.css"
import AgGridTable from "../../../UI/AgGridTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteChildrenData, fetchChildrenData, postChildrenData, puttChildrenData, queryClientObj } from "../../../util/http";
import ChildrenTabFormModal from "./ChildrenTabFormModal";


const initialChildrenParameters = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  aadhaarNumber: "",
  school: "",
  zone: "",
  address: "",
}

function ChildrenTab() {
  const [childrenDataList, setChildrenDataList] = useState([]);
  const [isAddChildrenModalOpen, setIsAddChildrenModalOpen] = useState(false);
  const [childrenParameters, setChildrenParameters] = useState(initialChildrenParameters);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(false);
  let isFormValid = false;

  function handleStartUpdateRow(data) {
    const {
      id,
      firstName,
      lastName,
      phoneNumber,
      aadhaarNumber,
      school,
      zone,
      address,
    } = data;
    console.log(data);
    setEditingId(id);
    setChildrenParameters({
      firstName,
      lastName,
      phoneNumber : phoneNumber.toString(),
      aadhaarNumber: aadhaarNumber.toString(),
      school,
      zone,
      address,
    });
    setIsEdit(true);
    setIsAddChildrenModalOpen(true);
  }

  function handleDeleteRow(data) {
    const { id } = data;
    deleteChildrenMutate(id);
  }

  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: 'firstName', headerName: "First Name", filter: false, minWidth: 200 },
    {field: 'lastName', headerName: "Last Name", filter: false, minWidth: 200},
    {field: "phoneNumber", headerName: "Phone No.", filter: false, minWidth: 200},
    {field: "aadhaarNumber", headerName: "Aadhaar No.", filter: false, minWidth: 200},
    {field: "school", headerName: "School", filter: false, minWidth: 200},
    {field: "zone", headerName: "Zone", filter: false, minWidth: 200},
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

  function handleUpdateChildren(){
    const updatedData = {...childrenParameters, phoneNumber: +childrenParameters.phoneNumber, aadhaarNumber: +childrenParameters.aadhaarNumber}
    childrenMutate({childrenData : updatedData, id: editingId});
  }

  const {mutate: childrenMutate} = useMutation({
    mutationFn: isEdit ? puttChildrenData : postChildrenData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["children"]);
      setIsAddChildrenModalOpen(false);
      setEditingId(null);
      setIsEdit(false);
      setChildrenParameters(initialChildrenParameters)
    }
  })
  const {mutate: deleteChildrenMutate} = useMutation({
    mutationFn: deleteChildrenData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["children"]);
    }
  })

  const {data: childrenData} = useQuery({
    queryKey: ["children"],
    queryFn: ({signal})=> fetchChildrenData({signal}),
  })

  useEffect(()=>{
    if(childrenData){
      console.log("children data: ", childrenData)
      const updateChildrenData = childrenData.map((each, index)=>{
        return {...each, Sno: index+1}
      })
      setChildrenDataList(updateChildrenData);
    }
  },[childrenData])

  function hanldeInputChange(identifier, event) {
    setChildrenParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddChildren() {
    setIsAddChildrenModalOpen(true);
  }

  function handleCloseAddChildrenModal() {
    setChildrenParameters(initialChildrenParameters);
    setIsAddChildrenModalOpen(false);
  }

  if (
    childrenParameters.aadhaarNumber.trim() === "" ||
    childrenParameters.address.trim() === "" ||
    childrenParameters.phoneNumber.trim() === "" ||
    childrenParameters.firstName.trim() === "" ||
    childrenParameters.lastName.trim() === "" ||
    childrenParameters.school.trim() === "" ||
    childrenParameters.zone.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddChildren() {
    console.log("Added Children parameters:", childrenParameters);
    const updatedData = {...childrenParameters, phoneNumber: +childrenParameters.phoneNumber, aadhaarNumber: +childrenParameters.aadhaarNumber}
    childrenMutate(updatedData);
    // setChildrenDataList(prev=>[...prev, {Sno: prev.length+1 , ...childrenParameters}]);
    setChildrenParameters(initialChildrenParameters);
    setIsAddChildrenModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "center" }}
        onClick={handleStartAddChildren}
      >
        Add Children
      </Button>
      {isAddChildrenModalOpen && (
        <ChildrenTabFormModal
          isAddChildrenModalOpen ={ isAddChildrenModalOpen}
          handleAddChildren={handleAddChildren}
          handleCloseAddChildrenModal={handleCloseAddChildrenModal}
          childrenParameters={childrenParameters}
          handleUpdateChildren={handleUpdateChildren}
          isFormValid={isFormValid}
          hanldeInputChange={hanldeInputChange}
          isEdit={isEdit}
        />
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={childrenDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default ChildrenTab;

