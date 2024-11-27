import type React from 'react'

import type { Theme } from '@/styles/theme'

export interface FlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  gap?: number
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  children: React.ReactNode
}

export interface ContainerProps {
  fluid?: boolean
  padding?: number
  children: React.ReactNode
}

export interface NavLinkProps {
  href: string
  icon?: React.ReactNode
  text: string
  mobile?: boolean
}

export interface StatisticsData {
  studentCount: number
  lessonCount: number
  lastUpdate: string
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'third' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export interface CardProps {
  title?: string
  subtitle?: string
  hoverable?: boolean
  children: React.ReactNode
}

type ThemeColors = keyof Theme['colors']

export interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'body' | 'caption'
  color?: ThemeColors
  align?: 'left' | 'center' | 'right'
  weight?: 'normal' | 'medium' | 'bold'
  children: React.ReactNode
}

export interface MobileNavProps {
  isOpen: boolean
}

export interface NavLinkStyleProps {
  mobile?: boolean
}
