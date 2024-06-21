// src/components/Dashboard.js
import React, { useState } from 'react';
import {
  AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Box, Divider
} from '@mui/material';
import {
  Menu as MenuIcon, Dashboard as DashboardIcon, Business as BusinessIcon,
  HomeWork as HomeWorkIcon, Add as AddIcon, Description as DescriptionIcon
} from '@mui/icons-material';
import { styled, useTheme } from '@mui/system';
import SiteReport from './SiteReport';
import QuoteReport from './QuoteReport';
import RecentSites from './RecentSites';
import AddCompany from './AddCompany';
import AddSite from './AddSite';
import GenerateQuote from './GenerateQuote';
import CompanyList from './CompanyList';
import SiteList from './SiteList';
import CompanyDashboard from './CompanyDashboard';

const drawerWidth = 240;

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    width: drawerWidth,
  },
}));

const CustomListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedCompany(null); // Reset selected company when navigating through the menu
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={() => handleMenuClick('dashboard')}>
          <CustomListItemIcon><DashboardIcon /></CustomListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('company')}>
          <CustomListItemIcon><BusinessIcon /></CustomListItemIcon>
          <ListItemText primary="Company" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('site')}>
          <CustomListItemIcon><HomeWorkIcon /></CustomListItemIcon>
          <ListItemText primary="Site" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('addCompany')}>
          <CustomListItemIcon><AddIcon /></CustomListItemIcon>
          <ListItemText primary="Add Company" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('addSite')}>
          <CustomListItemIcon><HomeWorkIcon /></CustomListItemIcon>
          <ListItemText primary="Add Site" />
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('generateQuote')}>
          <CustomListItemIcon><DescriptionIcon /></CustomListItemIcon>
          <ListItemText primary="Generate Quote" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: theme.palette.primary.dark }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            POWER CRM
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <CustomDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </CustomDrawer>
        <CustomDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </CustomDrawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {selectedCompany ? (
          <CompanyDashboard companyId={selectedCompany.id} />
        ) : (
          <>
            {selectedMenu === 'dashboard' && (
              <>
                <Typography variant="h4" gutterBottom>Dashboard</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <SiteReport />
                  <QuoteReport />
                </Box>
                <RecentSites />
              </>
            )}
            {selectedMenu === 'company' && <CompanyList onCompanyClick={handleCompanyClick} />}
            {selectedMenu === 'site' && <SiteList />}
            {selectedMenu === 'addCompany' && <AddCompany />}
            {selectedMenu === 'addSite' && <AddSite />}
            {selectedMenu === 'generateQuote' && <GenerateQuote />}
          </>
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
