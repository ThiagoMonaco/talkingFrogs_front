import styled from 'styled-components'

interface UnderlinedButtonProps {
    color?: string
}

export const UnderlinedButtonStyled = styled.button<UnderlinedButtonProps>`
  background: none;
  border: none;
  color: ${props => props.color || '#000'};
  font-size: ${theme => theme.theme.fontSize.medium};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.color || '#000'};
  border-radius: 2px;
`