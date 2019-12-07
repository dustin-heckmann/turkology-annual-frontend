import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/citations">Publications</Link>
    <Link to="/statistics/completeness">Completeness</Link>
    <Link to="/api/export" target="_blank">
      Export
    </Link>
  </nav>
);

export default Navigation;
