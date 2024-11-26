import { useNavigate } from 'react-router-dom'

import { Container, Flex, Button, Text } from '@/styles/styles'
import { useStats } from '@/hooks/useStats'
import { Banner } from '@/styles/banner.styles'

const Home = () => {
  const navigate = useNavigate()
  const { data: stats } = useStats()

  const onCreateProblem = () => {
    navigate('/problems/create')
  }

  const onViewProblemList = () => {
    navigate('/problems')
  }

  return (
    <Container>
      <Banner>
        <Text variant="h1" color="white" className="animate-bounce">
          Welcome to CodePal Pings!🚀
        </Text>
        {stats && (
          <Flex justify="center" gap={4} wrap="wrap">
            <Text color="white">학생 수: {stats.studentCount}</Text>
            <Text color="white">문제 수: {stats.lessonCount}</Text>
            <Text color="white">마지막 업데이트: {stats.lastUpdate}</Text>
          </Flex>
        )}
      </Banner>

      <Flex justify="center" gap={2} wrap="wrap">
        <Button variant="primary" size="lg" onClick={onCreateProblem}>
          문제 생성하기
        </Button>
        <Button variant="third" size="lg" onClick={onViewProblemList}>
          문제 목록 보기
        </Button>
      </Flex>
    </Container>
  )
}

export default Home
