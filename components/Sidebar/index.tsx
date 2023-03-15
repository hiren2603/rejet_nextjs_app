import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ProductSvg from './ProductSvg';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import EWestSvg from './EWestSvg';
import CallIcon from '@mui/icons-material/Call';
import KeyboardDoubleArrowRightIcon  from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  backgroundColor: `#E31E25`,
  color: 'white',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  top: '60px',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: `#E31E25`,
  color: 'white',
  top: '60px',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function MiniDrawer() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {
            open ?
              <Stack>
                <IconButton onClick={handleDrawerClose}>
                  <KeyboardDoubleArrowLeftIcon sx={{ color : "white"}} />
                </IconButton>
              </Stack>
              :
              <Stack>
                <IconButton onClick={handleDrawerOpen}>
                  <KeyboardDoubleArrowRightIcon sx={{ color: 'white' }} />
                </IconButton>
              </Stack>
          }
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'About', 'Products', 'Applications', 'E-west Management', 'Contact Us'].map((user, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': { background: 'linear-gradient(145deg, #E31E25, #E31E25);', boxShadow: 'inset 0px 0px 0px black, inset 0px 0px 9px black', transition: '0.2s ease-in-out', transform: 'scale(1.1)' }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {user === 'Home' && <HomeIcon sx={{ color: 'white' }} />}
                  {user === 'About' && <AutoStoriesIcon sx={{ color: 'white' }} />}
                  {user === 'Products' && <ProductSvg />}
                  {user === 'Applications' && <AppRegistrationIcon sx={{ color: 'white' }} />}
                  {user === 'E-west Management' && <EWestSvg />}
                  {user === 'Contact Us' && <CallIcon sx={{ color: 'white' }} />}

                </ListItemIcon>
                <ListItemText primary={user} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
              <Divider />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}