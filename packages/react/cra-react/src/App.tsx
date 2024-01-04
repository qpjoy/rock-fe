import React from 'react';
import { Provider } from "react-redux";
import PizzaApp from './components/pizza/Pizza';
import MyCard from './components/intro/MyCard';

import './App.css';
import Step from './components/steps/Step';
import Travel from './components/travel/Travel';
import EatNSplit from './components/eat-n-split/EatNSplit';
import Tabs from './components/tabs/Tabs';
import WeatheApp from './components/weather/Weather';
import Popcorn from './components/usepopcorn/Popcorn';
import { QuizProvider } from './components/quiz/contexts/QuizContext';
import Quiz from './components/quiz/Quiz';
import AtomicBlog from './components/atomic-blog/AtomicBlog';
import WorkoutTimer from './components/workout-timer/WorkoutTimer';
import store from './components/redux/store';
import Redux from './components/redux/Redux';

function App() {
  return (
    <div className="App">

    <Provider store={store}>
      <Redux />
    </Provider>

      {/* <WorkoutTimer /> */}

      {/* <AtomicBlog /> */}

      {/* <QuizProvider>
        <Quiz />
      </QuizProvider> */}

      {/* <Popcorn /> */}
      {/* <WeatheApp /> */}
      {/* <Tabs /> */}
      {/* <EatNSplit /> */}
      {/* <Travel /> */}
      {/* <Step /> */}
      {/* <MyCard /> */}
      {/* <PizzaApp /> */}
    </div>
  );
}

export default App;
