// src/components/Sidebar/Sidebar.js

import React from "react";
import SidebarItem from "./SidebarItem";
import config from "./sidebar.config";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      {config.map(item => (
        <SidebarItem key={item.id} item={item} />
      ))}
    </aside>
  );
};

export default Sidebar;

const styles = {
  sidebar: {
    width: "280px",
    background: "#f7f8fa",
    padding: "20px",
    borderRight: "1px solid #ddd",
    height: "100vh",
    overflowY: "auto"
  }
};