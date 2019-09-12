import React from 'react';
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Tracking from './components/Tracking/Tracking';
import Aside from './components/Aside/AsideContent';
import Icon from './components/Icon/Icon';

function App() {
  return (
    <div className="App">
      <div className="App-grid-2 App-aside">
        <span className="App-aside-line"></span>
        <Aside />
      </div>
      <div className="App-grid-1 App-content">
        <header>
          <Nav />
        </header>
        <section className="App-section">
          <div className="App-search-bar">
            <div className="App-search-icon">
              <Icon name="Check" />
            </div>
            <div className="App-search-input">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <Tracking />
          <div className="App-icon-add">
            <Icon name="Plus" width="50px" height="50px" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
