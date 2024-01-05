import React from 'react'
import OverView from './OverView'
import Assessment from './Assessment'
import styles from '../../Styles/MainSection.module.css'

const MainSection = () => {
  return (
    <div className={styles.mainSection}>
        <header>
            <h3>Assessment</h3>
            <p>My Assessments</p>
        </header>
        <OverView/>
        <Assessment/>
    </div>
  )
}

export default MainSection