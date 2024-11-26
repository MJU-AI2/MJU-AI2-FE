import React, { useState } from 'react'
import { Code, Home, Book, PenTool, Menu, X } from 'lucide-react'

import {
  DesktopNav,
  HeaderContainer,
  LogoContainer,
  MobileMenuButton,
  MobileNav,
  NavContainer,
} from '@/components/layouts/layout.styled'
import NavLink from '@/components/layouts/components/header/NavLink'
import { Container, Flex } from '@/styles'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <Container padding={2}>
        <NavContainer>
          <Flex justify="between" align="center">
            <LogoContainer>
              <Code size={24} />
              <span>코딩친구, 딸각!</span>
            </LogoContainer>

            <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MobileMenuButton>

            <DesktopNav>
              <NavLink href="/" icon={<Home size={16} />} text="홈" />
              <NavLink href="/" icon={<Book size={16} />} text="수업" />
              <NavLink href="/" icon={<PenTool size={16} />} text="실습하기" />
            </DesktopNav>
          </Flex>

          <MobileNav isOpen={isMenuOpen}>
            <NavLink href="/" icon={<Home size={16} />} text="홈" mobile />
            <NavLink
              href="/lessons"
              icon={<Book size={16} />}
              text="수업"
              mobile
            />
            <NavLink
              href="/student"
              icon={<PenTool size={16} />}
              text="실습하기"
              mobile
            />
          </MobileNav>
        </NavContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header
