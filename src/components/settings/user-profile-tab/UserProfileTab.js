import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import classes from "../../vehicles/Vehicles.module.css"
import AgGridTable from "../../../UI/AgGridTable";
import TextArea from "antd/es/input/TextArea";
import photo from "../../../assets/logo.svg"
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteUserProfileData, fetchUserProfileData, postUserProfileData, putUserProfileData, queryClientObj } from "../../../util/http";
import UserProfileFormModal from "./UserProfileFormModal";


const initialUserProfileParameters = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  photo: null,
  email: "",
  address: "",
//   zone: "",
}


function UserProfileTab() {
  const [userProfileDataList, setUserProfileDataList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isAddUserProfileModalOpen, setIsAddUserProfileModalOpen] = useState(false);
  const [userProfileParameters, setUserProfileParameters] = useState(initialUserProfileParameters);
  let isFormValid = false;

  const {data: userProfileData} = useQuery({
    queryKey: ["userProfile"],
    queryFn: ({signal})=> fetchUserProfileData({signal}),
  })

  useEffect(()=>{
    if(userProfileData){
      console.log("UserProfile data: ", userProfileData)
      const updatedData = userProfileData.map((each, index)=>{
        return {...each, Sno: index+1}
      })
      setUserProfileDataList(updatedData);
    }
  },[userProfileData])

  const {mutate: userProfileMutate} = useMutation({
    mutationFn: isEdit ? putUserProfileData : postUserProfileData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["userProfile"]);
      setIsAddUserProfileModalOpen(false);
      setIsEdit(false);
      setEditingId(null);
      setUserProfileParameters(initialUserProfileParameters);
    }
  })
  const {mutate: deleteUserProfileMutate} = useMutation({
    mutationFn: deleteUserProfileData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["userProfile"]);
    }
  })

  function handleStartUpdateRow(data){
    const { id, firstName,lastName,phoneNumber,photo,email,address} = data;
    setEditingId(id);
    setUserProfileParameters({firstName,lastName,phoneNumber: phoneNumber.toString(),photo,email,address});
    setIsEdit(true)
    setIsAddUserProfileModalOpen(true);
  }

  function handleDeleteRow(data){
    const {id} = data;
    deleteUserProfileMutate(id);
  }

  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: 'firstName', headerName: "First Name", filter: false, minWidth: 200 },
    {field: 'lastName', headerName: "Last Name", filter: false, minWidth: 200},
    {field: "phoneNumber", headerName: "Phone No.", filter: false, minWidth: 200},
  //   {field: "photo", headerName: "photo", filter: false, minWidth: 200},
    {field: "email", headerName: "Email", filter: false, minWidth: 200},
  //   {field: "zone", headerName: "Zone", filter: false, minWidth: 200},
    {field: "address", headerName: "Address", filter: false, minWidth: 300},
    {
      headerName: "Actions",
      field: "id",
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
    if(identifier==="photo"){
        console.log("photo started")
        const file = event.target.files[0];
        const reader = new FileReader(new Blob());
        reader.onload = (e) => {
            console.log({file: file, previewUrl: e.target.result,});
            setUserProfileParameters((prev) => ({
                ...prev,
                [identifier]: {file: file, previewUrl: e.target.result,},
              }));
        };
        if(file){
            console.log("photo chosen")
            reader.readAsDataURL(file);
        }else{
            setUserProfileParameters((prev) => ({
                ...prev,
                [identifier]: null,
            }));
        }
    }else{
        setUserProfileParameters((prev) => ({
          ...prev,
          [identifier]: event.target.value,
        }));
    }
  }

  function handleStartAddUserProfile() {
    setIsAddUserProfileModalOpen(true);
  }

  function handleUpdateUser(){
    const updatedData = {...userProfileParameters, phoneNumber: +userProfileParameters.phoneNumber, photo:userProfileParameters.photo.file.name};
    userProfileMutate({userProfileData : updatedData, id: editingId});
  }

  function handleCloseAddUserProfileModal() {
    setUserProfileParameters(initialUserProfileParameters);
    setIsAddUserProfileModalOpen(false);
  }

  if (
    userProfileParameters.photo === null ||
    userProfileParameters.address.trim() === "" ||
    userProfileParameters.phoneNumber.trim() === "" ||
    userProfileParameters.firstName.trim() === "" ||
    userProfileParameters.lastName.trim() === "" ||
    // userProfileParameters.zone.trim() === ""||
    userProfileParameters.email.trim() === "" 
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddUserProfile() {
    console.log("Added UserProfile parameters:", userProfileParameters);
    const updatedData = {...userProfileParameters, phoneNumber: +userProfileParameters.phoneNumber, photo:userProfileParameters.photo.file.name};
    userProfileMutate(updatedData);
    // setUserProfileDataList(prev=>[...prev, {Sno: prev.length+1 , ...userProfileParameters}]);
    setUserProfileParameters(initialUserProfileParameters);
    setIsAddUserProfileModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "center" }}
        onClick={handleStartAddUserProfile}
      >
        Add User Profile
      </Button>
      {isAddUserProfileModalOpen && (
        <UserProfileFormModal  
          isAddUserProfileModalOpen = {isAddUserProfileModalOpen}
          handleAddUserProfile={handleAddUserProfile}
          handleCloseAddUserProfileModal ={handleCloseAddUserProfileModal}
          isFormValid={isFormValid}
          userProfileParameters={userProfileParameters}
          hanldeInputChange={hanldeInputChange}
          isEdit = {isEdit}
          handleUpdateUser={handleUpdateUser}
        />
      )}
      {/* {userProfileDataList.length === 1 && (
        <Row gutter={[24,16]}>
          <Col span={24}>
            <img src={photo} alt="user" style={{width: "10rem", height: "10rem", borderRadius: "50%",}} />
          </Col>
          <Col span={12}>
            <p>{userProfileDataList[0].firstName}</p>
          </Col>
          <Col span={12}>
            <p>{userProfileDataList[0].lastName}</p>
          </Col>
          <Col span={12}>
            <p>{userProfileDataList[0].email}</p>
          </Col>
          <Col span={12}>
            <p>{userProfileDataList[0].address}</p>
          </Col>
          <Col span={12}>
            <p>{userProfileDataList[0].phoneNumber}</p>
          </Col>
        </Row>
      )} */}
    </main>
  );
}

export default UserProfileTab;

