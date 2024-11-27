import React from 'react'

import { ModalContent, ModalOverlay } from '@/components/ui/styles/modal.styles'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, onRequestClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <ModalOverlay onClick={onRequestClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalOverlay>
  )
}
