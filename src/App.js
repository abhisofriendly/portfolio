import './App.css';
import HomePage from './Pages/HomePage';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage}/>
    </div>
  );
}

export default App;
