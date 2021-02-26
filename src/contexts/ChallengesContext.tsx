import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'
import CompletedChallenges from './../components/CompletedChallenges'

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}
interface ChallengesContextDate {
  level: number
  currentExperience: number
  challengesCompleted: number
  activeChallenge: Challenge
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenges: () => void
  resetChallenges: () => void
  CompletedChallenge: () => void
}

type ChallengesProviderProps = {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextDate)

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(60)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(level + 1)
  }

  const startNewChallenges = () => {
    const randonChallengesIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randonChallengesIndex]

    setActiveChallenge(challenge)
  }

  const resetChallenges = () => {
    setActiveChallenge(null)
  }

  const CompletedChallenge = () => {
    if (!activeChallenge) {
      return
    }

    const { amount } = activeChallenge
    let finalExperience = currentExperience + amount

    if (finalExperience > experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }
  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenges,
        resetChallenges,
        CompletedChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
