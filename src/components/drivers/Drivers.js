import { Button, Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import classes from "../vehicles/Vehicles.module.css";
import AgGridTable from "../../UI/AgGridTable";

const initialDriverParameters = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  description: "",
  aadhaarNumber: "",
  // documents: "",
  address: "",
}

const columns = [
  {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
  {field: 'firstName', headerName: "First Name", filter: false, minWidth: 200 },
  {field: 'lastName', headerName: "Last Name", filter: false, minWidth: 200},
  {field: "phoneNumber",headerName: "Phone No.", filter: false, minWidth: 200},
  {field: "description",headerName: "Description", filter: false, minWidth: 200},
  {field: "aadhaarNumber",headerName: "Aadhaar No.", filter: false, minWidth: 200},
  // {field: "documents", filter: false, minWidth: 200},
  {field: "address",headerName: "Address", filter: false, minWidth: 200},
]

function Drivers() {

  const [dirversDataList, setDriversDataList] = useState([]);

  const [isAddDriverModalOpen, setIsAddDriverModalOpen] = useState(false);

  const [driverParameters, setDriverParameters] = useState(initialDriverParameters);

  let isFormValid = false;

  function hanldeInputChange(identifier, event) {
    setDriverParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddDriver() {
    setIsAddDriverModalOpen(true);
  }

  function handleCloseAddDriverModal() {
    setDriverParameters(initialDriverParameters);
    setIsAddDriverModalOpen(false);
  }

  if (
    driverParameters.firstName.trim() === "" ||
    driverParameters.lastName.trim() === "" ||
    driverParameters.phoneNumber.trim() === "" ||
    driverParameters.description.trim() === "" ||
    driverParameters.aadhaarNumber.trim() === "" ||
    // driverParameters.documents.trim() === "" ||
    driverParameters.address.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddDriver() {
    console.log("Added driver parameters:", driverParameters);
    setDriversDataList(prev=>[...prev, {Sno: prev.length+1 , ...driverParameters}])
    setDriverParameters(initialDriverParameters);
    setIsAddDriverModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "flex-end" }}
        onClick={handleStartAddDriver}
      >
        Add Driver
      </Button>
      {isAddDriverModalOpen && (
        <Modal
          width={"50%"}
          open={isAddDriverModalOpen}
          okText="Add"
          onOk={handleAddDriver}
          cancelText="Close"
          onCancel={handleCloseAddDriverModal}
          title="ADD DRIVER"
          okButtonProps={{disabled: !isFormValid}}
          destroyOnClose
        >
          <Row gutter={[24, 16]} style={{ paddingTop: "1rem" }}>
            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="firstName">First name</label>
                <Input
                  id="firstName"
                  name="firstName"
                  allowClear
                  placeholder="Enter firstName"
                  value={driverParameters.firstName}
                  onChange={(event) => hanldeInputChange("firstName", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="lastName">Last name</label>
                <Input
                  id="lastName"
                  name="lastName"
                  allowClear
                  placeholder="Enter lastName"
                  value={driverParameters.lastName}
                  onChange={(event) => hanldeInputChange("lastName", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="phoneNumber">Phone no.</label>
                <Input
                  type="number"
                  maxLength={10}
                  id="phoneNumber"
                  name="phoneNumber"
                  allowClear
                  placeholder="Enter phone number"
                  value={driverParameters.phoneNumber}
                  onChange={(event) => hanldeInputChange("phoneNumber", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="description">Description</label>
                <Input
                  id="description"
                  name="description"
                  allowClear
                  placeholder="Enter description"
                  value={driverParameters.description}
                  onChange={(event) => hanldeInputChange("description", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="aadhaarNumber">Aadhaar number</label>
                <Input
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  allowClear
                  placeholder="Enter aadhaarNumber"
                  value={driverParameters.aadhaarNumber}
                  onChange={(event) => hanldeInputChange("aadhaarNumber", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="address">Address</label>
                <Input
                  id="address"
                  name="address"
                  allowClear
                  placeholder="Enter address"
                  value={driverParameters.address}
                  onChange={(event) => hanldeInputChange("address", event)}
                  required
                />
              </div>
            </Col>

          </Row>
        </Modal>
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={dirversDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default Drivers;
