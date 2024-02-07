import { Menu } from "antd";
import React, { useState } from "react";
import classes from "../parents/Parents.module.css";
import UserProfileTab from "./user-profile-tab/UserProfileTab";

function Settings() {
  const [selectedTab, setSelectedTab] = useState("userProfile");
  
  const items = [
    {
      key: "userProfile",
      label: "User Profile",
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

  if (selectedTab === "userProfile") {
    content = (
      <UserProfileTab />
    );
  }

  return (
    <div>
      <Menu
        className={classes["menu"]}
        mode="horizontal"
        defaultSelectedKeys={["userProfile"]}
        items={items}
        onSelect={handleSelectTab}
      />
      <div className={classes["tab-content"]}>{content}</div>
    </div>
  );
}

export default Settings;

