// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 33%;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 25px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = (props: { title: string, poster: string, year: string, description: string }) => (
  <Wrapper className="show-card">
    <Image alt={`${props.title} Show Poster`} src={`/dist/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

export default ShowCard;
