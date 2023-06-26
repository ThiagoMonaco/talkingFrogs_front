import styled, { keyframes } from 'styled-components'
import { fontSize } from '@/helpers/ui/fonts'
import { colors } from '@/helpers/ui/colors'


interface InputLabelProps {
	withError: boolean
}

interface InputFieldProps {
	withError: boolean
}


export const InputStyled = styled.div<InputFieldProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  
  > input {
    width: 100%;
    font-size: ${fontSize.large}rem;
    border: 1.5px solid ${({ withError, theme }) => withError ? theme.colors.error : theme.colors.black};
    border-right: 3px solid ${({ withError, theme }) => withError ? theme.colors.error : theme.colors.black};
    border-bottom: 3px solid ${({ withError, theme }) => withError ? theme.colors.error : theme.colors.black};
    border-radius: 0.5rem;
    padding: 0.5rem;
    outline: none;
    z-index: 2;
  }
`

export const InputLabelStyled = styled.label<InputLabelProps>`
  font-size: ${fontSize.medium}rem;
  z-index: 2;
  color: ${({ withError }) => withError ? colors.error : colors.black};
`



const topToBottomKeyframe = keyframes`
  from {
    transform: translateY(-80%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const ErrorMessageStyled = styled.span`
  color: ${colors.error};
  font-size: ${fontSize.xsmall}rem;
  animation: ${topToBottomKeyframe} 0.5s ease;
  z-index: 1;
`