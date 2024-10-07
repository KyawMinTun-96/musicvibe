import React, {useState, useEffect} from 'react';

const MainContent = () => {

  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [recommended, setRecommended] = useState([]);


  const fetchData = async() => {
    const response = await fetch('https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024');
    const data = await response.json();
    setRecentlyPlayed(data.album);
    setRecommended(data.album);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-content">

      <div className="top-nav">
        <button type="button" className='btn'>
          <i className="bi bi-search">

          </i>
        </button>

        <button type="button" className="btn">
          <i className="bi bi-bell position-relative">
            <span className="position-absolute top-0 left-0 text-danger">4</span>
          </i>
        </button>
      </div>

      <div className="banner">
        <div className="card get-lost">
          <div className='get-lost-info'>
            <h2>GET LOST</h2>
            <p>in your music.</p>
            <button className='btn'><i className="bi bi-play-circle"></i></button>
          </div>
        </div>

        <div className="card mellow-beats">
          <div className='mellow-beats-info'>
            <h2>MELLOW</h2>
            <p>beats.</p>
            <button className='btn'><i className="bi bi-play-circle"></i></button>
          </div>
        </div>
      </div>

      <div className="play-group">
        <div className="recently-played">
          <h3>Recently Played</h3>
          <ul>
            {
              recentlyPlayed.slice(0, 3).map((data) => (
                <li key={data.idAlbum}>
                  <span><img src={data.strAlbumThumb} alt='...' />{data.strAlbumStripped}</span>
                  <span>13:30</span>
                  <button className='btn'><i className="bi bi-heart"></i></button>
                  <button className='btn'><i className="bi bi-three-dots"></i></button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="recommendations">
          <h3>Recommended For You</h3>
          <div className="recommend-cards">
            {
              recommended.slice(10, 13).map((data) => (
                <div key={data.idAlbum} className="recommend-group">
                  <div className="recommend-card">
                    <img src={data.strAlbumThumb} alt='...' />
                  </div>
                  <p>{data.strAlbumStripped}</p>
                  <small className='text-muted'>{data.strAlbum}</small>
                </div>
              ))
            }      
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
