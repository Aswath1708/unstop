import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faEllipsisVertical,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from '../../Styles/NewAssessment.module.css'

const NewAssessment = () => {
  return (
    <div className={styles.newAssessment}>
      <div>
        <FontAwesomeIcon icon={faBriefcase} />
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </div>
      <div>
        <p>Math Assessment</p>
        <section>
          <p>Job</p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} />
            20 Apr 2023
          </p>
        </section>
      </div>
      <div>
        <div>
          <p>00</p>
          <p>Duration</p>
        </div>
        <div>
          <p>00</p>
          <p>Questions</p>
        </div>
        <button>
          <FontAwesomeIcon icon={faLink} />
          Share
        </button>
        <button>LP</button>
      </div>
    </div>
  );
};

export default NewAssessment;
