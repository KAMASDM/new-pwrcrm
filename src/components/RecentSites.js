// src/components/RecentSites.js
import React from 'react';
import {
  Card, CardContent, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, Button
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function createData(name, owner, company, email) {
  return { name, owner, company, email };
}

const rows = [
  createData('GIDC', 'Owner1', 'Company1', 'owner1@company1.com'),
  createData('GSFC', 'Owner2', 'Company2', 'owner2@company2.com'),
];

function RecentSites() {
  const theme = useTheme(); // Access the theme

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Recent Sites
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.palette.primary.main }}>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Site Name</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Type Of Owner</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Owner Name</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Company</TableCell>
                <TableCell sx={{ color: theme.palette.primary.contrastText }}>Agent Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{
                    backgroundColor: index % 2 === 0 ? theme.palette.action.hover : theme.palette.background.paper,
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Create Site
        </Button>
      </CardContent>
    </Card>
  );
}

export default RecentSites;
