import React from 'react'

import { StyledNavLink } from '@/components/layouts/layout.styled'
import type { NavLinkProps } from '@/types/common.types'

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, mobile }) => (
  <StyledNavLink href={href} mobile={mobile}>
    {icon}
    <span>{text}</span>
  </StyledNavLink>
)

export default NavLink
