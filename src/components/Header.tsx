import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Appbar = styled.div`
  position: fixed;
  width: 100%;
  height: 9vh;
  transition: height 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${(props: { scrolled: boolean }) => {
    if (props.scrolled) {
      return `
        height: 6.5vh;
        background-color: ${colors.primaryColor1};
        transition: height 0.5s;
        -webkit-box-shadow: 10px 10px 22px -20px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 22px -20px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 22px -20px rgba(0,0,0,0.75);
      `;
    } else {
      return `
      `;
    }
  }}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

const Title = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: 900;
`;

const TitleColumn = styled.div`
  display: flex;
  align-items: center;
`;

const ConnectionIndicator = styled.div`
  border-radius: 100%;
  background-color: lime;
  width: 10px;
  height: 10px;
`;

const ConnectionStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-size: 10px;
  padding: 8px 0px;
  width: 90px;
  background-color: #00000050;
  border-radius: 200px;
  margin-left: 10px;
  text-transform: uppercase;
`;

const NavigationButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavigationButton = styled.span`
  color: white;
  padding-left: 20px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const scrollEventListner = () => {
      const isTop = window.scrollY < 1;
      if (!isTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', scrollEventListner);
    return () => {
      window.removeEventListener('scroll', scrollEventListner);
    };
  }, []);

  return (
    <Appbar scrolled={scrolled}>
      <Wrapper>
        <TitleColumn>
          <Title>jihyo.me</Title>
          <ConnectionStatus>
            <ConnectionIndicator />
            Online
          </ConnectionStatus>
        </TitleColumn>
        <NavigationButtonsWrapper>
          <NavigationButton>SKILLS</NavigationButton>
          <NavigationButton>PORTFOLIO</NavigationButton>
          <NavigationButton>PRICING</NavigationButton>
          <NavigationButton>한국어</NavigationButton>
        </NavigationButtonsWrapper>
      </Wrapper>
    </Appbar>
  );
};

export default Header;
