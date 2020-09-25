import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 950px) {
    /* width: 340px; */
  }
`;
const ProjectImageSection = styled.div`
  position: relative;
  background-color: ${colors.lightPrimaryTextBackgroundColor};
  height: 300px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 4px;
`;
const BottomProjectDescriptionSection = styled.div``;
const BottomProjectTypeText = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: ${colors.primaryTextColor};
  margin-bottom: 0.25rem;
  background-color: ${colors.lightPrimaryTextBackgroundColor};
  height: 12px;
  width: 40%;
`;
const BottomProjectTitleText = styled.div`
  overflow: hidden;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 0.9;
  margin-bottom: 0.7rem;
  background-color: ${colors.lightPrimaryTextBackgroundColor};
  height: 25px;
  width: 60%;
`;
const BottomProjectBreifDescriptionText = styled.div`
  font-size: 12px;
  background-color: ${colors.lightPrimaryTextBackgroundColor};
  width: fit-content;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  background-color: ${colors.lightPrimaryTextBackgroundColor};
  height: 12px;
  width: 50%;
`;
const BottomProjectDurationText = styled.div`
  font-size: 12px;
  background-color: ${colors.lightPrimaryTextBackgroundColor};
  width: fit-content;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  background-color: ${colors.lightPrimaryTextBackgroundColor};
  height: 12px;
  width: 30%;
`;

const EmptyProjectItem = () => {
  return (
    <Wrapper>
      <ProjectImageSection />
      <BottomProjectDescriptionSection>
        <BottomProjectTypeText />
        <BottomProjectTitleText />
        <BottomProjectBreifDescriptionText />
        <BottomProjectDurationText />
      </BottomProjectDescriptionSection>
    </Wrapper>
  );
};

export default EmptyProjectItem;
