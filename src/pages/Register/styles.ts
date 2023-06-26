import styled from 'styled-components'
import { fontSize } from '@/helpers/ui/fonts'

export const RegisterContainerStyled = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;
  gap: 25px;
`

export const RegisterTitleStyled = styled.div`
  font-size: ${fontSize.xlarge}rem;
  font-weight: 600;
`

export const RegisterFormStyled = styled.form`
  width: 100%;
  max-width: 350px;
`