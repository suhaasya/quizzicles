
import { useState } from 'react';
import './App.css';
import QuizPage from './quizzical/QuizPage';
import Start from './quizzical/Start';


function App() {

  const [quizPage, setQuizPage] = useState(false)

  return (
    <div className="App">
      
      
      {quizPage ? <QuizPage /> : <Start setQuizPage={setQuizPage}/>}
    </div>
  );
}

export default App;
