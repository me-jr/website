import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogSpace from './Blog';
import Home from './Home';
import Team from './Team';
import Evren from './team-profiles/evren'
import Bhavya from './team-profiles/bhavya'
import Rian from './team-profiles/rian'
import Raghav from './team-profiles/raghav'


const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogSpace />} />
            <Route path="/about-team" element={<Team />} />
            <Route path="/about-team/Evren" element={<Evren />} />
            <Route path="/about-team/Bhavya" element={<Bhavya />} />
            <Route path="/about-team/Raghav" element={<Raghav />} />
            <Route path="/about-team/Rian" element={<Rian />} />
          </Routes>
        </Router>
      );
};

export default App;