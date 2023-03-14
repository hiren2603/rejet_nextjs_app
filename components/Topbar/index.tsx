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
import CustomButton from "../CustomButton";
import theme from "../Theme/Theme";


function Topbar() {
  return (
    <AppBar position="static" sx={{ background: 'primary', height: '60px'}}>
      <Container sx={{maxWidth:'1900px!important'}} >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Image src={Logo} alt="logo" height={50} />
          <Box sx={{ flexGrow: 3, display: "flex", justifyContent: 'flex-end' }}>
            <CustomButton variant={'outlined'} buttonText="Send Mail" color={"error"} buttonIcon={<MailIcon />} customClass={{ marginRight: 2 }} />
            <CustomButton variant={'contained'} buttonText="Call Now" color={"error"} buttonIcon={<CallIcon />} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Topbar