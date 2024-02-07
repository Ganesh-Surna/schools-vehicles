import { Button} from "antd";
import React, { useEffect, useState } from "react";
import classes from "./Vehicles.module.css";
import AgGridTable from "../../UI/AgGridTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteVehicleData, fetchVehicleData, postVehicleData, putVehicleData, queryClientObj } from "../../util/http";
import VehiclesFormModal from "./VehiclesFormModal";

const initialVehicleParameters = {
  vehicleName: "",
  vehicleType: "",
  vehicleNumber: "",
  deviceId: "",
  area: "",
  zone: "",
}


function Vehicles() {
  const [vehiclesDataList, setVehiclesDataList] = useState([]);
  const [isAddVehicleModalOpen, setIsAddVehicleModalOpen] = useState(false);
  const [vehicleParameters, setVehicleParameters] = useState(initialVehicleParameters);
  const [isEdit, setIsEdit] = useState(false);
  const [editingId, setEditingId] = useState(false);
  let isFormValid = false;
  
  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: 'vehicleName', headerName: "Vehicle Name", filter: false, minWidth: 200 },
    {field: 'vehicleType', headerName: "Vehicle Type", filter: false, minWidth: 200},
    {field: "vehicleNumber", headerName: "Vehicle No.", filter: false, minWidth: 200},
    {field: "deviceId", headerName: "Device Id", filter: false, minWidth: 200},
    {field: "zone", headerName: "Zone", filter: false, minWidth: 200},
    {field: "area", headerName: "Area", filter: false, minWidth: 300},
    {
      headerName: "Actions",
      field: "Sno",
      filter: false,
      // minWidth: 300,
      cellRenderer: (params) => (
        <div>
          <Button
            type="primary"
            style={{backgroundColor:"green", marginRight: "0.5rem"}}
            onClick={handleStartUpdateRow.bind(this, params.data)}
          >
            Update
          </Button>
          <Button
            type="primary"
            style={{backgroundColor:"red"}}
            onClick={handleDeleteRow.bind(this, params.data)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ]

  const {mutate: vehicleMutate} = useMutation({
    mutationFn: isEdit ? putVehicleData : postVehicleData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["vehicle"]);
      setIsAddVehicleModalOpen(false);
      setIsEdit(false);
      setEditingId(null);
      setVehicleParameters(initialVehicleParameters)
    }
  })

  const {mutate: deleteVehicleMutate} = useMutation({
    mutationFn: deleteVehicleData,
    onSuccess: async()=>{
      await queryClientObj.invalidateQueries(["vehicle"]);
    }
  })

  const {data: vehicleData} = useQuery({
    queryKey: ["vehicle"],
    queryFn: ({signal})=> fetchVehicleData({signal}),
  })

  useEffect(()=>{
    if(vehicleData){
      console.log("vehicle data: ", vehicleData)
      const updatedVehiclesData = vehicleData.map((each, index)=>{
        return {...each, Sno: index+1}
      })
      setVehiclesDataList(updatedVehiclesData);
    }
  },[vehicleData])


    function handleStartUpdateRow(data) {
      const {
        id,
        vehicleName,
        vehicleType,
        vehicleNumber,
        deviceId,
        area,
        zone,
      } = data;
      setEditingId(id);
      setVehicleParameters({
        vehicleName,
        vehicleType,
        vehicleNumber: vehicleNumber.toString(),
        deviceId,
        area,
        zone,
      });
      setIsEdit(true);
      setIsAddVehicleModalOpen(true);
    }
  
    function handleDeleteRow(data) {
      const { id } = data;
      deleteVehicleMutate(id);
    }
  
    function handleUpdateVehicle(){
      const updatedData = {...vehicleParameters, vehicleNumber: +vehicleParameters.vehicleNumber}
      vehicleMutate({vehicleData : updatedData, id: editingId});
      setIsAddVehicleModalOpen(false);
    }


  function hanldeInputChange(identifier, event) {
    setVehicleParameters((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleStartAddVehicle() {
    setIsAddVehicleModalOpen(true);
  }

  function handleCloseAddVehicleModal() {
    setVehicleParameters(initialVehicleParameters);
    setIsAddVehicleModalOpen(false);
  }

  if (
    vehicleParameters.vehicleName.trim() === "" ||
    vehicleParameters.vehicleType.trim() === "" ||
    vehicleParameters.vehicleName.trim() === "" ||
    vehicleParameters.deviceId.trim() === "" ||
    vehicleParameters.zone.trim() === "" ||
    vehicleParameters.area.trim() === ""
  ){
    isFormValid= false;
  }
  else{
    isFormValid= true;
  }

  function handleAddVehicle() {
    console.log("Added vehicle parameters:", vehicleParameters);
    const updatedData = {...vehicleParameters, vehicleNumber: +vehicleParameters.vehicleNumber}
    vehicleMutate(updatedData);
    // setVehiclesDataList(prev=>[...prev, {Sno: prev.length+1 , ...vehicleParameters}]);
    setVehicleParameters(initialVehicleParameters);
    setIsAddVehicleModalOpen(false);
  }

  return (
    <main className={classes["whole-container"]}>
      <Button
        type="primary"
        style={{ alignSelf: "flex-end" }}
        onClick={handleStartAddVehicle}
      >
        Add Vehicle
      </Button>
      {isAddVehicleModalOpen && (
        <VehiclesFormModal
          isAddVehicleModalOpen={isAddVehicleModalOpen}
          handleAddVehicle={handleAddVehicle}
          handleCloseAddVehicleModal={handleCloseAddVehicleModal}
          vehicleParameters={vehicleParameters}
          handleUpdateVehicle={handleUpdateVehicle}

          isFormValid={isFormValid}
          hanldeInputChange={hanldeInputChange}
          isEdit={isEdit}
        />
      )}

      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={vehiclesDataList} columns={columns} width="100%"/>
      </div>
    </main>
  );
}

export default Vehicles;
