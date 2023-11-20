import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Score } from './Score';
import BsNav from '../Containers/BsNav'; // Import the BsNav component

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function MusicVisualiser() {
  const [noteData, setNoteData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get_note_data');
        setNoteData(response.data);
        console.log('Note data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching note data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  // Split noteData into chunks of 32 notes
  const stavesChunks = chunkArray(noteData, 32);

  return (
    <div className="MainPage-page">
      {/* Include the BsNav component */}
      <BsNav />
      
      <div className="centered-content">
        {/* <h1>Music Visualiser</h1> */}
        {stavesChunks.map((stavesChunk, index) => (
          <Score key={index} staves={stavesChunk} />
        ))}
        {stavesChunks.map((stavesChunk, index) => (
          <Score key={index} staves={stavesChunk} />
        ))}
      </div>
    </div>
  );
}

export default MusicVisualiser;
