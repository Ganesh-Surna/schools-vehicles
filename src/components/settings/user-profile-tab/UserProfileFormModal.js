import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "../../vehicles/Vehicles.module.css"
import React from "react";

function UserProfileFormModal({
  isAddUserProfileModalOpen,
  handleAddUserProfile,
  handleCloseAddUserProfileModal,
  isFormValid,
  userProfileParameters,
  hanldeInputChange,
  handleUpdateUser,
  isEdit,
}) {
  return (
    <Modal
      width={"50%"}
      open={isAddUserProfileModalOpen}
      okText={isEdit ? "UPDATE" : "Add"}
      onOk={isEdit ? handleUpdateUser : handleAddUserProfile}
      cancelText={isEdit? "Cancel" :"Close"}
      onCancel={handleCloseAddUserProfileModal}
      title="ADD USER PROFILE"
      okButtonProps={{ disabled: !isFormValid }}
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
              value={userProfileParameters.firstName}
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
              value={userProfileParameters.lastName}
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
              value={userProfileParameters.phoneNumber}
              onChange={(event) => hanldeInputChange("phoneNumber", event)}
              required
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className={classes["input-grp"]}>
            <label htmlFor="email">email</label>
            <Input
              id="email"
              name="email"
              allowClear
              placeholder="Enter email"
              value={userProfileParameters.email}
              onChange={(event) => hanldeInputChange("email", event)}
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
              placeholder="Enter address"
              rows={3}
              value={userProfileParameters.address}
              onChange={(event) => hanldeInputChange("address", event)}
              required
            />
          </div>
        </Col>

        <Col className="gutter-row" span={24}>
          <div className={classes["input-grp"]}>
            <label htmlFor="photo">Photo</label>
            <div className={classes["input-photo-grp"]}>
              <Input
                style={{ padding: "1rem" }}
                type="file"
                accept=".jpg, .png, .jpeg"
                id="photo"
                name="photo"
                onChange={(event) => hanldeInputChange("photo", event)}
                required
              />
              {userProfileParameters.photo && (
                <img
                  src={userProfileParameters.photo.previewUrl}
                  alt="user"
                  style={{ width: "5rem", height: "5rem" }}
                />
              )}
            </div>
          </div>
        </Col>

        {/* <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="zone">Zone</label>
                <Input
                  id="zone"
                  name="zone"
                  allowClear
                  placeholder="Enter zone"
                  value={userProfileParameters.zone}
                  onChange={(event) => hanldeInputChange("zone", event)}
                  required
                />
              </div>
            </Col> */}
      </Row>
    </Modal>
  );
}

export default UserProfileFormModal;
