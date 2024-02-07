import { Col, Modal, Row, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import classes from "../vehicles/Vehicles.module.css"
import React from "react";

function DriverFormModal({
    isAddDriverModalOpen,
  handleAddDriver,
  handleCloseAddDriverModal,
  driverParameters,
  handleUpdateDriver,
  isFormValid,
  hanldeInputChange,
  isEdit,
}) {
  return (
    <Modal
          width={"55%"}
          open={isAddDriverModalOpen}
            okText={isEdit ? "UPDATE" : "ADD"}
            onOk={isEdit ? handleUpdateDriver : handleAddDriver}
            cancelText={isEdit? "Cancel" :"Close"}
          onCancel={handleCloseAddDriverModal}
          title="ADD DRIVER"
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
                  value={driverParameters.firstName}
                  onChange={(event) => hanldeInputChange("firstName", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="lastName">Last name</label>
                <Input
                  id="lastName"
                  name="lastName"
                  allowClear
                  placeholder="Enter last name"
                  value={driverParameters.lastName}
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
                  value={driverParameters.phoneNumber}
                  onChange={(event) => hanldeInputChange("phoneNumber", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="description">Description</label>
                <Input
                  id="description"
                  name="description"
                  allowClear
                  placeholder="Enter description"
                  value={driverParameters.description}
                  onChange={(event) => hanldeInputChange("description", event)}
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="aadhaarNumber">Aadhaar number</label>
                <Input
                  id="aadhaarNumber"
                  name="aadhaarNumber"
                  allowClear
                  placeholder="Enter aadhaar number"
                  value={driverParameters.aadhaarNumber}
                  onChange={(event) =>
                    hanldeInputChange("aadhaarNumber", event)
                  }
                  required
                />
              </div>
            </Col>

            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="type">Type</label>
                <Input
                  id="type"
                  name="type"
                  allowClear
                  placeholder="Enter type"
                  value={driverParameters.type}
                  onChange={(event) => hanldeInputChange("type", event)}
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
                  value={driverParameters.zone}
                  onChange={(event) => hanldeInputChange("zone", event)}
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
                  value={driverParameters.city}
                  onChange={(event) => hanldeInputChange("city", event)}
                  required
                />
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="presentAddress">Present Address</label>
                <TextArea
                  id="presentAddress"
                  name="presentAddress"
                  allowClear
                  placeholder="Enter present address"
                  value={driverParameters.presentAddress}
                  onChange={(event) =>
                    hanldeInputChange("presentAddress", event)
                  }
                  required
                  rows={3}
                />
              </div>
            </Col>
            <Col className="gutter-row" span={12}>
              <div className={classes["input-grp"]}>
                <label htmlFor="permanentAddress">Permanent Address</label>
                <TextArea
                  id="permanentAddress"
                  name="permanentAddress"
                  allowClear
                  placeholder="Enter permanent address"
                  value={driverParameters.permanentAddress}
                  onChange={(event) =>
                    hanldeInputChange("permanentAddress", event)
                  }
                  required
                  rows={3}
                />
              </div>
            </Col>

            <Col className="gutter-row" span={24}>
              <div className={classes["input-grp"]}>
                <label htmlFor="drivingLicence">Driving Licence</label>
                <div className={classes["input-photo-grp"]}>
                  <Input
                    id="drivingLicence"
                    name="drivingLicence"
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                    style={{ padding: "1rem" }}
                    onChange={(event) =>
                      hanldeInputChange("drivingLicence", event)
                    }
                    required
                  />
                  {/* {driverParameters.drivingLicence &&
                    (driverParameters.drivingLicence.file.name.endsWith(
                      ".jpg"
                    ) ||
                      driverParameters.drivingLicence.file.name.endsWith(
                        ".png"
                      ) ||
                      driverParameters.drivingLicence.file.name.endsWith(
                        ".jpeg"
                      )) && (
                      <img
                        src={driverParameters.drivingLicence.previewUrl}
                        alt="driver licence"
                        style={{ width: "5rem", height: "5rem" }}
                      />
                    )} */}
                </div>
              </div>
            </Col>

            <Col className="gutter-row" span={24}>
              <div className={classes["input-grp"]}>
                <label htmlFor="photo">Driver Photo</label>
                <div className={classes["input-photo-grp"]}>
                  <Input
                    style={{ padding: "1rem" }}
                    id="photo"
                    name="photo"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(event) => hanldeInputChange("photo", event)}
                    required
                  />
                  {driverParameters.photo && (
                    <img
                      src={driverParameters.photo.previewUrl}
                      alt="driver"
                      style={{ width: "5rem", height: "5rem" }}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
  );
}
export default DriverFormModal;


// import { Col, Modal, Row, Input } from "antd";
// import TextArea from "antd/es/input/TextArea";
// import classes from "../../vehicles/Vehicles.module.css"
// import React from "react";

// function DriverFormModal({
//   isAddModalOpen,
//   handleAdd,
//   handleCloseAddModal,
//   Parameters,
//   handleUpdate,

//   isFormValid,
//   hanldeInputChange,
//   isEdit,
// }) {
//   return (
    
//   );
// }
// export default DriverFormModal;


// okText={isEdit ? "UPDATE" : "ADD"}
// onOk={isEdit ?  : }
// cancelText={isEdit? "Cancel" :"Close"}






{/* <DriverFormModal
          isAddModalOpen={isAddDriverModalOpen}
          handleAdd={handleAddDriver}
          handleCloseAddModal={handleCloseAddDriverModal}
          Parameters={driverParameters}
          handleUpdate={handleUpdateDriver}

          isFormValid={isFormValid}
          hanldeInputChange={hanldeInputChange}
          isEdit={isEdit}
        /> */}



        // const [isEdit, setIsEdit] = useState(false);
        // const [editingId, setEditingId] = useState(false);



        // const { mutate: deleteDriverMutate } = useMutation({
        //     mutationFn: deleteDriverData,
        //     onSuccess: async () => {
        //       await queryClientObj.invalidateQueries(["driver"]);
        //     },
        //   });
        
        //   function handleStartUpdateRow(data) {
        //     const {
        //       id,
        //        
        //     } = data;
        //     setEditingId(id);
        //     setDriverParameters({
        //  
        //     });
        //     setIsEdit(true);
        //     setIsAddDriverModalOpen(true);
        //   }
        
        //   function handleDeleteRow(data) {
        //     const { id } = data;
        //     deleteDriverMutate(id);
        //   }
        
        //   function handleUpdateDriver(){
        //     const updatedData = {
        //       
        //     };
        //     driverMutate({driverData : updatedData, id: editingId});
        //     setIsAddDriverModalOpen(false);
        //   }





