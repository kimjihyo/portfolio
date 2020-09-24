import React from 'react';
import styled from 'styled-components';
import { Header, Carousel, Button, PortfolioItem, Footer } from '../components';
import UndrawDesign from '../assets/undraw_design_components.svg';
import UndrawMobile from '../assets/undraw_mobile_images.svg';
import UndrawAI from '../assets/undraw_artificial_intelligence.svg';
import { CarouselItemProps, PortfolioItemProps } from '../types';
import { colors } from '../constants';

const Wrapper = styled.div``;

const TopSection = styled.div`
  color: '#fff';
  &::before {
    content: '';
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, ${colors.primaryColor1}, ${colors.primaryColor2});
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 550px;
    border-radius: 0 0 50% 50%;
    transform: scaleX(2.1);
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  padding-bottom: 80px;
  justify-content: center;
  align-items: center;
`;

const IntroMainText = styled.h1`
  text-align: center;
  color: white;
  font-weight: 900;
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const IntroSubText = styled.p`
  color: white;
  line-height: 1.6;
  font-size: 16px;
  max-width: 480px;
  margin-bottom: 30px;
  text-align: center;
`;

const GetStartedButton = styled.a`
  background: linear-gradient(180deg, #f2cf00 0, #f2b200 100%);
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;

const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 550px;
`;

const PortfolioSection = styled.div`
  border-top-width: 1px;
  border-top-color: gainsboro;
  border-top-style: solid;
  padding-top: 60px;
`;

const PortfolioSectionTitle = styled.h1`
  color: #00000055;
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
`;

const Home = () => {
  const [serviceItems] = React.useState<CarouselItemProps[]>([
    {
      img: UndrawDesign,
      title: 'Web & Mobile Development',
      description:
        'Clean, modern designs - optimized for performance, search engines, and converting users to customers.',
    },
    {
      img: UndrawMobile,
      title: 'Game Development',
      description: 'Integration of eCommerce platforms, payment gateways, custom product templates, and more.',
    },
    {
      img: UndrawAI,
      title: 'Artificail Intelligence',
      description: 'Get insights into who is browsing your site so that you can make smarter business decisions.',
    },
  ]);

  const [portfolioItems] = React.useState<PortfolioItemProps[]>([
    {
      img: '',
      title: 'BullStock AI',
      description:
        'BullStock AI is a mobile app that shows predictions for \
        NASDAQ stock prices written in React Native. I was responsible for \
        frontend and machine learning part. I utilized a Long Short Term Memory \
        (LSTM) model to implement the AI that predicts stock prices',
      year: '2020',
      onPreviewButtonPress: () => {
        console.log('Stock Market Predictor iOS App Preview Pressed');
      },
      onVisitSitePress: () => {
        console.log('Stock Market Predictor iOS App Visit Site Pressed');
      },
    },
    {
      img: '',
      title: 'Pet Health Analyzer',
      description:
        'Pet Health Analyzer is a mobile app written in React Native. \
        Users can record respiratory and heart rates of their pets. \
        The app shows a graph of the pets health trend and warn users \
        if heart or respiratory rates are higher than normal.',
      year: '2020',
      onPreviewButtonPress: () => {
        console.log('Stock Market Predictor iOS App Preview Pressed');
      },
      onVisitSitePress: () => {
        console.log('Stock Market Predictor iOS App Visit Site Pressed');
      },
    },
    {
      img: '',
      title: 'My Portfolio Website',
      description:
        'This website is written in React.js with Styled Components, \
        and hosted in AWS EC2 machine. I update my projects and skills in here.',
      year: '2020',
      onPreviewButtonPress: () => {
        console.log('Stock Market Predictor iOS App Preview Pressed');
      },
      onVisitSitePress: () => {
        console.log('Stock Market Predictor iOS App Visit Site Pressed');
      },
    },
  ]);

  return (
    <Wrapper>
      <TopSection>
        <Header />
        <IntroWrapper>
          <IntroMainText>
            AI RESEARCH & <br /> MOBILE / WEB / GAME DEVELOPMENT
            {/* AI 리서치 & <br /> 모바일 / 웹 / 게임 개발 */}
          </IntroMainText>
          <IntroSubText>
            {
              "Hi, I am Jihyo Kim. I am specializing in mobile & web development. \
            If you're a business seeking a web & mobile presence or is looking to hire, \
            contact me here."
            }
            {/* {
              '모바일과 웹 개발을 전문으로 하고 있습니다. \
              프로그래머를 구직중이시거나, 외주를 맡기고 싶으시면 연락주세요.'
            } */}
          </IntroSubText>
          <GetStartedButton>
            {'Get Started'}
            {/* {'시작하기'} */}
          </GetStartedButton>
        </IntroWrapper>
      </TopSection>
      <ServicesSection>
        <Carousel items={serviceItems} />
        <Button label="Learn More" onClick={() => console.log('Learn More')} />
      </ServicesSection>
      <PortfolioSection>
        <PortfolioSectionTitle>Portfolio</PortfolioSectionTitle>
        {portfolioItems.map((item, i) => (
          <PortfolioItem key={i} {...item} />
        ))}
      </PortfolioSection>
      <Footer />
    </Wrapper>
  );
};

export default Home;
