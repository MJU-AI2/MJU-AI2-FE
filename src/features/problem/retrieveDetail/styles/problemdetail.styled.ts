import styled from 'styled-components'

import { Flex, Text } from '@/styles'

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
`

export const ChoiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`

export const CodeBlock = styled.pre`
  background-color: #2d3748;
  color: white;
  padding: 16px;
  border-radius: 6px;
  margin: 16px 0;
  overflow-x: auto;
  font-family: 'Consolas', monospace;
`

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  input {
    margin-right: 12px;
  }
`

export const MetaContainer = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const MetaDivider = styled(Text)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

export const MetaItem = styled(Text)`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &::before {
      content: attr(data-label);
      margin-right: 0.5rem;
    }
  }
`
