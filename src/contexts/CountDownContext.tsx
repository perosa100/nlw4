import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { ChallengesContext } from './ChallengesContext'

interface CountDownContextData {
  minutes: number
  seconds: number
  hasFinish: boolean
  isActive: boolean
  startCountDown: () => void
  resetCountDown: () => void
}

export const CountDownContext = createContext({} as CountDownContextData)
let countdownTimeout: NodeJS.Timeout
type CountDownProviderProps = {
  children: ReactNode
}

export function CountDownProvider({ children }: CountDownProviderProps) {
  const { startNewChallenges } = useContext(ChallengesContext)

  const [time, setTime] = useState(1 * 5)
  const [isActive, setActive] = useState(false)
  const [hasFinish, sethasFinish] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountDown = () => {
    setActive(true)
  }

  const resetCountDown = () => {
    clearTimeout(countdownTimeout)
    setActive(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      sethasFinish(true)
      setActive(false)
      startNewChallenges()
    }
  }, [isActive, time])
  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinish,
        isActive,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountDownContext.Provider>
  )
}
