import { Menu } from 'antd';
import React, { useState } from 'react'
import classes from "../parents/Parents.module.css"
import DriversTab from './drivers-tab/DriversTab';
import VehiclesTab from './vehicles-tab/VehiclesTab';
import SchoolsTab from './schools-tab/SchoolsTab';
import StudentsTab from './students-tab/StudentsTab';

function Approvals() {
  const [selectedTab, setSelectedTab] = useState("drivers");

  const items = [
    {
      key: "drivers",
      label: "Drivers",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
    {
      key: "vehicles",
      label: "Vehicles",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
    {
      key: "schools",
      label: "Schools",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
    {
      key: "students",
      label: "Students",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
  ];

  function handleSelectTab(tab) {
    setSelectedTab(tab.key);
    console.log("tab key", tab.key);
  }

  let content;

  if (selectedTab === "drivers") {
    content = <DriversTab />;
  }
  if (selectedTab === "vehicles") {
    content = <VehiclesTab />;
  }
  if (selectedTab === "schools") {
    content = <SchoolsTab />;
  }
  if (selectedTab === "students") {
    content = <StudentsTab />;
  }

  return (
    <div>
      <Menu
        className={classes["menu"]}
        mode="horizontal"
        defaultSelectedKeys={["drivers"]}
        items={items}
        onSelect={handleSelectTab}
      />
      <div className={classes["tab-content"]}>{content}</div>
    </div>
  );
}

export default Approvals
