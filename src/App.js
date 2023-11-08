import React from 'react';
import './App.css';
import DataTable from './DataTable';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/main_page" element={<MainPage />} />
          <Route path="/data_table" element={<DataTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;