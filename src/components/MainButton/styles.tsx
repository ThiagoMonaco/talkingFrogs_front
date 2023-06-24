import styled from 'styled-components'
import { colors } from '@/helpers/ui/colors'
import { fontSize } from '@/helpers/ui/fonts'

interface MainButtonStyledProps {

}

export const MainButtonStyled = styled.button<MainButtonStyledProps>`
  background: ${colors.white};
  font-size: ${fontSize.medium}rem;
  color: ${colors.darkGreen};
  cursor: pointer;
  padding: 14px 38px;
  border-radius: 8px;
  border-top: 1px solid ${props => props.theme.colors.black};
  border-right: 2px solid ${props => props.theme.colors.black};
  border-bottom: 2px solid ${props => props.theme.colors.black};
  border-left: 1px solid ${props => props.theme.colors.black};
`