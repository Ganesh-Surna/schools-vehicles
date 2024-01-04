import { Button, Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import classes from "../vehicles/Vehicles.module.css";
import AgGridTable from "../../UI/AgGridTable";

const initialSchoolParameters = {
  schoolName: "",
  email: "",
  country: "",
  state: "",
  address: "",
  pinCode: "",
  phoneNumber: "",
}

const columns = [
  {field: "Sno", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
  {field: 'schoolName', filter: false, minWidth: 200 },
  {field: 'email', filter: false, minWidth: 200},
  {field: "country.", filter: false, minWidth: 200},
  {field: "state", filter: false, minWidth: 200},
  {field: "address", filter: false, minWidth: 200},
  {field: "pinCode", filter: false, minWidth: 200},
  {field: "phoneNo.", filter: false, minWidth: 200},
]

function Schools() {
  const [isAddSchoolModalOpen, setIsAddSchoolModalOpen] = useState(false);

  const [schoolParameters, setSchoolParameters] = useState(initialSchoolParameters);

  let isFormValid = false;

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
    schoolParameters.address.trim() === "" ||
    schoolParameters.country.trim() === "" ||
    schoolParameters.email.trim() === "" ||
    schoolParameters.pinCode.trim() === "" ||
    schoolParameters.state.trim() === "" ||
    schoolParameters.phoneNumber.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddSchool() {
    console.log("Added school parameters:", schoolParameters);
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
        <Modal
          width={"50%"}
          open={isAddSchoolModalOpen}
          okText="Add"
          onOk={handleAddSchool}
          cancelText="Close"
          onCancel={handleCloseAddSchoolModal}
          title="ADD SCHOOL"
          okButtonProps={{disabled: !isFormValid}}
          destroyOnClose
        >
          <Row gutter={[24, 16]} style={{ paddingTop: "1rem" }}>
            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="schoolName">School name</label>
                <Input
                  id="schoolName"
                  name="schoolName"
                  allowClear
                  placeholder="Enter school name"
                  value={schoolParameters.schoolName}
                  onChange={(event) => hanldeInputChange("schoolName", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  allowClear
                  placeholder="Enter email"
                  value={schoolParameters.email}
                  onChange={(event) => hanldeInputChange("email", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="country">Country</label>
                <Input
                  id="country"
                  name="country"
                  allowClear
                  placeholder="Enter country"
                  value={schoolParameters.country}
                  onChange={(event) => hanldeInputChange("country", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="state">State</label>
                <Input
                  id="state"
                  name="state"
                  allowClear
                  placeholder="Enter state"
                  value={schoolParameters.state}
                  onChange={(event) => hanldeInputChange("state", event)}
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
                  value={schoolParameters.address}
                  onChange={(event) => hanldeInputChange("address", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="pinCode">Pincode</label>
                <Input
                  id="pinCode"
                  name="pinCode"
                  allowClear
                  placeholder="Enter pinCode"
                  value={schoolParameters.pinCode}
                  onChange={(event) => hanldeInputChange("pinCode", event)}
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
                  value={schoolParameters.phoneNumber}
                  onChange={(event) => hanldeInputChange("phoneNumber", event)}
                  required
                />
              </div>
            </Col>

          </Row>
        </Modal>
      )}

      <div className={classes["table-container"]}>
        <AgGridTable columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default Schools;
