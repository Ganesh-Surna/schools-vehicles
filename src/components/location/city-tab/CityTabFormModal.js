import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "../../vehicles/Vehicles.module.css"
import React from "react";

function CityTabFormModal({
  isAddCityTabModalOpen,
  handleAddCityTab,
  handleCloseAddCityTabModal,
  cityTabParameters,
  handleUpdateCityTab,

  isFormValid,
  hanldeInputChange,
  isEdit,
}) {
  return (
    <Modal
          width={"50%"}
          open={isAddCityTabModalOpen}
          okText={isEdit ? "UPDATE" : "ADD"}
          onOk={isEdit ? handleUpdateCityTab : handleAddCityTab}
          cancelText={isEdit? "Cancel" :"Close"}
          onCancel={handleCloseAddCityTabModal}
          title="ADD CITY"
          okButtonProps={{disabled: !isFormValid}}
          destroyOnClose
        >
          <Row gutter={[24, 16]} style={{ paddingTop: "1rem" }}>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="city">City Name</label>
                <Input
                  id="city"
                  name="city"
                  allowClear
                  placeholder="Enter city name"
                  value={cityTabParameters.city}
                  onChange={(event) => hanldeInputChange("city", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="state">State Name</label>
                <Input
                  id="state"
                  name="state"
                  allowClear
                  placeholder="Enter state name"
                  value={cityTabParameters.state}
                  onChange={(event) => hanldeInputChange("state", event)}
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
                  placeholder="Enter zip code"
                  value={cityTabParameters.zipCode}
                  onChange={(event) => hanldeInputChange("zipCode", event)}
                  required
                />
              </div>
            </Col>

            {/* <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="coordinates">Coordinates</label>
                <Input
                  id="coordinates"
                  name="coordinates"
                  allowClear
                  placeholder="Enter coordinates"
                  value={cityTabParameters.coordinates}
                  onChange={(event) => hanldeInputChange("coordinates", event)}
                  required
                />
              </div>
            </Col> */}

            {/* <Col className="gutter-row" span={24}>
              <div className={classes["input-grp"]}>
                <label htmlFor="address">Address</label>
                <TextArea
                  id="address"
                  name="address"
                  allowClear
                  placeholder="Enter Address"
                  value={cityTabParameters.address}
                  onChange={(event) => hanldeInputChange("address", event)}
                  required
                  rows={3}
                />
              </div>
            </Col> */}

          </Row>
        </Modal>
  );
}
export default CityTabFormModal;