import React from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import FooterPlayer from "./components/FooterPlayer";

import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Sidebar/>
        <MainContent/>
      </div>
      
      <FooterPlayer />
    </div>
  );
}

export default App;
