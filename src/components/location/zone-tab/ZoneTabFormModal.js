import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "../../vehicles/Vehicles.module.css";
import React from "react";

function ZoneTabFormModal({
  hanldeInputChange,
  isAddZoneTabModalOpen,
  handleAddZoneTab,
  isEdit,
  handleCloseAddZoneTabModal,
  isFormValid,
  zoneTabParameters,
  handleUpdateZoneTab
}) {
  return (
    <Modal
      width={"40%"}
      open={isAddZoneTabModalOpen}
      okText={isEdit ? "Update" : "Add"}
      onOk={isEdit ? handleUpdateZoneTab : handleAddZoneTab}
      cancelText={isEdit ? "Cancel" : "Close"}
      onCancel={handleCloseAddZoneTabModal}
      title="ADD ZONE"
      okButtonProps={{ disabled: !isFormValid }}
      destroyOnClose
    >
      <Row gutter={[24, 16]} style={{ paddingTop: "1rem" }}>
        <Col className="gutter-row" span={24}>
          <div className={classes["input-grp"]}>
            <label htmlFor="zone">zone Name</label>
            <Input
              id="zone"
              name="zone"
              allowClear
              placeholder="Enter zone name"
              value={zoneTabParameters.zone}
              onChange={(event) => hanldeInputChange("zone", event)}
              required
            />
          </div>
        </Col>

        <Col className="gutter-row" span={24}>
          <div className={classes["input-grp"]}>
            <label htmlFor="description">Description</label>
            <TextArea
              id="description"
              name="description"
              allowClear
              rows={3}
              placeholder="Enter description"
              value={zoneTabParameters.description}
              onChange={(event) => hanldeInputChange("description", event)}
              required
            />
          </div>
        </Col>
      </Row>
    </Modal>
  );
}

export default ZoneTabFormModal;
