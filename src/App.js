import React, { Component } from 'react';
import  Menu from './components/menu';
import Report from './pages/report';
import Home from './pages/home';
import StudyMaterial from './pages/studyMaterial';
import Ranking from './pages/ranking';
import './App.css';


class App extends Component {
  render() {
    return (
      
        
        <div>
          <Menu/>
          <Ranking/>
          <StudyMaterial/>
          <Report/>
          <Home/>
        </div>

     
    );
  }
}

export default App;
