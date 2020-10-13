import React from 'react';
import styled from 'styled-components';
import { Header, Carousel, PortfolioItem, Footer, ProjectItem, EmptyProjectItem, ContactMeForm } from '../components';
import { HeaderProps } from '../types';
import { colors, portfolioItems, projectItems, serviceItems } from '../constants';

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
  font-weight: 700;
  font-size: 32px;
  line-height: 1.5;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    font-size: 25px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const IntroSubText = styled.p`
  color: white;
  line-height: 1.6;
  font-size: 16px;
  max-width: 480px;
  margin-bottom: 30px;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
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
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ServicesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 450px;
`;

const PortfolioSection = styled.div`
  border-top-width: 1px;
  border-top-color: gainsboro;
  border-top-style: solid;
  padding-top: 4em;
`;

const PortfolioSectionTitle = styled.h1`
  color: ${colors.gray};
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 1.5em;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ProjectSection = styled.div`
  border-top-width: 1px;
  border-top-color: gainsboro;
  border-top-style: solid;
  padding-top: 4em;
`;

const ProjectSectionTitle = styled.h1`
  color: ${colors.gray};
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 0.5em;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ProjectSectionSubtitle = styled.h2`
  color: ${colors.lightGray};
  font-size: 18px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 3em;
  @media (max-width: 600px) {
    font-size: 12px;
  }
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
  /* @media (max-width: 600px) {
    grid-template-columns: 1fr;
  } */
`;

const GetInTouchSection = styled.div`
  padding-top: 4em;
`;

const GetInTouchSectionTitle = styled.div`
  color: ${colors.gray};
  text-transform: uppercase;
  font-size: 22px;
  text-align: center;
  font-weight: 900;
  margin-bottom: 2em;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const Home = () => {
  const [headerProps] = React.useState<HeaderProps>({
    title: `jihyo's portfolio`,
    navButtons: [
      {
        title: 'SKILLS',
        onClick: () => (window.location.href = '#skills'),
      },
      {
        title: 'PROJECTS',
        onClick: () => (window.location.href = '#projects'),
      },
      {
        title: 'EXPERIENCE',
        onClick: () => (window.location.href = '#experience'),
      },
    ],
  });

  const [numberOfEmptyProjectItems, setNumberOfEmptyProjectItems] = React.useState(0);

  const calculateNumberOfEmptyProjectItems = React.useCallback((width: number) => {
    if (width >= 1600) {
      return projectItems.length % 5 === 0 ? projectItems.length % 5 : 5 - (projectItems.length % 5);
    } else if (width < 1600 && width >= 1200) {
      return projectItems.length % 4 === 0 ? projectItems.length % 4 : 4 - (projectItems.length % 4);
    } else if (width < 1200 && width >= 700) {
      return projectItems.length % 3 === 0 ? projectItems.length % 3 : 3 - (projectItems.length % 3);
    } else {
      return projectItems.length % 2 === 0 ? projectItems.length % 2 : 2 - (projectItems.length % 2);
    }
  }, []);

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
  }, [calculateNumberOfEmptyProjectItems]);

  return (
    <Wrapper>
      <TopSection>
        <Header {...headerProps} />
        <IntroWrapper>
          <IntroMainText>MOBILE & WEB & GAME DEVELOPMENT</IntroMainText>
          <IntroSubText>
            {
              "Hi, I am Jihyo Kim. I am specializing in mobile & web development. \
            If you're a business seeking a web & mobile presence or is looking to hire, \
            contact me here."
            }
          </IntroSubText>
          <GetStartedButton href="#getintouch">{'Contact Me'}</GetStartedButton>
        </IntroWrapper>
      </TopSection>
      <ServicesSection id="skills">
        <Carousel items={serviceItems} />
      </ServicesSection>
      <ProjectSection id="projects">
        <ProjectSectionTitle>Recent Projects</ProjectSectionTitle>
        <ProjectSectionSubtitle>Please click cards to view more details</ProjectSectionSubtitle>
        <ProjectItemGrid>
          {projectItems.map((item, i) => (
            <ProjectItem key={i} {...item} />
          ))}
          {[...Array(numberOfEmptyProjectItems)].map((e, i) => (
            <EmptyProjectItem key={i} />
          ))}
        </ProjectItemGrid>
      </ProjectSection>
      <PortfolioSection id="experience">
        <PortfolioSectionTitle>Work Experience</PortfolioSectionTitle>
        {portfolioItems.map((item, i) => (
          <PortfolioItem key={i} {...item} />
        ))}
      </PortfolioSection>
      <GetInTouchSection id="getintouch">
        <GetInTouchSectionTitle>Get in touch</GetInTouchSectionTitle>
        <ContactMeForm />
      </GetInTouchSection>
      <Footer />
    </Wrapper>
  );
};

export default Home;
