export interface HeaderProps {
  title: string;
  navButtons: HeaderNavButtonProps[];
  backgroundColor?: string;
}

export interface HeaderNavButtonProps {
  title: string;
  onClick: () => void;
}

export interface ProjectDetailsProps {
  title: string;
  description: string;
  appLogoIconImage: string;
  previewImages: string[];
  downloadLink?: string;
}

export interface ProjectDetailsRouteProps {
  route: string;
  projectDetails: ProjectDetailsProps;
}

export interface CarouselProps {
  items: CarouselItemProps[];
}

export interface CarouselItemProps {
  img: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

export interface PortfolioItemProps {
  img: string;
  title: string;
  description: string;
  year: string;
  jobTitle: string;
  onPreviewButtonPress: () => void;
  onVisitSitePress: () => void;
}

export interface ProjectItemProps {
  img: string;
  imgShouldCover?: boolean;
  title: string;
  description: string;
  shortDescription: string;
  duration: string;
  type: string;
  tag: string[];
  buttons?: ProjectItemButtonProps[];
}

export interface ProjectItemButtonProps {
  title: string;
  onClick: () => void;
}

export interface NavigationItemProp {
  name: string;
  onPress: () => void;
}
