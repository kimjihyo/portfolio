import React from 'react';
import styled from 'styled-components';
import { Button } from '.';
import { PortfolioItemProps } from '../types';
import UndrawNoData from '../assets/undraw_no_data.svg';
import { colors } from '../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  min-height: 450px;
  border-bottom: solid 1px gainsboro;
  @media (max-width: 1000px) {
    padding: 40px 0px;
    flex-direction: column;
    align-items: center;
  }
`;

const ImageColumn = styled.div`
  object-fit: scale-down;
  margin: auto 0;
  max-width: 400px;
  max-height: 400px;
  @media (max-width: 1000px) {
    padding-bottom: 20px;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const DescriptionColumn = styled.div`
  display: flex;
  margin: auto 0;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 350px;
  max-height: 350px;
  margin-left: 60px;
  @media (max-width: 1000px) {
    text-align: center;
    align-items: center;
    margin-left: 0px;
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  color: ${colors.black};
  font-size: 25px;
  font-weight: bolder;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
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
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  color: gray;
  line-height: 1.5;
  max-width: 500px;
  padding-bottom: 30px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const JobTitleText = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.725rem;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primaryTextColor};
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const PortfolioItem = (props: PortfolioItemProps) => {
  return (
    <Wrapper>
      <ImageColumn>
        <img
          src={props.img !== '' ? props.img : UndrawNoData}
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
        <JobTitleText>{props.jobTitle}</JobTitleText>
        <Description>{props.description}</Description>
        <Buttons>
          <Button style={{ marginLeft: '10px' }} label="Visit Site" onClick={props.onVisitSitePress} />
        </Buttons>
      </DescriptionColumn>
    </Wrapper>
  );
};

export default PortfolioItem;
