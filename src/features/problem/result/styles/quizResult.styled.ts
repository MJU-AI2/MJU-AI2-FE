import styled from 'styled-components'

import { Flex } from '@/styles'

export const ResultContainer = styled(Flex)`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
`

export const ResultCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  box-shadow: 0 12px 30px rgba(75, 163, 242, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`

export const TitleWrapper = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
  }
`

export const ResultWrapper = styled(Flex)`
  position: relative;
  padding: 2rem;
  border-radius: 20px;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.background}, white)`};
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.1),
    inset 0 -2px 6px rgba(75, 163, 242, 0.1);
`

export const EmojiWrapper = styled.div<{ percentage: number }>`
  position: absolute;
  top: -35px;
  right: 30px;
  font-size: 5rem;
  transform: rotate(15deg);
  animation: bounce 2s infinite;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @keyframes bounce {
    0%,
    100% {
      transform: rotate(15deg) translateY(0);
    }
    50% {
      transform: rotate(15deg) translateY(-15px);
    }
  }
`

export const ProgressContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
`

export const ProgressSVG = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`

export const BackgroundCircle = styled.circle`
  fill: transparent;
  stroke: ${({ theme }) => theme.colors.border};
  stroke-width: 15;
`

export const ProgressCircle = styled.circle<{ percentage: number }>`
  fill: transparent;
  stroke: ${({ percentage, theme }) =>
    percentage <= 80 ? theme.colors.accent : theme.colors.third};
  stroke-width: 15;
  stroke-dasharray: ${2 * Math.PI * 80};
  stroke-dashoffset: ${({ percentage }) => {
    const circumference = 2 * Math.PI * 80
    return circumference * (1 - percentage / 100)
  }};
  transition: stroke-dashoffset 1.5s ease-out;
  transform: rotate(180deg);
  transform-origin: 175px 175px;
`

export const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`
