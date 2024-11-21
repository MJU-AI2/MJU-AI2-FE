import styled from 'styled-components'

import type { ContainerProps, FlexProps } from '@/types/common.types'

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'start' }) =>
    justify === 'between'
      ? 'space-between'
      : justify === 'around'
        ? 'space-around'
        : justify === 'evenly'
          ? 'space-evenly'
          : justify === 'center'
            ? 'center'
            : `flex-${justify}`};
  align-items: ${({ align = 'stretch' }) =>
    align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align};
  gap: ${({ gap = 0 }) => `${gap}rem`};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
`

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;
  padding: ${({ padding = 0 }) => `0 ${padding}rem`};
  max-width: ${({ fluid }) => (fluid ? '100%' : '1200px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1140px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 960px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 720px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 540px;
    padding: ${({ padding = 0 }) => `0 ${padding + 0.5}rem`};
  }
`

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const NavContainer = styled.nav`
  padding: 1rem 0;
`

export const LogoContainer = styled(Flex)`
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 1.25rem;
`

export const MobileMenuButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const MobileNav = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1rem 0;

  @media (min-width: 768px) {
    display: none;
  }
`

export const StyledNavLink = styled.a<{ mobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s ease;
  ${({ mobile }) =>
    mobile &&
    `
    width: 100%;
    padding: 0.5rem 0;
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const MainContentContainer = styled.main`
  min-height: calc(100vh - 140px);
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem 0;
`

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 2rem 0;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
`

export const FooterLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const FooterDivider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
`
