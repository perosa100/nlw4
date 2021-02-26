import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/CountDown.module.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { CountDownContext } from '../contexts/CountDownContext'

const CountDown = () => {
  const {
    hasFinish,
    isActive,
    minutes,
    resetCountDown,
    seconds,
    startCountDown
  } = useContext(CountDownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinish ? (
        <button disabled className={styles.countDownButton}>
          Ciclo encerrado
          <AiFillCheckCircle />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountDown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={startCountDown}
            >
              Iniciar Ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default CountDown
function ChallengesContextontext(ChallengesContextontext: any): {} {
  throw new Error('Function not implemented.')
}
