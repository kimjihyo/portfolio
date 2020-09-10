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
  onPreviewButtonPress: () => void;
  onVisitSitePress: () => void;
}

export interface NavigationItemProp {
  name: string;
  onPress: () => void;
}
