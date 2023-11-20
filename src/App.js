import React from 'react';
import './styles/App.css';
import DataTable from './Components/DataTable';
import MusicVisualiser from './Components/MusicVisualiser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/DataTable" element={<DataTable />} />
          <Route path="/MusicVisualiser" element={<MusicVisualiser />} />
          {/* <Route path="/BasicExample" element={<BasicExample />} /> */}



        </Routes>
      </div>
    </Router>
  );
}

export default App;


