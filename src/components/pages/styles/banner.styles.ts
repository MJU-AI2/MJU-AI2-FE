import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  border-radius: 12px;
  padding: 4rem 2rem;
  margin: 2rem 0;
  text-align: center;
`
