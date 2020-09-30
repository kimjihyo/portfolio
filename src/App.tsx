import React from 'react';
import { Home, ProjectDetails } from './containers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projects/bullstocksai">
          <ProjectDetails
            appLogoIconImage={require('./assets/bull_stocks_logo.png')}
            title="BullStocks AI"
            description="BullStock AI is a mobile app that shows predictions 
            for NASDAQ stock prices written in React Native. 
            I was responsible for frontend and machine learning part. 
            I utilized a Long Short Term Memory (LSTM) model to implement 
            the AI that predicts stock prices"
            previewImages={[
              require('./assets/bull_stocks/s1.png'),
              require('./assets/bull_stocks/s4.png'),
              require('./assets/bull_stocks/s2.png'),
              require('./assets/bull_stocks/s3.png'),
              require('./assets/bull_stocks/s10.png'),
              require('./assets/bull_stocks/s11.png'),
              require('./assets/bull_stocks/s12.png'),
            ]}
          />
        </Route>
        <Route path="/projects/pethealthanalyzer">
          <ProjectDetails
            appLogoIconImage={require('./assets/pet_health_analyzer_icon.png')}
            title="반려동물 호흡수 측정"
            description="강아지나 고양이가 잠들었을때의 호흡수(SRR, Sleeping Respiratory
                Rate)를 측정하는 것은 매우 중요합니다. 정상적으로 분당 15-25회가 정상이며 그 이상인 경우나 지속적으로
                증가하는 경우 울혈성 심부전을 의심할 수 있습니다. 그래서 심장질환이 의심되거나 앓고 있는 반려동물의
                호흡수를 측정하고 기록한다면 질병을 모니터링하고 응급상황에 대처하는 데에 큰 도움이 됩니다. 이 앱은
                반려동물의 호흡수를 잴수있도록 도와줍니다. 또한 동물별, 날짜별로 기록을 관리할 수 있습니다. 심박수와
                몸무게 또한 기록이 가능합니다. 이러한 기록들을 수의사에게 제출한다면 진료에 큰 도움이 될것입니다.
                It is very important to measure the Sleeping Respiratory Rate (SRR) when your dog or cat is asleep. 
                Congestive heart failure may be suspected if 15 to 25 beats per minute is normal and higher or 
                if it increases continuously. So, measuring and recording the respiratory rate of a pet with a suspected or suffering 
                heart disease is a great help in monitoring the disease and responding to emergencies. This app helps you measure your pet's breathing rate. 
                You can also manage records by animal and date. Heart rate and weight can also be recorded. Submitting these records to
                 your veterinarian will be of great help to your treatment."
            downloadLink="https://play.google.com/store/apps/details?id=com.animalheartratemonitoringapp&hl=ko"
            previewImages={[
              require('./assets/pet_health_analyzer/1.PNG'),
              require('./assets/pet_health_analyzer/2.PNG'),
              require('./assets/pet_health_analyzer/11.PNG'),
              require('./assets/pet_health_analyzer/13.PNG'),
              require('./assets/pet_health_analyzer/5.PNG'),
              require('./assets/pet_health_analyzer/6.PNG'),
              require('./assets/pet_health_analyzer/8.PNG'),
              require('./assets/pet_health_analyzer/10.PNG'),
              require('./assets/pet_health_analyzer/7.PNG'),
              require('./assets/pet_health_analyzer/9.PNG'),
              require('./assets/pet_health_analyzer/3.PNG'),
              require('./assets/pet_health_analyzer/4.PNG'),
              require('./assets/pet_health_analyzer/12.PNG'),
            ]}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
