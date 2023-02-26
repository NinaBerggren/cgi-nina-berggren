import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { CGI_URL } from '../data/urls';

export const BusinessCard = () => {
  const [listCards, setListCards] = useState([])

  useEffect(() => {
    fetch(CGI_URL)
      .then((res) => res.json())
      .then((data) => setListCards(data))
  }, [])

  return (
    <CardWrapper>
      {listCards.map((item) => (
        <BusinessCardContainer key={item.id}>
          <BcFront>
            <h2> CGI </h2>
            <h3>{item.name}, {item.surName}</h3>
          </BcFront>
          <BcBack>
            <ProfileImage src={item.image} alt="Profile image" />
            <h4>{item.name}, {item.surName}</h4>
            <p> phone: {item.telephone}</p>
            <p> mail: {item.email}</p>
          </BcBack>
        </BusinessCardContainer>
      ))}
    </CardWrapper>
  )
}

// ------------ Styled Components -----------//

export const CardWrapper = styled.div`
  display: grid;
  margin: 5%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const BusinessCardContainer = styled.div`
  position: relative;
  padding: 1rem;
  height: 200px;
  background-color: pink;
  border-radius: 8px;
  border: 2px solid yellowgreen;

`;

export const BcFront = styled.div`
  border: 2px solid purple;
`;
export const BcBack = styled.div`
  border: 2px solid blue;
`;

export const ProfileImage = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
`;