import React from 'react';
import '../assets/css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-img">
          <img src={require('../assets/images/profile/profile.jpg')} alt="User Profile" />
        </div>
        <div className='profile-name'>
          <h3>Joshua</h3>
          <span>Premium</span>
        </div>
      </div>

      <div className="menu">
        <h1 className='muted-text'>BROWSER</h1>
        <ul>
          <li className='my-active'><a href='/'><i className="bi bi-house-heart-fill"></i>Home</a></li>
          <li><a href='/'><i className="bi bi-file-music"></i>Songs</a></li>
          <li><a href='/'><i className="bi bi-music-note-list"></i>Playlists</a></li>
          <li><a href='/'><i className="bi bi-person-lines-fill"></i>Just for You</a></li>
          <li><a href='/'><i className="bi bi-graph-up"></i>Top Charts</a></li>
        </ul>
      </div>

      <div className="playlists">
        <div className='playlists-title'>
          <h1>Your Playlists</h1>
          <button className='btn'><i className="bi bi-plus-circle"></i></button>
        </div>

        <ul>
          <li><a href='/'><i className="bi bi-music-note-list"></i>Workout Mix</a></li>
          <li><a href='/'><i className="bi bi-music-note-list"></i>Chillin' at Home</a></li>
          <li><a href='/'><i className="bi bi-music-note-list"></i>Booping at Adobe</a></li>
          <li><a href='/'><i className="bi bi-music-note-list"></i>XD 4 Life</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
