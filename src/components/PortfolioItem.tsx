import React from 'react';
import styled from 'styled-components';
import { Button } from '.';
import { PortfolioItemProps } from '../types';
import UndrawNoData from '../assets/undraw_no_data.svg';
import { colors } from '../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 450px;
  border-bottom: solid 1px gainsboro;
`;

const ImageColumn = styled.div`
  width: 40%;
  height: 70%;
`;

const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  height: 70%;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const YearBadge = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  background-color: ${colors.primaryColor1};
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  margin-left: 10px;
`;

const Description = styled.div`
  color: gray;
  line-height: 1.5;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

const PortfolioItem = (props: PortfolioItemProps) => {
  return (
    <Wrapper>
      <ImageColumn>
        <img
          src={UndrawNoData}
          alt=""
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </ImageColumn>
      <DescriptionColumn>
        <TitleRow>
          <Title>{props.title}</Title>
          <YearBadge>{props.year}</YearBadge>
        </TitleRow>
        <Description>{props.description}</Description>
        <Buttons>
          <Button
            style={{ backgroundColor: colors.primaryColor1, color: 'white' }}
            label="Preview"
            onClick={() => {
              console.log('Preview');
            }}
          />
          <Button
            style={{ marginLeft: '10px' }}
            label="Visit Site"
            onClick={() => {
              console.log('Preview');
            }}
          />
        </Buttons>
      </DescriptionColumn>
    </Wrapper>
  );
};

export default PortfolioItem;
