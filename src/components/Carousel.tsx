import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronRight } from '../assets/chevron_right-white-18dp.svg';
import { ReactComponent as ChevronLeft } from '../assets/chevron_left-white-18dp.svg';
import { CarouselProps } from '../types';
import { colors } from '../constants';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0px;
`;

const ItemContainer = styled.div`
  flex: 0.8;
  max-width: 1200px;
  display: flex;
  overflow-x: hidden;

  @media (max-width: 1500px) {
    min-width: 900px;
    max-width: 900px;
    justify-content: left;
  }

  @media (max-width: 1100px) {
    min-width: 600px;
    max-width: 600px;
    justify-content: left;
  }

  @media (max-width: 800px) {
    min-width: 300px;
    max-width: 300px;
    justify-content: left;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  min-width: 300px;
  transition: transform 0.4s;
`;

const ItemTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  color: #5b43d6;
  font-weight: 500;
  margin-top: 1rem;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ItemDescription = styled.div`
  text-align: center;
  line-height: 1.5;
  padding: 0 20px;
  padding-top: 20px;
  color: ${colors.black};
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ArrowRight = styled(ChevronRight)`
  fill: #00000030;
  &:hover {
    cursor: pointer;
    fill: ${colors.primaryColor1};
    transition: fill 0.4s;
  }
`;

const ArrowLeft = styled(ChevronLeft)`
  fill: #00000030;
  &:hover {
    cursor: pointer;
    fill: ${colors.primaryColor1};
    transition: fill 0.4s;
  }
`;

const Carousel = (props: CarouselProps) => {
  const [carouselTransitionX, setCarouselTransitionX] = React.useState<number>(0);

  const translateXStyle = (n: number) => ({
    transform: `translateX(${n}px)`,
  });

  const onLeftArrowPress = () => {
    if (carouselTransitionX < 0) {
      setCarouselTransitionX(carouselTransitionX + 300);
    }
  };

  const onRightArrowPress = () => {
    if (-300 * (props.items.length - 1) < carouselTransitionX) {
      setCarouselTransitionX(carouselTransitionX - 300);
    }
  };

  return (
    <Wrapper>
      <ArrowLeft width="80px" height="80px" onClick={onLeftArrowPress} />
      <ItemContainer>
        {props.items.map((item, i) => (
          <Item key={i} style={translateXStyle(carouselTransitionX)}>
            <img
              src={item.img}
              alt=""
              style={{
                width: '90px',
                height: '90px',
              }}
            />
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </Item>
        ))}
      </ItemContainer>
      <ArrowRight width="80px" height="80px" onClick={onRightArrowPress} />
    </Wrapper>
  );
};

export default Carousel;
