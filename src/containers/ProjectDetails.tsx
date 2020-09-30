import React from 'react';
import styled from 'styled-components';
import { Footer, Header } from '../components';
import { colors } from '../constants';
import { HeaderProps, ProjectDetailsProps } from '../types';

const Wrapper = styled.div`
  background-color: #f2f5f9;
`;

const Container = styled.div`
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 100px;
`;

const ProjectInfoCard = styled.div`
  background-color: white;
  padding-top: 40px;
  padding-bottom: 10px;
`;

const TopSection = styled.div`
  display: flex;
  padding: 0 5%;
`;

const AppLogo = styled.img`
  width: 170px;
  height: 170px;
  margin-right: 1rem;
`;

const PreviewImage = styled.img`
  width: 200px;
  display: inline-block;
  margin-right: 10px;
`;

const TopAppInfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TopAppInfoTextsWrapper = styled.div``;

const AppTitleText = styled.div`
  font-size: 26px;
`;

const ProjectDateText = styled.div`
  color: gray;
`;

const DownloadButton = styled.div`
  width: fit-content;
  color: white;
  background-color: ${colors.primaryGreenColor};
  font-weight: bold;
  padding: 0.25rem 1rem;
  overflow-x: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const AppPreviewImagesSection = styled.div`
  width: 100%;
  margin: 1rem 0;
  margin-top: 20px;
  overflow: auto;
  white-space: nowrap;
  background-color: #00000010;
  padding: 15px 0;
`;

const AppDetailedDescriptionSection = styled.div`
  color: #666;
  font-size: 14px;
  padding: 1rem 0;
  border-top: 1px solid #00000015;
  border-bottom: 1px solid #00000015;
  margin: 1rem 0;
`;

const AppDetailedDescriptionTextsWrapper = styled.div`
  padding: 0 3%;
`;

const AppDetailedDescriptionTitle = styled.div`
  font-weight: bold;
  color: #666;
  margin-bottom: 1rem;
  font-size: 18px;
`;
const AppDetailedDescriptionText = styled.div``;

const ProjectDetails = (props: ProjectDetailsProps) => {
  const [headerProps] = React.useState<HeaderProps>({
    title: props.title,
    navButtons: [
      {
        title: 'HOME',
        onClick: () => (window.location.href = '../'),
      },
    ],
    backgroundColor: colors.primaryColor1,
  });

  const [previewImages] = React.useState<string[]>(props.previewImages);

  return (
    <Wrapper>
      <Header {...headerProps} />
      <Container>
        <ProjectInfoCard>
          <TopSection>
            <AppLogo src={props.appLogoIconImage} />
            <TopAppInfoColumn>
              <TopAppInfoTextsWrapper>
                <AppTitleText>{props.title}</AppTitleText>
                <ProjectDateText>2020.05 ~ 2020.06</ProjectDateText>
              </TopAppInfoTextsWrapper>
              <DownloadButton
                onClick={() => {
                  if (props.downloadLink !== undefined) {
                    window.open(props.downloadLink);
                  }
                }}
              >
                {props.downloadLink !== undefined ? 'Download' : 'N/A for Download'}
              </DownloadButton>
            </TopAppInfoColumn>
          </TopSection>
          <AppDetailedDescriptionSection>
            <AppDetailedDescriptionTextsWrapper>
              <AppDetailedDescriptionTitle>{props.title}</AppDetailedDescriptionTitle>
              <AppDetailedDescriptionText>{props.description}</AppDetailedDescriptionText>
            </AppDetailedDescriptionTextsWrapper>
          </AppDetailedDescriptionSection>
          <AppPreviewImagesSection>
            {previewImages.map((img, i) => (
              <PreviewImage key={i} src={img} />
            ))}
          </AppPreviewImagesSection>
        </ProjectInfoCard>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default ProjectDetails;
