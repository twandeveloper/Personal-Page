import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Skill from './components/Skill'

function App() {
  const headerStyle = {
    backgroundColor: 'blue',
    height: '100vh'
}

  return (
    <div className="App">
      <Header/>
      <div style={headerStyle}>
      <Skill />
      </div>
      
    </div>
  );
}

export default App;
