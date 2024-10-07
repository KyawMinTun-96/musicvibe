import React from 'react';
import '../assets/css/FooterPlayer.css';

const FooterPlayer = () => {
  return (
    <div className="footer-player">   
        <div className="track-info">
            <div className="track-image">
                <img src={require('../assets/images/profile/profile.jpg')} alt='...' />
            </div>
            <span>Mind-Blowing<br/><small className='text-muted'>Various Artists</small></span>
            
        </div>

      <div className="controls">
        <button type='button' className='btn'><i className="bi bi-caret-left-fill"></i></button>
        <button type='button' className='btn'><i className="bi bi-play-circle-fill"></i></button>
        <button type='button' className='btn'><i className="bi bi-caret-right-fill"></i></button>
      </div>

      <div className="volume-control">
        
      </div>
    </div>
  );
};

export default FooterPlayer;
