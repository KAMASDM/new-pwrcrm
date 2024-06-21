// src/components/CompanyDataTable.js
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

const CompanyDataTable = ({ onCompanyClick, onAddSite, onEditCompany }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'parent_company', headerName: 'Parent Company', width: 150 },
    { field: 'number_of_employees', headerName: 'Number of Employees', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <Button variant="contained" color="primary" onClick={() => onAddSite(params.row)}>Add Site</Button>
          <Button variant="contained" color="secondary" onClick={() => onEditCompany(params.row)}>Edit</Button>
        </Box>
      ),
    },
  ];

  const rows = [
    // Sample data
    { id: 1, name: 'Company A', parent_company: 'Parent A', number_of_employees: 100 },
    { id: 2, name: 'Company B', parent_company: 'Parent B', number_of_employees: 200 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onRowClick={(params) => onCompanyClick(params.row)}
      />
    </div>
  );
};

export default CompanyDataTable;
