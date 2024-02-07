import { Menu } from 'antd';
import React, { useState } from 'react'
import classes from "../parents/Parents.module.css"
import CityTab from './city-tab/CityTab';
import ZoneTab from './zone-tab/ZoneTab';
import HotspotTab from './hotspot-tab/HotspotTab';

function Location() {
  const [selectedTab, setSelectedTab] = useState("city");

  const items = [
    {
      key: "city",
      label: "City",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
    {
      key: "zone",
      label: "Zone",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
    {
      key: "hotspot",
      label: "Hotspot",
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

  if (selectedTab === "city") {
    content = <CityTab />;
  }
  if (selectedTab === "zone") {
    content = <ZoneTab />;
  }
  if (selectedTab === "hotspot") {
    content = <HotspotTab />;
  }

  return (
    <div>
      <Menu
        className={classes["menu"]}
        mode="horizontal"
        defaultSelectedKeys={["city"]}
        items={items}
        onSelect={handleSelectTab}
      />
      <div className={classes["tab-content"]}>{content}</div>
    </div>
  );
}

export default Location
