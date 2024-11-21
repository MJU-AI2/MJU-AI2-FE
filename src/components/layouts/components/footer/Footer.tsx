import React from 'react'
import { useQuery } from '@tanstack/react-query'

import {
  Container,
  FooterContainer,
  FooterDivider,
  FooterGrid,
  FooterLink,
  FooterText,
  FooterTitle,
} from '@/components/layouts/layout.styled'
import type { StatisticsData } from '@/types/common.types'
import { DateUtils } from '@/utils/date'

const Footer: React.FC = () => {
  const { data: stats } = useQuery<StatisticsData>({
    queryKey: ['stats'],
    queryFn: async () => {
      // 실제 API 호출로 대체 가능
      return {
        studentCount: 1234,
        lessonCount: 50,
        lastUpdate: DateUtils.now(),
      }
    },
  })

  return (
    <FooterContainer>
      <Container padding={2}>
        <FooterGrid>
          <div>
            <FooterTitle>코딩친구, 딸각!</FooterTitle>
            <FooterText>즐거운 코딩 공부와 함께해요!</FooterText>
            {stats && (
              <div style={{ marginTop: '1rem' }}>
                <FooterText>
                  현재 {stats.studentCount.toLocaleString()}명의 친구들이
                </FooterText>
                <FooterText>
                  {stats.lessonCount}개의 수업과 함께하고 있어요
                </FooterText>
              </div>
            )}
          </div>

          <div>
            <FooterTitle>바로가기</FooterTitle>
            <FooterLink href="/about">소개</FooterLink>
            <FooterLink href="/about">문의하기</FooterLink>
            <FooterLink href="/about">도움말</FooterLink>
          </div>

          <div>
            <FooterTitle>문의</FooterTitle>
            <FooterText>이메일: wodnd0131@mju.ac.kr</FooterText>
            <FooterText>운영시간: 평일 09:00 - 18:00</FooterText>
          </div>
        </FooterGrid>

        <FooterDivider>
          <FooterText>마지막 업데이트: {stats?.lastUpdate}</FooterText>
          <FooterText style={{ marginTop: '0.5rem' }}>
            © 2024 코딩친구, 딸각!. All rights reserved.
          </FooterText>
        </FooterDivider>
      </Container>
    </FooterContainer>
  )
}

export default Footer
