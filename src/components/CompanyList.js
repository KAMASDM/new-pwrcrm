// src/components/CompanyList.js
import React, { useState } from 'react';
import { Typography, Paper, Box } from '@mui/material';
import CompanyDataTable from './CompanyDataTable';
import AddCompany from './AddCompany';
import { Button } from '@mui/material'; 

const CompanyList = ({ onCompanyClick }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleAddSite = (company) => {
    setSelectedCompany(company);
    // Here you can navigate to the Add Site component or open a modal
  };

  const handleEditCompany = (company) => {
    setSelectedCompany(company);
    // Here you can navigate to the Edit Company component or open a modal
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Companies</Typography>
      <Box sx={{ mb: 2 }}>
        <AddCompany />
      </Box>
      <CompanyDataTable onCompanyClick={onCompanyClick} onAddSite={handleAddSite} onEditCompany={handleEditCompany} />
      {selectedCompany && (
        <Box>
          <Button variant="contained" onClick={() => console.log('Navigate to Add Site')}>
            Add Site to {selectedCompany.name}
          </Button>
          <Button variant="contained" onClick={() => console.log('Navigate to Edit Company')}>
            Edit {selectedCompany.name}
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default CompanyList;
