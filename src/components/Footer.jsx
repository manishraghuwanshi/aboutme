// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";

export default function Footer({
  text = "© 2026 Your Name. All rights reserved.",
  links = [],
}) {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>{text}</p>

      <nav className={styles.nav}>
        {links.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener">
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
