import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/styles/theme'
import { MainContentContainer } from '@/components/layouts/layout.styled'
import Header from '@/components/layouts/components/header/Header'
import Footer from '@/components/layouts/components/footer/Footer'
import { Container, Flex } from '@/styles'

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Flex direction="column" style={{ minHeight: '100vh' }}>
        <Header />
        <MainContentContainer>
          <Container padding={2}>
            <Outlet />
          </Container>
        </MainContentContainer>
        <Footer />
      </Flex>
    </ThemeProvider>
  )
}

export default MainLayout
