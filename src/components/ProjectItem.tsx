import React from 'react';
import styled from 'styled-components';
import { ProjectItemProps } from '../types';
import { colors } from '../constants';

const Wrapper = styled.div`
  width: 100%;
  @media (max-width: 950px) {
    /* width: 340px; */
  }
`;
const ProjectImageSection = styled.div`
  position: relative;
  border: 1.5px solid #00000015;
  height: 300px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  ${(props: { bgImg: string; shouldCover: boolean }) => {
    if (props.shouldCover) {
      return `
        background-image: url(${props.bgImg});
        background-size: cover;
      `;
    } else {
      return `
        background-image: url(${props.bgImg});
        background-size: contain;
      `;
    }
  }}
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    height: 250px;
  }
  @media (max-width: 700px) {
    height: 200px;
  }
`;
const ProjectTag = styled.div`
  font-weight: 900;
  background-color: white;
  width: fit-content;
  margin-bottom: 0.5rem;
  font-size: 16px;
  padding: 1px 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 30px 3px;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
const ProjectDescriptionContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  font-size: 15px;
  letter-spacing: -0.5px;
  line-height: 1.35;
  border-radius: 4px;
  padding: 10%;
  /* overflow-y: auto; */
  display: flex;
  flex-direction: column;
`;
const BottomProjectDescriptionSection = styled.div``;
const BottomProjectTypeText = styled.div`
  font-weight: 700;
  font-size: 12px;
  color: ${colors.primaryTextColor};
  margin-bottom: 0.25rem;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const BottomProjectTitleText = styled.div`
  overflow: hidden;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.5px;
  line-height: 0.9;
  margin-bottom: 0.7rem;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const BottomProjectBreifDescriptionText = styled.div`
  font-size: 12px;
  background-color: ${colors.primaryTextBackgroundColor};
  width: fit-content;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
const BottomProjectDurationText = styled.div`
  font-size: 12px;
  background-color: ${colors.primaryTextBackgroundColor};
  width: fit-content;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const ProjectDescriptionText = styled.div`
  flex: 0.5;
  overflow-y: hidden;
  font-size: 14px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectItemButtonsContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

const ProjectItemButton = styled.div`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.25rem 1rem;
  border: 2.5px solid white;
  border-radius: 8px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 12px;
    font-weight: 500;
    border: 1.5px solid white;
  }

  &:hover {
    // background-color: #ffffff40;
    transition: background-color 0.1s, color 0.1s;
    background-color: white;
    color: ${colors.black};
  }
`;

const ProjectItem = (props: ProjectItemProps) => {
  const [descriptionVisible, setDescriptionVisible] = React.useState<boolean>(false);
  return (
    <Wrapper>
      <ProjectImageSection
        shouldCover={props.imgShouldCover === undefined || props.imgShouldCover}
        bgImg={props.img !== '' ? props.img : require('../assets/undraw_no_data.svg')}
        onClick={() => setDescriptionVisible(!descriptionVisible)}
      >
        {!descriptionVisible && (
          <>
            {props.tag.map((tag, i) => (
              <ProjectTag key={i}>{tag}</ProjectTag>
            ))}
          </>
        )}
        {descriptionVisible && (
          <ProjectDescriptionContainer>
            <ProjectDescriptionText>{props.description}</ProjectDescriptionText>
            <ProjectItemButtonsContainer>
              {props.buttons !== undefined &&
                props.buttons.map((item, i) => (
                  <ProjectItemButton key={i} onClick={item.onClick}>
                    {item.title}
                  </ProjectItemButton>
                ))}
            </ProjectItemButtonsContainer>
          </ProjectDescriptionContainer>
        )}
      </ProjectImageSection>
      <BottomProjectDescriptionSection>
        <BottomProjectTypeText>{props.type}</BottomProjectTypeText>
        <BottomProjectTitleText>{props.title}</BottomProjectTitleText>
        <BottomProjectBreifDescriptionText>{props.shortDescription}</BottomProjectBreifDescriptionText>
        <BottomProjectDurationText>{props.duration}</BottomProjectDurationText>
      </BottomProjectDescriptionSection>
    </Wrapper>
  );
};

export default ProjectItem;
