import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "../vehicles/Vehicles.module.css"
import React from "react";

function SchoolsFormModal({
  isAddSchoolModalOpen,
  handleAddSchool,
  handleCloseAddSchoolModal,
  schoolParameters,
  handleUpdateSchool,
  isFormValid,
  hanldeInputChange,
  isEdit,
}) {
  return (
    <Modal
          width={"50%"}
          open={isAddSchoolModalOpen}
          okText={isEdit ? "Update" : "Add"}
            onOk={isEdit ? handleUpdateSchool : handleAddSchool}
            cancelText={isEdit? "Cancel" :"Close"}
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
                <label htmlFor="branch">Branch</label>
                <Input
                  id="branch"
                  name="branch"
                  allowClear
                  placeholder="Enter branch"
                  value={schoolParameters.branch}
                  onChange={(event) => hanldeInputChange("branch", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="city">City</label>
                <Input
                  id="city"
                  name="city"
                  allowClear
                  placeholder="Enter city"
                  value={schoolParameters.city}
                  onChange={(event) => hanldeInputChange("city", event)}
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
                <label htmlFor="coordinates">Coordinates</label>
                <Input
                  id="coordinates"
                  name="coordinates"
                  allowClear
                  placeholder="Enter coordinates"
                  value={schoolParameters.coordinates}
                  onChange={(event) => hanldeInputChange("coordinates", event)}
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
                  value={schoolParameters.zone}
                  onChange={(event) => hanldeInputChange("zone", event)}
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

            <Col className="gutter-row" span={24}>
              <div className={classes["input-grp"]}>
                <label htmlFor="address">Address</label>
                <TextArea
                  id="address"
                  name="address"
                  allowClear
                  placeholder="Enter Address"
                  value={schoolParameters.address}
                  onChange={(event) => hanldeInputChange("address", event)}
                  required
                  rows={3}
                />
              </div>
            </Col>

          </Row>
        </Modal>
  );
}
export default SchoolsFormModal;
