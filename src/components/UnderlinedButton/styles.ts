import styled from 'styled-components'

interface UnderlinedButtonProps {
    color?: string
    size?: 'medium' | 'large'
}

export const UnderlinedButtonStyled = styled.button<UnderlinedButtonProps>`
  background: none;
  border: none;
  color: ${props => props.color || '#000'};
  font-size: ${props => props.theme.fontSize[props.size || 'medium']};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 3px solid ${props => props.color || '#000'};
  border-radius: 2px;
`