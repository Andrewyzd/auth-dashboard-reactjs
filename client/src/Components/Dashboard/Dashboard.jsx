import React from 'react'
import { useState } from "react";
import Topbar from "../Global/Topbar";
import Sidebar from "../Global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { Outlet } from 'react-router-dom';
import MainContent from '../../Components/Scenes/Content'
import { styled, Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const StyledBox = styled(Box)({
  overflowY: 'auto',
  maxHeight: '300px', // adjust the height as needed
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px grey',
    borderRadius: '10px',
  },
  '&::-webkit-webkit-scrollbar-thumb': {
    background: 'darkgrey',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#b30000',
  },
});


const Dashboard = () => {
   const [theme, colorMode] = useMode();
   const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box 
          sx={{
            display: 'flex',
            Height: '100vh',
          }}>
            <Sidebar isSidebar={isSidebar} />
            <Box component="main" flexGrow={1}>
                <Topbar setIsSidebar={setIsSidebar} />         
                <Outlet/>
            </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>   
  )
}

export default Dashboard