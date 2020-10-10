import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';
import { ReactComponent as MenuIcon } from '../assets/menu-white-18dp.svg';
import { HeaderNavButtonProps, HeaderProps } from '../types';

interface HeaderStyleProps {
  scrolled: boolean;
  backgroundColor?: string;
}

const Appbar = styled.div`
  z-index: 1;
  position: fixed;
  padding: 25px 0;
  width: 100%;
  transition: padding 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  ${(props: HeaderStyleProps) => {
    if (props.scrolled) {
      return `
        padding: 15px 0;
        background-color: ${colors.primaryColor1};
        transition: padding 0.5s;
        -webkit-box-shadow: 10px 10px 22px -20px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 22px -20px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 22px -20px rgba(0,0,0,0.75);
      `;
    } else {
      return `
      `;
    }
  }};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

const Title = styled.h1`
  color: white;
  font-size: 19px;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const TitleColumn = styled.div`
  display: flex;
  align-items: center;
`;

const ConnectionIndicator = styled.div`
  border-radius: 100%;
  background-color: lime;
  width: 8px;
  height: 8px;
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
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;

const NavigationButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

const NavigationButton = styled.span`
  color: white;
  padding-left: 20px;
  font-weight: bold;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 15px;
  &:hover {
    cursor: pointer;
    color: ${colors.secondaryColor};
    transition: color 0.4s;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const DrawerButton = styled.div`
  width: 30px;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

const Drawer = styled.div`
  margin-top: 20px;
`;

const DrawerItem = styled.div`
  text-align: center;
  color: white;
  font-weight: bold;
  margin: 25px 0;
  &:hover {
    cursor: pointer;
    color: ${colors.secondaryColor};
    transition: color 0.4s;
  }
`;

const Header = (props: HeaderProps) => {
  const [navigationItems] = React.useState<HeaderNavButtonProps[]>([...props.navButtons]);

  const [scrolled, setScrolled] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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

  const onMenuIconPress = () => setDrawerOpen(!drawerOpen);

  const expandedAppbarStyle = {
    backgroundColor: `${colors.primaryColor1}`,
    boxShadow: `10px 10px 22px -20px rgba(0,0,0,0.75)`,
  };

  return (
    <Appbar
      backgroundColor={props.backgroundColor}
      scrolled={scrolled}
      style={drawerOpen ? expandedAppbarStyle : undefined}
    >
      <Wrapper>
        <TitleColumn>
          <Title>{props.title}</Title>
          <ConnectionStatus>
            <ConnectionIndicator />
            Online
          </ConnectionStatus>
        </TitleColumn>
        <NavigationButtonsWrapper>
          <DrawerButton onClick={onMenuIconPress}>
            <MenuIcon width="100%" height="100%" />
          </DrawerButton>
          {navigationItems.map((item, i) => (
            <NavigationButton key={i} onClick={item.onClick}>
              {item.title}
            </NavigationButton>
          ))}
        </NavigationButtonsWrapper>
      </Wrapper>
      <Drawer style={!drawerOpen ? { display: 'none' } : undefined}>
        {navigationItems.map((item, i) => (
          <DrawerItem key={i} onClick={item.onClick}>
            {item.title}
          </DrawerItem>
        ))}
      </Drawer>
    </Appbar>
  );
};

export default Header;
