export const getEmoji = (score: number) => {
  if (score >= 90) return '🌟'
  if (score >= 80) return '😊'
  if (score >= 70) return '🙂'
  if (score >= 60) return '😅'
  return '💪'
}

export const getMessage = (score: number) => {
  if (score >= 90) return '대단해요! 정말 잘했어요!'
  if (score >= 80) return '잘했어요! 멋져요!'
  if (score >= 70) return '좋아요! 조금만 더 노력해봐요!'
  if (score >= 60) return '잘했어요! 다음에는 더 잘할 수 있을 거예요!'
  return '괜찮아요! 다시 한번 도전해봐요!'
}
