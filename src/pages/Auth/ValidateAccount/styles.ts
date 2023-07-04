import styled from "styled-components";

export const TextContainerStyled = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  max-width: 400px;
  
  > b {
    font-weight: 600;
  }

  @media(max-width: 350px) {
    font-size: ${({theme}) => theme.fontSize.small};
  }
`