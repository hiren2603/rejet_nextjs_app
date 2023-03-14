import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from '@mui/icons-material/Call';
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Image from "next/image";
import Logo from "../../public/assets/logo.png"


function Topbar() {
  return (
    <AppBar position="static" sx={{background: 'transparent', height: '80px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
         <Image src={Logo} alt="logo" height={60} width={180}/>
          <Box sx={{ flexGrow: 3, display: "flex", justifyContent: 'flex-end' }}>
            <Button variant="outlined" sx={{mr: 2}} startIcon={<MailIcon />}>
              Send Mail
            </Button>
            <Button variant="outlined" startIcon={<CallIcon />}>
              Call Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar