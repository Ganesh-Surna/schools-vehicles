import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "../../vehicles/Vehicles.module.css"
import React from "react";

function HotspotTabFormModal({
  isAddHotspotTabModalOpen,
  handleAddHotspotTab,
  handleCloseAddHotspotTabModal,
  hotspotTabParameters,
  handleUpdateHotspotTab,
  isFormValid,
  hanldeInputChange,
  isEdit,
}) {
  return (
    <Modal
          width={"40%"}
          open={isAddHotspotTabModalOpen}
          okText={isEdit ? "Update" : "Add"}
            onOk={isEdit ? handleUpdateHotspotTab : handleAddHotspotTab}
            cancelText={isEdit? "Cancel" :"Close"}
          onCancel={handleCloseAddHotspotTabModal}
          title="ADD HOTSPOT"
          okButtonProps={{disabled: !isFormValid}}
          destroyOnClose
        >
          <Row gutter={[24, 16]} style={{ paddingTop: "1rem" }}>

            <Col className="gutter-row" span={24}>
              <div className={classes["input-grp"]}>
                <label htmlFor="hotspot">Hotspot Name</label>
                <Input
                  id="hotspot"
                  name="hotspot"
                  allowClear
                  placeholder="Enter hotspot name"
                  value={hotspotTabParameters.hotspot}
                  onChange={(event) => hanldeInputChange("hotspot", event)}
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
                  value={hotspotTabParameters.description}
                  onChange={(event) => hanldeInputChange("description", event)}
                  required
                />
              </div>
            </Col>

          </Row>
        </Modal>
  );
}
export default HotspotTabFormModal;