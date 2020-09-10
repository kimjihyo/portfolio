import React from 'react';
import styled from 'styled-components';
import { CarouselProps } from '../types';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
`;

const Chevron = styled.div`
  font-size: 6rem;
  font-weight: 100;
  color: gainsboro;
  padding: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
`;

const ItemTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: #5b43d6;
  font-weight: 500;
`;

const ItemDescription = styled.div`
  text-align: center;
  line-height: 1.5;
  padding-top: 20px;
  color: #212529;
`;

const Carousel = (props: CarouselProps) => {
  return (
    <Wrapper>
      <Chevron>{'<'}</Chevron>
      {props.items.map((item, i) => (
        <Item key={i}>
          <img
            src={item.img}
            alt=""
            style={{
              width: '150px',
              height: '150px',
            }}
          />
          <ItemTitle>{item.title}</ItemTitle>
          <ItemDescription>{item.description}</ItemDescription>
        </Item>
      ))}
      <Chevron>{'>'}</Chevron>
    </Wrapper>
  );
};

export default Carousel;
