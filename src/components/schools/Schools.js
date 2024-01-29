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
  zipCode: "",
  phoneNumber: "",
}

const columns = [
  {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
  {field: 'schoolName', headerName: "School Name", filter: false, minWidth: 200 },
  {field: 'email', headerName: "Email", filter: false, minWidth: 200},
  {field: "country", headerName: "Country", filter: false, minWidth: 200},
  {field: "state", headerName: "State", filter: false, minWidth: 200},
  {field: "address", headerName: "Address", filter: false, minWidth: 200},
  {field: "zipCode", headerName: "Zipcode", filter: false, minWidth: 200},
  {field: "phoneNumber", headerName: "Phone Number", filter: false, minWidth: 200},
]

function Schools() {
  const [schoolsDataList, setSchoolsDataList] = useState([]);
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
    schoolParameters.zipCode.trim() === "" ||
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
    setSchoolsDataList(prev=> [...prev, {Sno: prev.length+1, ...schoolParameters}])
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
                <label htmlFor="zipCode">Zipcode</label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  allowClear
                  placeholder="Enter zipCode"
                  value={schoolParameters.zipCode}
                  onChange={(event) => hanldeInputChange("zipCode", event)}
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
        <AgGridTable rowDataArr={schoolsDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default Schools;
