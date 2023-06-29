import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Settings from '../components/pages/Settings';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/setting" exact element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
