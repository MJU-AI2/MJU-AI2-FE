import styled from 'styled-components'

import { Flex } from '@/styles'
import type { Theme } from '@/styles/theme'

export const ModalOverlay = styled.div<{ theme: Theme }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => `${theme.colors.text}80`};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled(Flex)<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  box-shadow: 0 4px 6px ${({ theme }) => `${theme.colors.text}20`};
  border: 1px solid ${({ theme }) => theme.colors.border};
`
