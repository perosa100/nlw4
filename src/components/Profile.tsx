import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

const Profile = () => {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/perosa100.png" alt="patrick Perosa" />
      <div>
        <strong>Patrick Perosa</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Lvl {level}
        </p>
      </div>
    </div>
  )
}

export default Profile
