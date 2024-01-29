import { Button, Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import classes from "./Vehicles.module.css";
import AgGridTable from "../../UI/AgGridTable";

const initialVehicleParameters = {
  vehicleName: "",
  vehicleType: "",
  phoneNumber: "",
  deviceId: "",
  area: "",
}

const columns = [
  {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
  {field: 'vehicleName', headerName: "Vehicle Name", filter: false, minWidth: 200 },
  {field: 'vehicleType', headerName: "Vehicle Type", filter: false, minWidth: 200},
  {field: "phoneNumber", headerName: "Phone No.", filter: false, minWidth: 200},
  {field: "deviceId", headerName: "Device Id", filter: false, minWidth: 200},
  {field: "area", headerName: "Area", filter: false, minWidth: 300},
]

function Vehicles() {
  const [vehiclesDataList, setVehiclesDataList] = useState([]);

  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);

  const [vehicleParameters, setVehicleParameters] = useState(initialVehicleParameters);

  let isFormValid = false;

  function hanldeInputChange(identifier, event) {
    setVehicleParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddVehicle() {
    setIsAddVehicleModalOpen(true);
  }

  function handleCloseAddVehicleModal() {
    setVehicleParameters(initialVehicleParameters);
    setIsAddVehicleModalOpen(false);
  }

  if (
    vehicleParameters.vehicleName.trim() === "" ||
    vehicleParameters.vehicleType.trim() === "" ||
    vehicleParameters.phoneNumber.trim() === "" ||
    vehicleParameters.deviceId.trim() === "" ||
    vehicleParameters.area.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddVehicle() {
    console.log("Added vehicle parameters:", vehicleParameters);
    setVehiclesDataList(prev=>[...prev, {Sno: prev.length+1 , ...vehicleParameters}]);
    setVehicleParameters(initialVehicleParameters);
    setIsAddVehicleModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "flex-end" }}
        onClick={handleStartAddVehicle}
      >
        Add Vehicle
      </Button>
      {isAddVehicleModalOpen && (
        <Modal
          width={"50%"}
          open={isAddVehicleModalOpen}
          okText="Add"
          onOk={handleAddVehicle}
          cancelText="Close"
          onCancel={handleCloseAddVehicleModal}
          title="ADD VEHICLE"
          okButtonProps={{disabled: !isFormValid}}
          destroyOnClose
        >
          <Row gutter={[24, 16]} style={{ paddingTop: "1rem" }}>
            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="vehicleName">Vehicle name</label>
                <Input
                  id="vehicleName"
                  name="vehicleName"
                  allowClear
                  placeholder="Enter vehicle name"
                  value={vehicleParameters.vehicleName}
                  onChange={(event) => hanldeInputChange("vehicleName", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="vehicleType">Vehicle type</label>
                <Input
                  id="vehicleType"
                  name="vehicleType"
                  allowClear
                  placeholder="Enter vehicle type"
                  value={vehicleParameters.vehicleType}
                  onChange={(event) => hanldeInputChange("vehicleType", event)}
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
                  value={vehicleParameters.phoneNumber}
                  onChange={(event) => hanldeInputChange("phoneNumber", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="deviceId">Device id</label>
                <Input
                  id="deviceId"
                  name="deviceId"
                  allowClear
                  placeholder="Enter device id"
                  value={vehicleParameters.deviceId}
                  onChange={(event) => hanldeInputChange("deviceId", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="area">Area</label>
                <Input
                  id="area"
                  name="area"
                  allowClear
                  placeholder="Enter area"
                  value={vehicleParameters.area}
                  onChange={(event) => hanldeInputChange("area", event)}
                  required
                />
              </div>
            </Col>
          </Row>
        </Modal>
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={vehiclesDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default Vehicles;
