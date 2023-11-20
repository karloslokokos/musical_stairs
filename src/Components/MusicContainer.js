// MusicContainer.js
import React, { useEffect, useState } from 'react';
import MusicVisualiser from './Components/musicVisualiser';

const MusicContainer = () => {
  const [noteData, setNoteData] = useState([]);

  useEffect(() => {
    // Fetch note data from your Flask API
    fetch('http://localhost:5000/get_note_data')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from API:', data);

        setNoteData(data.notes);
      })
      .catch((error) => {
        console.error('Error fetching notes:', error);
      });
  }, []);

  return <MusicVisualiser noteData={noteData} />;
};

export default MusicContainer;
