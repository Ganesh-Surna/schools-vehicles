import { Menu } from "antd";
import React, { useState } from "react";
import classes from "./Parents.module.css";
import IdCardTab from "./id-card-tab/IdCardTab";
import QrCodeTab from "./qr-code-tab/QrCodeTab";
import ChildrenTab from "./children-tab/ChildrenTab";

function Parents() {
  const [selectedTab, setSelectedTab] = useState("children");

  const items = [
    {
      key: "children",
      label: "Children",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
    {
      key: "idCard",
      label: "Id Card",
      style: {
        fontSize: "1.2rem",
        paddingBottom: "0.35rem",
        margin: "0 1.5rem",
      },
    },
    {
      key: "qrCode",
      label: "QR Code",
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

  if (selectedTab === "children") {
    content = (
      <ChildrenTab />
    );
  }
  if (selectedTab === "idCard") {
    content = <IdCardTab />;
  }
  if (selectedTab === "qrCode") {
    content = <QrCodeTab />;
  }

  return (
    <div>
      <Menu
        className={classes["menu"]}
        mode="horizontal"
        defaultSelectedKeys={["children"]}
        items={items}
        onSelect={handleSelectTab}
      />
      <div className={classes["tab-content"]}>{content}</div>
    </div>
  );
}

export default Parents;
