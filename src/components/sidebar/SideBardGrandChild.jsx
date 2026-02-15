// src/components/Sidebar/SidebarGrandchild.js

import React from "react";

const SidebarGrandchild = ({ item }) => {
  return (
    <div style={styles.gc}>
      {item.title}
    </div>
  );
};

export default SidebarGrandchild;

const styles = {
  gc: {
    padding: "4px 0",
    cursor: "pointer",
    fontSize: "14px",
    color: "#333"
  }
};