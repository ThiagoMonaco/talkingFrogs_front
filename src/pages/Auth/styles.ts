import styled from 'styled-components'
import { fontSize } from '@/helpers/ui/fonts'

export const AuthContainerStyled = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;
  gap: 25px;
`

export const AuthTitleStyled = styled.div`
  font-size: ${({theme}) => theme.fontSize.xlarge};
  font-weight: 600;
`