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
  font-size: 13px;
`;

const FooterText = styled.p`
  color: gainsboro;
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Links>
        <Link href="mailto:kimjihyo0325@gmail.com">Email</Link>
        <Link href="https://www.linkedin.com/in/jihyo-kim-084338156/">Linkedin</Link>
        <Link href="https://www.facebook.com/profile.php?id=100006776461314">Facebook</Link>
        <Link href="https://github.com/kimjihyo">GitHub</Link>
        <Link href="https://www.instagram.com/kimjihyo0325/">Instagram</Link>
      </Links>
      <FooterText>Created from scratch with React by Jihyo Kim in 2020.</FooterText>
    </Wrapper>
  );
};

export default Footer;
