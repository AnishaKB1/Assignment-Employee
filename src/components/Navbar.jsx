import { AppBar, Box, Button, Toolbar, Typography, withTheme } from '@mui/material';
import React from 'react';
import '../components/Employee.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static">
      <Toolbar className='app' >
        <Typography id='react' variant="h5" component="div" sx={{ flexGrow: 1 }}>
        EmployeeApp
        </Typography>
        <Button className='btn' size='large'>
          <Link to = {'/'} style={{color:'white',textDecoration:'none'}}> Home
          </Link> 
         </Button>
        <Button className='btn' color="inherit" size='large'>
        <Link to = {'/EmployeeForm'} style={{color:'white',textDecoration:'none'}}> Employee Form
          </Link> 
         </Button>
        
      </Toolbar>
    </AppBar>
  </Box>
    </div>
  );
}

export default Navbar;
