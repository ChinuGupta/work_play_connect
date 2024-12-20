import React from 'react';
import './App.css';
import Header from './Components/Header';
import ProfileSection from './Components/Profile';
import MainContent from './Components/MainContent';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '20px', padding: '20px',marginTop:"30px" }}>
        {/* Profile Section */}
        <div style={{ flex: '1', maxWidth: '25%' }}>
          <ProfileSection />
        </div>

        {/* Main Content Section */}
        <div style={{ flex: '3'}}>
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;