import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "../../vehicles/Vehicles.module.css"
import React from "react";

function ChildrenTabFormModal({
isAddChildrenModalOpen,
  handleAddChildren,
  handleCloseAddChildrenModal,
  childrenParameters,
  handleUpdateChildren,
  isFormValid,
  hanldeInputChange,
  isEdit,
}) {
  return (
    <Modal
          width={"50%"}
          open={isAddChildrenModalOpen}
          okText={ isEdit ? "Update" : "Add"}
          onOk={isEdit ? handleUpdateChildren : handleAddChildren}
          cancelText={ isEdit ? "Cancel" : "Close"}
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
  );
}
export default ChildrenTabFormModal;