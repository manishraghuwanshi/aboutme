// src/components/Sidebar/SidebarChild.js

import React, { useState } from "react";
import SidebarGrandchild from "./SidebarGrandchild";

const SidebarChild = ({ child }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.child}>
      <div style={styles.childTitle} onClick={() => setOpen(o => !o)}>
        {child.title}
      </div>

      {open && child.children && (
        <div style={styles.grandWrap}>
          {child.children.map(gc => (
            <SidebarGrandchild key={gc.id} item={gc} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarChild;

const styles = {
  child: { marginBottom: "10px" },
  childTitle: { cursor: "pointer", fontWeight: 500 },
  grandWrap: { marginLeft: "15px", marginTop: "5px" }
};