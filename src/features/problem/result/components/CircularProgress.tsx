import {
  BackgroundCircle,
  ProgressCircle,
  ProgressContainer,
  ProgressSVG,
  ProgressText,
} from '@/features/problem/result/styles/quizResult.styled'

interface CircularProgressProps {
  percentage: number
}

export const CircularProgress = ({ percentage }: CircularProgressProps) => (
  <ProgressContainer>
    <ProgressSVG viewBox="0 0 350 350">
      <BackgroundCircle cx="175" cy="175" r="80" />
      <ProgressCircle cx="175" cy="175" r="80" percentage={percentage} />
    </ProgressSVG>
    <ProgressText>{Math.round(percentage)}%</ProgressText>
  </ProgressContainer>
)
