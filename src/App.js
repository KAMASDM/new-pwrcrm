// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Dashboard from './components/Dashboard';
import CompanyDashboard from './components/CompanyDashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="dashboard/:companyId" element={<CompanyDashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
