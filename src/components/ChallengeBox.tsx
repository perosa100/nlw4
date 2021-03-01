import React, { useContext } from 'react'
import { CountDownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/ChallengeBox.module.css'
import { ChallengesContext } from './../contexts/ChallengesContext'

function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(
    ChallengesContext
  )
  const { resetCountDown } = useContext(CountDownContext)

  const handleChallengeSucceded = () => {
    completedChallenge()
    resetCountDown()
  }

  const handleChallengeFaileded = () => {
    resetChallenge()
    resetCountDown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>{activeChallenge.amount}</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="corpo" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              onClick={handleChallengeFaileded}
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSuccessButton}
              onClick={handleChallengeSucceded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="avance de level" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
export default ChallengeBox
