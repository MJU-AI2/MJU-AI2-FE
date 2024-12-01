import { useState } from 'react'

export const useAnswersState = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const handleAnswerChange = (problemId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [problemId]: answer,
    }))
  }

  return {
    answers,
    handleAnswerChange,
  }
}
