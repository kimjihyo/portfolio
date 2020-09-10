import React from 'react';
import { ButtonProps } from '../types';
import styled from 'styled-components';
import { colors } from '../constants';

const Wrapper = styled.div`
  padding: 12px 30px;
  border-radius: 30px;
  border: 1px solid ${colors.primaryColor1};
  color: ${colors.primaryColor1};
  &:hover {
    background-color: ${colors.primaryColor1};
    color: white;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
  }
`;

const Button = (props: ButtonProps) => {
  return (
    <Wrapper onClick={props.onClick} style={props.style}>
      {props.label}
    </Wrapper>
  );
};

export default Button;
