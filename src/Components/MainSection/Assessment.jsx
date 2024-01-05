import React from "react";
import NewAssessment from "./NewAssessment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from '../../Styles/Assessment.module.css'

const Assessment = () => {
  return (
    <div className={styles.assessment}>
      <h3>My Assessment</h3>
      <section>
        <ul>
          <li>
            <FontAwesomeIcon icon={faPlus} />
            <p>New Assessment</p>
            <p>
              From here you can add new questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </li>
          <li>
            <NewAssessment />
          </li>
          <li>
            <NewAssessment />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Assessment;
