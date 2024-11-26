import styled from 'styled-components'

import type { Theme } from '@/styles/theme'
import type {
  FlexProps,
  ContainerProps,
  ButtonProps,
  TextProps,
} from '@/types/common.types'

export const Flex = styled.div<FlexProps & { theme: Theme }>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'start' }) =>
    justify === 'between'
      ? 'space-between'
      : justify === 'around'
        ? 'space-around'
        : justify === 'evenly'
          ? 'space-evenly'
          : `flex-${justify}`};
  align-items: ${({ align = 'stretch' }) =>
    align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align};
  gap: ${({ gap = 0 }) => `${gap}rem`};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
`

export const Container = styled.div<ContainerProps & { theme: Theme }>`
  width: 100%;
  max-width: ${({ fluid }) => (fluid ? '100%' : '1200px')};
  margin: 0 auto;
  padding: ${({ padding = 1 }) => `${padding}rem`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 960px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 720px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
    padding: ${({ padding = 1 }) => `${padding}rem 1rem`};
  }
`

export const Button = styled.button<ButtonProps & { theme: Theme }>`
  padding: ${({ size = 'md' }) =>
    size === 'sm'
      ? '0.5rem 1rem'
      : size === 'lg'
        ? '1rem 2rem'
        : '0.75rem 1.5rem'};
  font-size: ${({ size = 'md' }) =>
    size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem'};
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  background-color: ${({ variant = 'primary', theme }) =>
    variant === 'secondary'
      ? theme.colors.third
      : variant === 'third'
        ? theme.colors.accent
        : variant === 'ghost'
          ? 'transparent'
          : theme.colors.primary};

  color: ${({ variant = 'primary', theme }) =>
    variant === 'ghost' ? theme.colors.text : theme.colors.white};

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  }
`

export const Text = styled.p<TextProps & { theme: Theme }>`
  ${({ variant = 'body', theme }) => {
    const baseStyle = `color: ${theme.colors.text};`

    switch (variant) {
      case 'h1':
        return `
          ${baseStyle}
          font-size: 2.5rem; 
          font-weight: bold;
        `
      case 'h2':
        return `
          ${baseStyle}
          font-size: 2rem; 
          font-weight: bold;
        `
      case 'h3':
        return `
          ${baseStyle}
          font-size: 1.75rem; 
          font-weight: bold;
        `
      case 'h4':
        return `
          ${baseStyle}
          font-size: 1.5rem; 
          font-weight: bold;
        `
      case 'h5':
        return `
          ${baseStyle}
          font-size: 1.25rem; 
          font-weight: bold;
        `
      case 'h6':
        return `
          ${baseStyle}
          font-size: 1rem; 
          font-weight: bold;
        `
      case 'caption':
        return `
          ${baseStyle}
          font-size: 0.875rem;
        `
      default:
        return `
          ${baseStyle}
          font-size: 1rem;
        `
    }
  }}
  color: ${({ color = 'text', theme }) => theme.colors[color]};
  text-align: ${({ align = 'left' }) => align};
  font-weight: ${({ weight = 'normal' }) =>
    weight === 'medium' ? 500 : weight === 'bold' ? 700 : 400};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ variant = 'body' }) => {
      switch (variant) {
        case 'h1':
          return 'font-size: 2rem;'
        case 'h2':
          return 'font-size: 1.75rem;'
        case 'h3':
          return 'font-size: 1.5rem;'
        case 'h4':
          return 'font-size: 1.25rem;'
        case 'h5':
          return 'font-size: 1.125rem;'
        case 'h6':
          return 'font-size: 1rem;'
        default:
          return ''
      }
    }}
  }
`
