import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DataTable.css'; // Create a CSS file for styling


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
    <div className="data-table-container">
       <header className="DataTable-navbar">
       <a href="/main_page">Main Page</a>
      </header>
      <h1>Data Table</h1>
      <table className="facebook-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Timestamp</th>
            <th>Message</th>
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
  );
}

export default DataTable;

