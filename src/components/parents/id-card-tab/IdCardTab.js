import React, { useState } from 'react'
import classes from "../../vehicles/Vehicles.module.css"
import AgGridTable from '../../../UI/AgGridTable'
import { Button } from 'antd'


function IdCardTab() {
  const [childrenDataList, setChildrenDataList] = useState([]);

  function handleGenerateId(data){
    console.log(data);
  }

  const columns = [
    {field: "Sno", headerName: "Sno.", filter: false, minWidth: 100, maxWidth: 150, cellStyle: {backgroundColor:"rgba(255,255,255" , textAlign: "center"}},
    {field: 'childrenName', headerName: "Children Name", filter: false, minWidth: 300 },
    {field: 'parentName', headerName: "Parent Name", filter: false, minWidth: 300},
    {
      field: "idStatus", headerName: "Id Status", filter: false, minWidth: 250,
      cellRenderer: (params) => (
        <div style={{color: params.data.idStatus === "Has id" ? "green" : "red"}}>{params.data.idStatus}</div>
      )
    },
    {
      field: "Sno", headerName: "Action", filter: false, minWidth: 200,
      cellRenderer: (params) => (
        <div>
          <Button
          type="primary"
          style={{background: "rgb(15, 209, 41)"}}
            className={classes.update}
            onClick={handleGenerateId.bind(this, params.data)}
          >
            Generate Id
          </Button>
        </div>
      )
    },
  ]
  return (
    <main className={classes["whole-container"]}>
      <div className={classes["table-container"]}>
        <AgGridTable rowDataArr={childrenDataList} columns={columns} width="100%"/>
      </div>
    </main>
  )
}

export default IdCardTab
