import styled from 'styled-components'

interface MainButtonStyledProps {

}

export const MainButtonStyled = styled.button<MainButtonStyledProps>`
  background: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.medium};
  color: ${props => props.theme.colors.darkGreen};
  cursor: pointer;
  padding: 14px 38px;
  border-radius: 8px;
  border-top: 1px solid ${props => props.theme.colors.black};
  border-right: 2px solid ${props => props.theme.colors.black};
  border-bottom: 2px solid ${props => props.theme.colors.black};
  border-left: 1px solid ${props => props.theme.colors.black};
`