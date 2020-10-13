import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SendButton = styled.input`
  border: 1px solid transparent;
  border-color: ${colors.primaryColor1};
  background-color: ${colors.primaryColor1};
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1rem;
  user-select: none;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${colors.primaryColor2};
    transition: background-color 1s;
  }
`;

const TextField = styled.input`
  background: #fff;
  border: 1px solid #dadada;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  outline: none;
`;

const MessageField = styled.textarea`
  background: #fff;
  border: 1px solid #dadada;
  height: auto;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  outline: none;
  resize: none;
`;

const Label = styled.span`
  display: inline-block;
  text-transform: uppercase;
  color: #9c9c9c;
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const Row = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
    width: 80%;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ContactMeForm = () => {
  return (
    <Wrapper>
      <Row>
        <InputContainer style={{ flex: 0.45 }}>
          <Label>Email</Label>
          <TextField />
        </InputContainer>
        <InputContainer style={{ flex: 0.45 }}>
          <Label>Name</Label>
          <TextField />
        </InputContainer>
      </Row>
      <Row>
        <InputContainer>
          <Label>Message</Label>
          <MessageField rows={5} />
        </InputContainer>
      </Row>
      <SendButton type="button" value="Send" />
    </Wrapper>
  );
};

export default ContactMeForm;
