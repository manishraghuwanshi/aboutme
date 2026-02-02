// src/components/Header/Header.jsx
import React from "react";
import styles from "./Header.module.css";

export default function Header({
  name = "Manish Raghuwanshi",
  role = "Full Stack Developer",
  avatar = "https://via.placeholder.com/60",
  links = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
  },
}) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.role}>{role}</p>
        </div>
      </div>

      <nav className={styles.nav}>
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener">
            GitHub
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener">
            LinkedIn
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener">
            Twitter
          </a>
        )}
      </nav>
    </header>
  );
}
