import { Button, Col, Input, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import classes from "../vehicles/Vehicles.module.css";
import AgGridTable from "../../UI/AgGridTable";
import TextArea from "antd/es/input/TextArea";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  deleteDriverData,
  fetchDriverData,
  postDriverData,
  putDriverData,
  queryClientObj,
} from "../../util/http";
import DriverFormModal from "./DriverFormModal";

const initialDriverParameters = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  description: "",
  aadhaarNumber: "",
  drivingLicence: null,
  photo: null,
  presentAddress: "",
  permanentAddress: "",
  zone: "",
  city: "",
  type: "",
};

function Drivers() {
  const [dirversDataList, setDriversDataList] = useState([]);
  const [isAddDriverModalOpen, setIsAddDriverModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(false);
  const [driverParameters, setDriverParameters] = useState(
    initialDriverParameters
  );
  let isFormValid = false;

  const { data: driverData } = useQuery({
    queryKey: ["driver"],
    queryFn: ({ signal }) => fetchDriverData({ signal }),
  });

  useEffect(() => {
    if (driverData) {
      console.log("driver data: ", driverData);
      const updatedData = driverData.map((each, index) => {
        return { ...each, Sno: index + 1 };
      });
      setDriversDataList(updatedData);
    }
  }, [driverData]);

  const { mutate: driverMutate } = useMutation({
    mutationFn: isEdit ? putDriverData : postDriverData,
    onSuccess: async () => {
      await queryClientObj.invalidateQueries(["driver"]);
    },
  });
  const { mutate: deleteDriverMutate } = useMutation({
    mutationFn: deleteDriverData,
    onSuccess: async () => {
      await queryClientObj.invalidateQueries(["driver"]);
    },
  });

  function handleStartUpdateRow(data) {
    const {
      id,
      firstName,
      lastName,
      phoneNumber,
      description,
      aadhaarNumber,
      drivingLicence,
      photo,
      presentAddress,
      permanentAddress,
      zone,
      city,
      type,
    } = data;
    setEditingId(id);
    setDriverParameters({
      firstName,
      lastName,
      phoneNumber : phoneNumber.toString(),
      description,
      aadhaarNumber: aadhaarNumber.toString(),
      drivingLicence,
      photo,
      presentAddress,
      permanentAddress,
      zone,
      city,
      type,
    });
    setIsEdit(true);
    setIsAddDriverModalOpen(true);
  }

  function handleDeleteRow(data) {
    const { id } = data;
    deleteDriverMutate(id);
  }

  function handleUpdateDriver(){
    const updatedData = {
      ...driverParameters,
      phoneNumber: +driverParameters.phoneNumber,
      aadhaarNumber: +driverParameters.aadhaarNumber,
      photo: driverParameters.photo.file.name,
      drivingLicence: driverParameters.drivingLicence.file.name,
    };
    driverMutate({driverData : updatedData, id: editingId});
    setIsAddDriverModalOpen(false);
    setIsEdit(false);
    setEditingId(null);
    setDriverParameters(initialDriverParameters);
  }

  const columns = [
    {
      field: "Sno",
      headerName: "Sno.",
      filter: false,
      minWidth: 100,
      maxWidth: 150,
      cellStyle: { backgroundColor: "rgba(255,255,255", textAlign: "center" },
    },
    {
      field: "firstName",
      headerName: "First Name",
      filter: false,
      minWidth: 200,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      filter: false,
      minWidth: 200,
    },
    {
      field: "phoneNumber",
      headerName: "Phone No.",
      filter: false,
      minWidth: 200,
    },
    // {field: "drivingLicence",headerName: "", filter: false, minWidth: 200},
    {
      field: "aadhaarNumber",
      headerName: "Aadhaar No.",
      filter: false,
      minWidth: 200,
    },
    { field: "type", headerName: "Type", filter: false, minWidth: 200 },
    { field: "zone", headerName: "Zone", filter: false, minWidth: 200 },
    { field: "city", headerName: "City", filter: false, minWidth: 200 },
    {
      field: "presentAddress",
      headerName: "Present Address",
      filter: false,
      minWidth: 300,
    },
    {
      field: "permanentAddress",
      headerName: "Permanent Address",
      filter: false,
      minWidth: 300,
    },
    {
      field: "description",
      headerName: "Description",
      filter: false,
      minWidth: 200,
    },
    {
      headerName: "Actions",
      field: "Sno",
      filter: false,
      // minWidth: 300,
      cellRenderer: (params) => (
        <div>
          <Button
            type="primary"
            style={{ backgroundColor: "green", marginRight: "0.5rem" }}
            onClick={handleStartUpdateRow.bind(this, params.data)}
          >
            Update
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: "red" }}
            onClick={handleDeleteRow.bind(this, params.data)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  function hanldeInputChange(identifier, event) {
    if (identifier === "photo" || identifier === "drivingLicence") {
      const file = event.target.files[0];
      const reader = new FileReader(new Blob());
      reader.onload = (e) => {
        console.log({ file: file, previewUrl: e.target.result });
        setDriverParameters((prev) => ({
          ...prev,
          [identifier]: { file: file, previewUrl: e.target.result },
        }));
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        setDriverParameters((prev) => ({
          ...prev,
          [identifier]: null,
        }));
      }
    }
    // else if(identifier === "drivingLicence"){
    //   setDriverParameters((prev) => ({
    //     ...prev,
    //     [identifier]: event.target.files[0],
    //   }));
    // }
    else {
      setDriverParameters((prev) => ({
        ...prev,
        [identifier]: event.target.value,
      }));
    }
  }

  function handleStartAddDriver() {
    setIsAddDriverModalOpen(true);
  }

  function handleCloseAddDriverModal() {
    setDriverParameters(initialDriverParameters);
    setIsAddDriverModalOpen(false);
  }

  if (
    driverParameters.firstName.trim() === "" ||
    driverParameters.lastName.trim() === "" ||
    driverParameters.phoneNumber.trim() === "" ||
    driverParameters.description.trim() === "" ||
    driverParameters.aadhaarNumber.trim() === "" ||
    driverParameters.drivingLicence === null ||
    driverParameters.photo === null ||
    driverParameters.type.trim() === "" ||
    driverParameters.zone.trim() === "" ||
    driverParameters.city.trim() === "" ||
    driverParameters.presentAddress.trim() === "" ||
    driverParameters.permanentAddress.trim() === ""
  ) {
    isFormValid = false;
  } else {
    isFormValid = true;
  }

  function handleAddDriver() {
    console.log("Added driver parameters:", driverParameters);
    const updatedData = {
      ...driverParameters,
      phoneNumber: +driverParameters.phoneNumber,
      aadhaarNumber: +driverParameters.aadhaarNumber,
      photo: driverParameters.photo.file.name,
      drivingLicence: driverParameters.drivingLicence.file.name,
    };
    driverMutate(updatedData);
    // setDriversDataList(prev=>[...prev, {Sno: prev.length+1 , ...driverParameters}])
    setDriverParameters(initialDriverParameters);
    setIsAddDriverModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "flex-end" }}
        onClick={handleStartAddDriver}
      >
        Add Driver
      </Button>
      {isAddDriverModalOpen && (
        <DriverFormModal
          isAddDriverModalOpen={isAddDriverModalOpen}
          handleAddDriver={handleAddDriver}
          handleCloseAddDriverModal={handleCloseAddDriverModal}
          driverParameters={driverParameters}
          handleUpdateDriver={handleUpdateDriver}
          isFormValid={isFormValid}
          hanldeInputChange={hanldeInputChange}
          isEdit={isEdit}
        />
      )}

      <div className={classes["table-container"]}>
        <AgGridTable
          rowDataArr={dirversDataList}
          columns={columns}
          width="100%"
        />
      </div>
    </main>
  );
}

export default Drivers;
