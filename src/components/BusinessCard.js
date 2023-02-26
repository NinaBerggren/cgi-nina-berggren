import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { CGI_URL } from '../data/urls';

export const BusinessCard = () => {
  const [listCards, setListCards] = useState([])

  useEffect(() => {
    fetch(CGI_URL)
      .then((res) => res.json())
      .then((data) => setListCards(data))
  }, [])

  return (
    <CardInnerWrapper>
      {listCards.map((item) => (
        <BusinessCardContainer key={item.id}>
          <Card>
            <BcFront>
              <h2> CGI </h2>
              <h3>{item.name} {item.surName}</h3>
            </BcFront>
            <BcBack>
              <ProfileImage src={item.image} alt="Profile image" />
              <h4>{item.name} {item.surName}</h4>
              <p> <span>phone:</span> {item.telephone}</p>
              <p> <span>mail:</span> {item.email}</p>
            </BcBack>
          </Card>
        </BusinessCardContainer>
      ))}
    </CardInnerWrapper>
  )
}

// ------------ Styled Components -----------//

export const CardInnerWrapper = styled.div`
  display: grid;
  margin: 5%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
  transform-style: preserve-3d;
`;

export const BusinessCardContainer = styled.div`
  height: 170px;
 
  ${Card}:hover {
    transform: rotateY(180deg);
    cursor: pointer;
  }
`;

const absoluteStyle = css`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
  box-shadow: 3px 3px 5px 3px rgba(50, 50, 50, 0.5);
  
`;

export const BcFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  width: 100%;
  height: 100%;
  ${absoluteStyle}
  
  background-color: var(--clr-light);

  h2 {
    color: var(--clr-main);
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
  }
`;
export const BcBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  width: 100%;
  background-color: var(--clr-light);
  transform: rotateY(180deg);
  ${absoluteStyle}
  
  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }

  span {
    font-weight: 600;
  }
`;

export const ProfileImage = styled.img`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  /* border: 2px solid var(--clr-main); */
  object-fit: cover;
  overflow: hidden;
`;