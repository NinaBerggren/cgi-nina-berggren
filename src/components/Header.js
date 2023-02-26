import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>
        <h1> CGI Programmeringsuppgift </h1>
      </HeaderText>
    </HeaderContainer>
  )
}

// -------- Styled Components --------- //

export const HeaderContainer = styled.header`
  background-color: whitesmoke;
  border-bottom: 2px solid lightgrey;
  width: 100vw;
  height: 70px;


`;

export const HeaderText = styled.div`
  margin-left: 2rem;
 h1 {
    font-size: large;
  }
`;

