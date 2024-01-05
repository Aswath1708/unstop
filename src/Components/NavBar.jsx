import {
  faFileCircleQuestion,
  faFilePen,
  faFileWaveform,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from '../Styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <li>
          <FontAwesomeIcon icon={faTableList} />
          <p>Dashboard</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faFilePen} />
          <p>Assessment</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faFileCircleQuestion} />
          <p>My Library</p>
        </li>
      </ul>
      <section>
        <p>Admin</p>
        <div>
          <FontAwesomeIcon icon={faFileWaveform} />
          <p>Round Status</p>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
