import React from 'react';
import './Home.css';
import "@fontsource/bebas-neue"; 

const Home = () => {
  const essentials = [
    { id: 'e1', name: 'To-do', icon: '/todo.png' },
    { id: 'e2', name: 'Calendar', icon: '/calendar.png' },
    { id: 'e3', name: 'Dashboard', icon: '/dashboard.png' },
    { id: 'e4', name: 'Diary', icon: '/diary.png' },
  ];

  const rooms = [
    { id: 'r1', name: 'WorkSpace', icon: '/work.png'},
    { id: 'r2', name: 'StudyDesk', icon: '/study.png'},
    { id: 'r3', name: 'IntentRoom', icon: '/intent.png'},
    { id: 'r4', name: 'ChillZone', icon: '/chill.png'},
  ];

  return (
    <div className="home-wrapper">
      <div className="hero-section">
        <h1 className="main-logo">Clubhouse..</h1>
        <p className="sub-text">
          Structure your thinking, Re-imagine Productivity,<br />
          Organise life, room by room
        </p>

        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" className="glass-input" placeholder="" />
        </div>
      </div>

      {/* Essentials Section */}
      <div className="essentials-container">
        <div className="essentials-header">
          <div className="line"></div>
          <span className="label">Essentials</span>
          <div className="line"></div>
        </div>

        <div className="glass-grid">
          {essentials.map((item) => (
            <div key={item.id} className="glass-card">
              <img src={item.icon} alt={item.name} className="item-icon" />
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rooms Section */}
      <div className="essentials-container">
        <div className="essentials-header">
          <div className="line"></div>
          <span className="label">Rooms</span>
          <div className="line"></div>
        </div>

        <div className="glass-grid">
          {rooms.map((item) => (
            <div key={item.id} className="glass-card">
              <img src={item.icon} alt={item.name} className="item-icon" />
              <span className="item-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;