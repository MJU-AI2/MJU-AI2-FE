import styled from 'styled-components'

import { Flex, Text } from '@/styles'

export const ProblemContainer = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
`

export const ProblemItem = styled(Flex)`
  padding-left: 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => `${theme.colors.white}`};
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary}80`};
  }
`

export const ProblemContent = styled(Flex)`
  flex: 1;
  margin-left: 0.7rem;
  padding-block: 1.25rem;
  display: grid;
  grid-template-columns: 1fr 150px 100px;
  gap: 1rem;
  align-items: center;
`

export const ProblemTitle = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    text-underline-offset: 4px;
  }
`
