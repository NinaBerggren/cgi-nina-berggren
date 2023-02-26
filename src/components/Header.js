import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>
        <h1><span>CGI</span> Contact information </h1>
      </HeaderText>
    </HeaderContainer>
  )
}

// -------- Styled Components --------- //

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: var(--clr-light);
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(90deg, var(--clr-light) 30%, var(--clr-main) 50%, var(--clr-accent) 94%);
  border-image-slice: 1;
  width: 100%;
  height: 70px;

`;

export const HeaderText = styled.div`
  margin-left: 2rem;
  h1 {
    font-size: 1.5rem;
  }
  span {
    font-size: 1.7rem;
    color: var(--clr-main);
  }
 
`;

