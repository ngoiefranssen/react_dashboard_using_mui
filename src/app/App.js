import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../view/pages/components/Home';
// import About from '../view/pages/components/About';
import Settings from '../view/pages/components/Settings';
import Users from '../view/pages/components/Users';
import Analytics from '../view/pages/components/Analytics';
import Products from '../view/pages/components/Products';

// const About = React.lazy(() => import('../view/pages/components/About'));
// const Home = React.lazy(() => import('../view/pages/components/Home'));
// const Settings = React.lazy(() => import('../view/pages/components/Settings'));

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/user" exact element={<Users />} />
          <Route path="/product" exact element={<Products />} />
          <Route path="/analytic" exact element={<Analytics />} />
          <Route path="/setting" exact element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// 16h00
