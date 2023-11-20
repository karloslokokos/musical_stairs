import React from 'react';
import BsNav from '../Containers/BsNav'; // Import the BasicExample component
import '../styles/mainPage.css'; // Create a CSS file for styling
import pianoStairs from '../img/pianoStairs.png';

function MainPage() {
  return (
    <div className="MainPage-page">
      {/* Use the BasicExample component as the new navigation bar */}
      <BsNav />

      <div className="MainPage-content">
        <h1>Welcome to Musical Stairs</h1>
        <img src={pianoStairs} alt="pianoStairs" width="1000" height="500" />
      </div>
    </div>
  );
}

export default MainPage;
