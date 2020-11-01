import { CarouselItemProps, PortfolioItemProps, ProjectItemProps, ProjectDetailsRouteProps } from '../types';

const projectDetailsRoutes: ProjectDetailsRouteProps[] = [
  {
    route: '/projects/bullstocksai',
    projectDetails: {
      appLogoIconImage: require('../assets/bull_stocks_logo.png'),
      title: 'BullStocks AI',
      description:
        'BullStock AI is a mobile app that shows predictions' +
        'for NASDAQ stock prices written in React Native.' +
        'I was responsible for frontend and machine learning part. ' +
        'I utilized a Long Short Term Memory (LSTM) model to implement' +
        'the AI that predicts stock prices',
      previewImages: [
        require('../assets/bull_stocks/s1.png'),
        require('../assets/bull_stocks/s4.png'),
        require('../assets/bull_stocks/s2.png'),
        require('../assets/bull_stocks/s3.png'),
        require('../assets/bull_stocks/s10.png'),
        require('../assets/bull_stocks/s11.png'),
        require('../assets/bull_stocks/s12.png'),
      ],
    },
  },
  {
    route: '/projects/pethealthanalyzer',
    projectDetails: {
      appLogoIconImage: require('../assets/pet_health_analyzer_icon.png'),
      title: '반려동물 호흡수 측정',
      description:
        '강아지나 고양이가 잠들었을때의 호흡수(SRR, Sleeping Respiratory' +
        'Rate)를 측정하는 것은 매우 중요합니다. 정상적으로 분당 15-25회가 정상이며 그 이상인 경우나 지속적으로' +
        '증가하는 경우 울혈성 심부전을 의심할 수 있습니다. 그래서 심장질환이 의심되거나 앓고 있는 반려동물의' +
        '호흡수를 측정하고 기록한다면 질병을 모니터링하고 응급상황에 대처하는 데에 큰 도움이 됩니다. 이 앱은' +
        '반려동물의 호흡수를 잴수있도록 도와줍니다. 또한 동물별, 날짜별로 기록을 관리할 수 있습니다. 심박수와' +
        '몸무게 또한 기록이 가능합니다. 이러한 기록들을 수의사에게 제출한다면 진료에 큰 도움이 될것입니다.',
      previewImages: [
        require('../assets/pet_health_analyzer/1.PNG'),
        require('../assets/pet_health_analyzer/2.PNG'),
        require('../assets/pet_health_analyzer/11.PNG'),
        require('../assets/pet_health_analyzer/13.PNG'),
        require('../assets/pet_health_analyzer/5.PNG'),
        require('../assets/pet_health_analyzer/6.PNG'),
        require('../assets/pet_health_analyzer/8.PNG'),
        require('../assets/pet_health_analyzer/10.PNG'),
        require('../assets/pet_health_analyzer/7.PNG'),
        require('../assets/pet_health_analyzer/9.PNG'),
        require('../assets/pet_health_analyzer/3.PNG'),
        require('../assets/pet_health_analyzer/4.PNG'),
        require('../assets/pet_health_analyzer/12.PNG'),
      ],
    },
  },
];

const serviceItems: CarouselItemProps[] = [
  {
    img: require('../assets/react.png'),
    title: 'React/React Native',
    description:
      'I am able to create any mobile or web applications using React and React Native. ' +
      'I like to use React with Styled-Components and Context API',
  },
  {
    img: require('../assets/node.png'),
    title: 'Node.js/Express',
    description: 'I have a good understanding of Node servers. I am able to create simple REST APIs using Express',
  },
  {
    img: require('../assets/undraw_mobile_images.svg'),
    title: 'Native App Development',
    description:
      'I am currently learning iOS UIKit and Native Android. Not an expert at it, but able to create ' +
      'simple native iOS/Android apps',
  },
  {
    img: require('../assets/undraw_no_data.svg'),
    title: 'And More...',
    description:
      'I am also cabale of developing software using various tech stacks,' +
      'including Go Lang, Flutter/Dart, Django, C/C++... I am a fast learner and always look for something to learn',
  },
];

