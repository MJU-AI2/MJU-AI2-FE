import type React from 'react'

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
