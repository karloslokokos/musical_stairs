import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/dataTable.css'; // Create a CSS file for styling
import BsNav from '../Containers/BsNav'; // Import the BsNav component

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an API request to your Flask app
    axios.get('http://localhost:5000/get_data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="MainPage-page">

    <BsNav /> {/* Include the BsNav component outside the DataTable container */}

    <div className="data-table-container">

      <div className="data-table-content">
        <h1>Data Table</h1>
        <table className="facebook-table">
          <thead>
            <tr>
              <th>Note ID</th>
              <th>Time Played</th>
              <th>Note Pitch</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.timestamp}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default DataTable;