const projectItems: ProjectItemProps[] = [
  {
    img: require('../assets/bullstock_graph.png'),
    title: 'BullStock AI',
    description:
      'BullStock AI is a mobile app that shows predictions for ' +
      'NASDAQ stock prices written in React Native. I was responsible for ' +
      'frontend and machine learning part. I utilized a Long Short Term Memory ' +
      '(LSTM) model to implement the AI that predicts stock prices ',
    duration: '2020.05 ~ 2020.09',
    shortDescription: 'Outsourcing',
    type: 'Mobile Application',
    tag: ['Full-Stack', 'React Native', 'AI'],
    buttons: [
      {
        title: 'Previews',
        onClick: () => (window.location.href = '/projects/bullstocksai'),
      },
    ],
  },
  {
    img: require('../assets/iro.png'),
    title: 'Pet Health Analyzer',
    description:
      'Pet Health Analyzer is a mobile app written in React Native.' +
      'Users can record respiratory and heart rates of their pets.' +
      'The app shows a graph of the pets health trend and warn users' +
      'if heart or respiratory rates are higher than normal.',
    duration: '2020.05 ~ 2020.06',
    shortDescription: 'Outsourcing',
    type: 'Mobile Application',
    tag: ['Full-Stack', 'React-Native'],
    buttons: [
      {
        title: 'Previews',
        onClick: () => (window.location.href = '/projects/pethealthanalyzer'),
      },
      {
        title: 'Download',
        onClick: () => {
          window.open('https://play.google.com/store/apps/details?id=com.animalheartratemonitoringapp&hl=ko');
        },
      },
    ],
  },
  {
    img: require('../assets/portfolio_website.png'),
    title: 'My Portfolio Website',
    description:
      'This website is written in React.js with Styled Components, ' +
      'and hosted in AWS EC2 machine. I update my projects and skills in here.',
    duration: '2020.05 ~ Now',
    shortDescription: 'Personal Project',
    type: 'Web Application',
    tag: ['Frontend', 'React.js'],
    buttons: [
      {
        title: 'Github',
        onClick: () => {
          window.open('https://github.com/kimjihyo/portfolio');
        },
      },
    ],
  },
  {
    img: require('../assets/grateful.png'),
    title: 'Grateful Estate Moble App',
    description:
      'Grateful Estate is a subscription-based service that helps ' +
      'you or your loved ones manage their end of life affairs. ' +
      'The service helps users connect with their loved ones and develop ' +
      'a Gratitude Register to keep what they are grateful for in mind.',
    duration: '2020.05 ~ 2020.06',
    shortDescription: 'Outsourcing',
    type: 'Mobile Application',
    tag: ['Frontent', 'Android'],
    imgShouldCover: false,
  },
  {
    img: require('../assets/gomoku_cropped.png'),
    title: 'Gomoku',
    description:
      'Gomoku, also called Five in a Row, is an abbstract strategy board game' +
      'It is traditionally payed with Go pieces on a Go board. I created the game ' +
      'with C++ and SFML, which is a wrapper library for OpenGL.',
    duration: '2020.01 ~ 2020.02',
    shortDescription: 'Personal Project',
    type: 'PC Game',
    tag: ['C++/SFML', 'Game'],
    buttons: [
      {
        title: 'Github',
        onClick: () => {
          window.open('https://github.com/kimjihyo/Gomoku');
        },
      },
    ],
  },
  {
    img: require('../assets/minesweeper.png'),
    title: 'Minesweeper Web Game',
    description:
      'Gomoku, also called Five in a Row, is an abbstract strategy board game ' +
      'It is traditionally payed with Go pieces on a Go board. I created the game ' +
      'with C++ and SFML, which is a wrapper library for OpenGL.',
    duration: '2018.09 ~ 2018.09',
    shortDescription: 'Personal Project',
    type: 'Web Game',
    tag: ['Plain JS', 'Web Game'],
    buttons: [
      {
        title: 'Play Game',
        onClick: () => {
          window.open('https://jijuntay-minesweeper.web.app/');
        },
      },
      {
        title: 'Github',
        onClick: () => {
          window.open('https://github.com/kimjihyo/minesweeper_bcit');
        },
      },
    ],
  },
  {
    img: require('../assets/memory_game.png'),
    title: 'Memory Game',
    description:
      'Gomoku, also called Five in a Row, is an abbstract strategy board game ' +
      'It is traditionally payed with Go pieces on a Go board. I created the game ' +
      'with C++ and SFML, which is a wrapper library for OpenGL.',
    duration: '2018.09 ~ 2018.09',
    shortDescription: 'Personal Project',
    type: 'Web Game',
    tag: ['Plain JS', 'Web Game'],
    buttons: [
      {
        title: 'Play Game',
        onClick: () => {
          window.open(
            'http://ec2-34-221-213-252.us-west-2.compute.amazonaws.com/comp4537/assignments/assignment1/index.html',
          );
        },
      },
    ],
  },
  {
    img: require('../assets/slidng_effect.png'),
    title: 'Sliding Effect',
    description:
      'Gomoku, also called Five in a Row, is an abbstract strategy board game ' +
      'It is traditionally payed with Go pieces on a Go board. I created the game ' +
      'with C++ and SFML, which is a wrapper library for OpenGL.',
    duration: '2020.11 ~ 2020.11',
    shortDescription: 'Personal Project',
    type: 'HTML5 Canvas',
    tag: ['Plain JS', 'Canvas'],
    buttons: [
      {
        title: 'Demo',
        onClick: () => {
          window.open(
            'http://ec2-34-221-213-252.us-west-2.compute.amazonaws.com/comp4537/assignments/assignment1/index.html',
          );
        },
      },
      {
        title: 'Github',
        onClick: () => {
          window.open('https://github.com/kimjihyo/slidingeffect');
        },
      },
    ],
  },
];

const portfolioItems: PortfolioItemProps[] = [
  {
    img: require('../assets/realtor_logo.png'),
    title: 'Realtor.com',
    description:
      'Realtor.com is a real estate listings website operated ' +
      'by the News Corporation subsidiary Move, Inc. ' +
      'Worked as a Co-op Software Enginner in Mobile Department.',
    year: '2019',
    jobTitle: 'Co-op Software Engineer',
    onPreviewButtonPress: () => {
      console.log('Stock Market Predictor iOS App Preview Pressed');
    },
    onVisitSitePress: () => {
      window.open('https://realtor.com');
    },
  },
  {
    img: require('../assets/base_logo.jpg'),
    title: 'Base Student Network',
    description:
      'Base BC Students Network is an app for students to build their ' +
      'official networking/portfolio base by chatting and collaborating ' +
      'with classmates and students from different schools',
    year: '2020',
    jobTitle: 'Full-Stack Developer',
    onPreviewButtonPress: () => {
      console.log('Stock Market Predictor iOS App Preview Pressed');
    },
    onVisitSitePress: () => {
      window.open('https://base.town/');
    },
  },
];

export { serviceItems, projectItems, portfolioItems, projectDetailsRoutes };
