import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  padding: 70px 0px;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  margin: 0 10px;
  color: gray;
  text-decoration: none;
`;

const FooterText = styled.p`
  color: gainsboro;
  text-align: center;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Links>
        <Link href="#">Linkedin</Link>
        <Link href="#">Facebook</Link>
        <Link href="#">GitHub</Link>
        <Link href="#">Instagram</Link>
      </Links>
      <FooterText>Created from scratch with React by Jihyo Kim in 2020.</FooterText>
    </Wrapper>
  );
};

export default Footer;
