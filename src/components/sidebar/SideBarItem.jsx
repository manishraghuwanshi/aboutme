// src/components/Sidebar/SidebarItem.js

import React, { useState } from "react";
import SidebarChild from "./SidebarChild";

const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.item}>
      <div style={styles.title} onClick={() => setOpen(o => !o)}>
        {item.title}
      </div>

      {open && item.children && (
        <div style={styles.childrenWrap}>
          {item.children.map(child => (
            <SidebarChild key={child.id} child={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;

const styles = {
  item: { marginBottom: "12px" },
  title: { cursor: "pointer", fontWeight: 600 },
  childrenWrap: { marginLeft: "15px", marginTop: "8px" }
};