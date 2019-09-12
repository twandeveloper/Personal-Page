import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import SkillSection from './components/SkillSection'

function App() {
  const headerStyle = {
    backgroundColor: 'blue',
    height: '100vh'
}

  return (
    <div className="App">
      <Header/>
      <SkillSection />
    
      
    </div>
  );
}

export default App;
