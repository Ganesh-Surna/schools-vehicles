import { Button, Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import classes from "../../vehicles/Vehicles.module.css"
import AgGridTable from "../../../UI/AgGridTable";


const initialChildrenParameters = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  aadhaarNumber: "",
  school: "",
  zone: "",
  address: "",
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
]

function ChildrenTab({onAddChildren, childrenDataList1}) {
  const [childrenDataList, setChildrenDataList] = useState([]);

  const [isAddChildrenModalOpen, setIsAddChildrenModalOpen] = useState(false);

  const [childrenParameters, setChildrenParameters] = useState(initialChildrenParameters);

  let isFormValid = false;

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
    setChildrenDataList(prev=>[...prev, {Sno: prev.length+1 , ...childrenParameters}]);
    onAddChildren(childrenParameters);
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
        <Modal
          width={"50%"}
          open={isAddChildrenModalOpen}
          okText="Add"
          onOk={handleAddChildren}
          cancelText="Close"
          onCancel={handleCloseAddChildrenModal}
          title="ADD Children"
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
                  placeholder="Enter first name"
                  value={childrenParameters.firstName}
                  onChange={(event) => hanldeInputChange("firstName", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="lastName">Last Name</label>
                <Input
                  id="lastName"
                  name="lastName"
                  allowClear
                  placeholder="Enter last name"
                  value={childrenParameters.lastName}
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
                  value={childrenParameters.phoneNumber}
                  onChange={(event) => hanldeInputChange("phoneNumber", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="aadhaarNumber">Aadhaar Number</label>
                <Input
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  allowClear
                  placeholder="Enter aadhaar number"
                  value={childrenParameters.aadhaarNumber}
                  onChange={(event) => hanldeInputChange("aadhaarNumber", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="school">School</label>
                <Input
                  id="school"
                  name="school"
                  allowClear
                  placeholder="Enter school"
                  value={childrenParameters.school}
                  onChange={(event) => hanldeInputChange("school", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="zone">Zone</label>
                <Input
                  id="zone"
                  name="zone"
                  allowClear
                  placeholder="Enter zone"
                  value={childrenParameters.zone}
                  onChange={(event) => hanldeInputChange("zone", event)}
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
                  value={childrenParameters.address}
                  onChange={(event) => hanldeInputChange("address", event)}
                  required
                />
              </div>
            </Col>

          </Row>
        </Modal>
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={childrenDataList1} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default ChildrenTab;

