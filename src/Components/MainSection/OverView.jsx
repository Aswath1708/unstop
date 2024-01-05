import {
  faGlobe,
  faLayerGroup,
  faLink,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../Styles/OverView.module.css";

const OverView = () => {
  return (
    <div className={styles.overView}>
      <h3>Assessments Overview</h3>
      <section>
        <ul>
          <li>
            <p>Total Assessment</p>
            <div>
              <FontAwesomeIcon icon={faLayerGroup} />
              <p>34</p>
            </div>
          </li>
          <li>
            <p>Candidates</p>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <div>
                <p>
                  11,145<span>+89</span>
                </p>
                <p>Total Candidate</p>
              </div>
              <div>
                <p>
                  1,14 <span>+89</span>
                </p>
                <p>Who Attempted</p>
              </div>
            </div>
          </li>
          <li>
            <p>Candidates Source</p>
            <div>
              <FontAwesomeIcon icon={faGlobe} />
              <div>
                <p>
                  11,000 <span>+89</span>
                </p>
                <p>E-mail</p>
              </div>
              <div>
                <p>
                  145 <span>+89</span>
                </p>
                <p>Social Share</p>
              </div>{" "}
              <div>
                <p>
                  145 <span>+89</span>
                </p>
                <p>Unique Link</p>
              </div>
            </div>
          </li>
          <li>
            <p>Total Purpose</p>
            <div>
              <FontAwesomeIcon icon={faLink} />
              <p>11</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default OverView;
