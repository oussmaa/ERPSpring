import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Page from './Layout/Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Page />
      </Router>
    </div>
  );
}

export default App;

