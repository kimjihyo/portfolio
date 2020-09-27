import React from 'react';
import styled from 'styled-components';
import { Header, Carousel, Button, PortfolioItem, Footer, ProjectItem, EmptyProjectItem } from '../components';
import { CarouselItemProps, PortfolioItemProps, ProjectItemProps } from '../types';
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
  height: 300px;
`;

const IntroMainText = styled.h1`
  text-align: center;
  color: white;
  font-weight: 900;
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const IntroSubText = styled.p`
  color: white;
  line-height: 1.6;
  font-size: 16px;
  max-width: 480px;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;
  }
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
  font-size: 24px;
  text-align: center;
`;

const ProjectSection = styled.div`
  border-top-width: 1px;
  border-top-color: gainsboro;
  border-top-style: solid;
  padding-top: 60px;
`;

const ProjectSectionTitle = styled.h1`
  color: #00000055;
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
`;

const ProjectItemGrid = styled.div`
  width: 88%;
  max-width: 1600px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 1rem;
  row-gap: 3rem;
  padding: 0px 10px;
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Home = () => {
  const [serviceItems] = React.useState<CarouselItemProps[]>([
    {
      img: require('../assets/react.png'),
      title: 'React/React Native',
      description: 'Integration of eCommerce platforms, payment gateways, custom product templates, and more.',
    },
    {
      img: require('../assets/node.png'),
      title: 'Node.js/Express',
      description: 'Integration of eCommerce platforms, payment gateways, custom product templates, and more.',
    },
    {
      img: require('../assets/xcode.png'),
      title: 'iOS Development',
      description: 'Integration of eCommerce platforms, payment gateways, custom product templates, and more.',
    },
  ]);

  const [projectItems] = React.useState<ProjectItemProps[]>([
    {
      img: require('../assets/bullstock_graph.png'),
      title: 'BullStock AI',
      description:
        'BullStock AI is a mobile app that shows predictions for \
        NASDAQ stock prices written in React Native. I was responsible for \
        frontend and machine learning part. I utilized a Long Short Term Memory \
        (LSTM) model to implement the AI that predicts stock prices',
      duration: '2020.05 ~ 2020.09',
      shortDescription: 'Outsourcing',
      type: 'Mobile Application',
      tag: ['Full-Stack', 'React Native', 'AI'],
    },
    {
      img: require('../assets/iro.png'),
      title: 'Pet Health Analyzer',
      description:
        'Pet Health Analyzer is a mobile app written in React Native. \
        Users can record respiratory and heart rates of their pets. \
        The app shows a graph of the pets health trend and warn users \
        if heart or respiratory rates are higher than normal.',
      duration: '2020.05 ~ 2020.06',
      shortDescription: 'Outsourcing',
      type: 'Mobile Application',
      tag: ['Full-Stack', 'React-Native'],
      buttons: [
        {
          title: 'Google Play Store',
          onClick: () => {
            window.open('https://play.google.com/store/apps/details?id=com.animalheartratemonitoringapp&hl=ko');
          },
        },
      ],
    },
    {
      img: require('../assets/portfolio_website.png'),
      title: 'My Portfolio Website',
      description:
        'This website is written in React.js with Styled Components, \
        and hosted in AWS EC2 machine. I update my projects and skills in here.',
      duration: '2020.05 ~ Now',
      shortDescription: 'Personal Project',
      type: 'Web Application',
      tag: ['Frontend', 'React.js'],
      buttons: [
        {
          title: 'View the Website',
          onClick: () => {
            window.open('https://wwwn.naver.com');
          },
        },
        {
          title: 'View Source Code',
          onClick: () => {
            window.open('https://wwwn.naver.com');
          },
        },
      ],
    },
    {
      img: require('../assets/grateful.png'),
      title: 'Grateful Estate Moble App',
      description:
        'Grateful Estate is a subscription-based service that helps \
        you or your loved ones manage their end of life affairs. \
        The service helps users connect with their loved ones and develop \
        a Gratitude Register to keep what they are grateful for in mind.',
      duration: '2020.05 ~ 2020.06',
      shortDescription: 'Outsourcing',
      type: 'Mobile Application',
      tag: ['Frontent', 'Android'],
      imgShouldCover: false,
    },
    {
      img: require('../assets/gomoku_cropped.png'),
      title: 'Gomoku',
      description:
        'Gomoku, also called Five in a Row, is an abbstract strategy board game \
         It is traditionally payed with Go pieces on a Go board. I created the game \
         with C++ and SFML, which is a wrapper library for OpenGL.',
      duration: '2020.01 ~ 2020.02',
      shortDescription: 'Personal Project',
      type: 'PC Game',
      tag: ['C++/SFML', 'Game'],
      buttons: [
        {
          title: 'View Source Code',
          onClick: () => {
            window.open('https://jijuntay-minesweeper.web.app/');
          },
        },
      ],
    },
    {
      img: require('../assets/minesweeper.png'),
      title: 'Minesweeper Web Game',
      description:
        'Gomoku, also called Five in a Row, is an abbstract strategy board game \
         It is traditionally payed with Go pieces on a Go board. I created the game \
         with C++ and SFML, which is a wrapper library for OpenGL.',
      duration: '2018.09 ~ 2018.09',
      shortDescription: 'Personal Project',
      type: 'Web Game',
      tag: ['Plain JS', 'Web Game'],
      buttons: [
        {
          title: 'Play Game',
          onClick: () => {
            window.open('https://jijuntay-minesweeper.web.app/');
          },
        },
        {
          title: 'View Source Code',
          onClick: () => {
            window.open('https://jijuntay-minesweeper.web.app/');
          },
        },
      ],
    },
    {
      img: require('../assets/memory_game.png'),
      title: 'Memory Game',
      description:
        'Gomoku, also called Five in a Row, is an abbstract strategy board game \
         It is traditionally payed with Go pieces on a Go board. I created the game \
         with C++ and SFML, which is a wrapper library for OpenGL.',
      duration: '2018.09 ~ 2018.09',
      shortDescription: 'Personal Project',
      type: 'Web Game',
      tag: ['Plain JS', 'Web Game'],
      buttons: [
        {
          title: 'Play Game',
          onClick: () => {
            window.open('https://www.naver.com');
          },
        },
      ],
    },
  ]);

  const [portfolioItems] = React.useState<PortfolioItemProps[]>([
    {
      img: require('../assets/realtor_logo.png'),
      title: 'Realtor.com',
      description:
        'Realtor.com is a real estate listings website operated \
        by the News Corporation subsidiary Move, Inc. \
        Worked as a Co-op Software Enginner in Mobile Department.',
      year: '2019',
      jobTitle: 'Co-op Software Engineer',
      onPreviewButtonPress: () => {
        console.log('Stock Market Predictor iOS App Preview Pressed');
      },
      onVisitSitePress: () => {
        console.log('Stock Market Predictor iOS App Visit Site Pressed');
      },
    },
    {
      img: require('../assets/base_logo.jpg'),
      title: 'Base Student Network',
      description:
        'Base BC Students Network is an app for students to build their \
        official networking/portfolio base by chatting and collaborating \
        with classmates and students from different schools',
      year: '2020',
      jobTitle: 'Full-Stack Developer',
      onPreviewButtonPress: () => {
        console.log('Stock Market Predictor iOS App Preview Pressed');
      },
      onVisitSitePress: () => {
        console.log('Stock Market Predictor iOS App Visit Site Pressed');
      },
    },
  ]);

  const [numberOfEmptyProjectItems, setNumberOfEmptyProjectItems] = React.useState(0);

  const calculateNumberOfEmptyProjectItems = (width: number) => {
    if (width >= 1600) {
      return projectItems.length % 5 === 0 ? projectItems.length % 5 : 5 - (projectItems.length % 5);
    } else if (width < 1600 && width >= 1200) {
      return projectItems.length % 4 === 0 ? projectItems.length % 4 : 4 - (projectItems.length % 4);
    } else if (width < 1200 && width >= 700) {
      return projectItems.length % 3 === 0 ? projectItems.length % 3 : 3 - (projectItems.length % 3);
    } else {
      return projectItems.length % 2 === 0 ? projectItems.length % 2 : 2 - (projectItems.length % 2);
    }
  };

  React.useEffect(() => {
    let n = calculateNumberOfEmptyProjectItems(window.innerWidth);
    setNumberOfEmptyProjectItems(n);
    window.addEventListener('resize', () => {
      const newN = calculateNumberOfEmptyProjectItems(window.innerWidth);
      if (newN !== n) {
        n = newN;
        setNumberOfEmptyProjectItems(n);
      }
    });
  }, []);

  return (
    <Wrapper>
      <TopSection>
        <Header />
        <IntroWrapper>
          <IntroMainText>
            AI RESEARCH & <br /> MOBILE / WEB / GAME DEVELOPMENT
          </IntroMainText>
          <IntroSubText>
            {
              "Hi, I am Jihyo Kim. I am specializing in mobile & web development. \
            If you're a business seeking a web & mobile presence or is looking to hire, \
            contact me here."
            }
          </IntroSubText>
          <GetStartedButton>{'Contact Me'}</GetStartedButton>
        </IntroWrapper>
      </TopSection>
      <ServicesSection>
        <Carousel items={serviceItems} />
        <Button label="Learn More" onClick={() => console.log('Learn More')} />
      </ServicesSection>
      <ProjectSection>
        <ProjectSectionTitle>Recent Projects</ProjectSectionTitle>
        <ProjectItemGrid>
          {projectItems.map((item, i) => (
            <ProjectItem key={i} {...item} />
          ))}
          {[...Array(numberOfEmptyProjectItems)].map((e, i) => (
            <EmptyProjectItem key={i} />
          ))}
        </ProjectItemGrid>
      </ProjectSection>
      <PortfolioSection>
        <PortfolioSectionTitle>Work Experience</PortfolioSectionTitle>
        {portfolioItems.map((item, i) => (
          <PortfolioItem key={i} {...item} />
        ))}
      </PortfolioSection>
      <Footer />
    </Wrapper>
  );
};

export default Home;
