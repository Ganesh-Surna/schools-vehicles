import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "./Vehicles.module.css"
import React from "react";

function VehiclesFormModal({
    isAddVehicleModalOpen,
    handleAddVehicle,
    handleCloseAddVehicleModal,
    vehicleParameters,
    handleUpdateVehicle,

  isFormValid,
  hanldeInputChange,
  isEdit,
}) {
  return (
    <Modal
          width={"50%"}
          open={isAddVehicleModalOpen}
          okText={isEdit ? "UPDATE" : "ADD"}
            onOk={isEdit ? handleUpdateVehicle : handleAddVehicle}
            cancelText={isEdit? "Cancel" :"Close"}
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
                <label htmlFor="vehicleNumber">Vehicle Number</label>
                <Input
                  maxLength={10}
                  id="vehicleNumber"
                  name="vehicleNumber"
                  allowClear
                  placeholder="Enter vehicle number"
                  value={vehicleParameters.vehicleNumber}
                  onChange={(event) => hanldeInputChange("vehicleNumber", event)}
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
                <label htmlFor="zone">Zone</label>
                <Input
                  maxLength={10}
                  id="zone"
                  name="zone"
                  allowClear
                  placeholder="Enter phone number"
                  value={vehicleParameters.zone}
                  onChange={(event) => hanldeInputChange("zone", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={24}>
              <div className={classes["input-grp"]}>
                <label htmlFor="area">Area</label>
                <TextArea
                  id="area"
                  name="area"
                  allowClear
                  placeholder="Enter area"
                  value={vehicleParameters.area}
                  onChange={(event) => hanldeInputChange("area", event)}
                  required
                  rows={3}
                />
              </div>
            </Col>

          </Row>
        </Modal>
  );
}
export default VehiclesFormModal;


