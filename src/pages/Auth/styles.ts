import styled from 'styled-components'
import { fontSize } from '@/helpers/ui/fonts'

export const AuthContainerStyled = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;
  gap: 25px;
  
  form {
    width: 80%;
    display: flex;
    justify-content: center;
  }
`

export const AuthTitleStyled = styled.div`
  font-size: ${({theme}) => theme.fontSize.xlarge};
  font-weight: 600;
`