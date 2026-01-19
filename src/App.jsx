import './index.css'
import Quiz from './components/quiz.jsx'
import Result from './components/results.jsx'

function App() {

  return ( <div className="app-container"> 
    <h1>Quiz App</h1> 

    <Quiz />
    <Result />
  </div>
  )
}

export default App
