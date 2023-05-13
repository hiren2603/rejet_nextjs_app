import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import CustomButton from "../CustomButton";

type TopbarPropsType = {
  open: any;
  drawerWidth: number;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

// const drawerWidth = 250;
function Topbar(props: TopbarPropsType) {
  let { open, drawerWidth } = props;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== open,
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer,
    width: `calc(100% - (${theme.spacing(7)} + 1px))`,
    height: "64px",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    // <AppBar position="static" sx={{ background: 'primary', height: '60px', marginLeft: "4%", width: "96%" }}>
    <AppBar position="fixed" open={open}>
      <Container sx={{ maxWidth: "1900px!important" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Image src={Logo} alt="logo" height={50} />
          <Box
            sx={{ flexGrow: 3, display: "flex", justifyContent: "flex-end" }}
          >
            <CustomButton
              variant={"outlined"}
              buttonText="Send Mail"
              color={"error"}
              buttonIcon={<MailIcon />}
              customClass={{ marginRight: 2 }}
            />
            <CustomButton
              variant={"contained"}
              buttonText="Call Now"
              color={"error"}
              buttonIcon={<CallIcon />}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    // </AppBar>
  );
}

export default Topbar;
