import * as React from 'react';
import { styled, useTheme, Theme, CSSObject, makeStyles, createStyles } from '@mui/material/styles';
import { Box, List, CssBaseline, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Collapse, Paper, ClickAwayListener } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Stack } from '@mui/system';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { SIDE_BAR_ARRAY } from '../Constants';

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    border: "1px solid black",
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
  const [openSubcategory, setOpenSubcategory] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);

  const handleDrawerOpen = () => { setOpen(!open); }
  const handleSubCategory = () => { setOpenSubcategory(!openSubcategory) }
  const handleCategory = () => { setOpenCategory(!openCategory) }
  const closeSideBar = (e: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(false);
    setOpenCategory(false);
    setOpenSubcategory(false);
  }


  return (
    <>
      <Box sx={{ display: 'flex' }} onKeyDown={closeSideBar}>
        <CssBaseline />
        <ClickAwayListener onClickAway={closeSideBar}>
          <Drawer variant="permanent" open={open} PaperProps={{ elevation: 11 }}>
            <DrawerHeader>
              {
                open ?
                  <Stack>
                    <IconButton onClick={handleDrawerOpen}>
                      <KeyboardDoubleArrowLeftIcon sx={{ color: 'white' }} />
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
            <Box onKeyDown={closeSideBar}>
              <List>
                {
                  SIDE_BAR_ARRAY?.map((item) => {
                    if (item.multicomponent) {
                      {
                        return (
                          <>
                            <List>
                              <ListItemButton
                                sx={{
                                  minHeight: 48,
                                  justifyContent: "center",
                                  px: open ? 2.5 : 5.3,
                                  '&:hover': { background: 'linear-gradient(145deg, #E31E25, #E31E25);', boxShadow: 'inset 0px 0px 0px black, inset 0px 0px 9px black', transition: '0.2s ease-in-out', transform: 'scale(1.1)' }
                                }}
                                onClick={handleCategory}
                              >
                                <ListItemIcon
                                  sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                  }}
                                >{item.icon}</ListItemIcon>
                                <ListItemText sx={{ opacity: open ? 1 : 0 }}>{item.key}</ListItemText>
                                {openCategory ? <ExpandLess sx={{ opacity: open ? 1 : 0 }} /> : <ExpandMore sx={{ opacity: open ? 1 : 0 }} />}
                              </ListItemButton>
                              <Collapse in={openCategory} timeout="auto" unmountOnExit>
                                {
                                  item.multicomponents?.map((innerItem) => {
                                    if (innerItem.nestedcomponent) {
                                      return (
                                        <>
                                          <ListItemButton
                                            sx={{
                                              ml: 2,
                                              '&:hover': { background: 'linear-gradient(145deg, #E31E25, #E31E25);', boxShadow: 'inset 0px 0px 0px black, inset 0px 0px 9px black', transition: '0.2s ease-in-out', transform: 'scale(1.1)' }
                                            }}
                                            key={innerItem.id}
                                            onClick={handleSubCategory}
                                          >
                                            <ListItemText>{innerItem.key}</ListItemText>
                                            {openSubcategory ? <ExpandLess /> : <ExpandMore />}
                                          </ListItemButton>
                                          <Collapse in={openSubcategory}>
                                            {
                                              innerItem.innercomponent?.map((innnerComponent) => {
                                                return (
                                                  <>
                                                    <List disablePadding key={innnerComponent.id} sx={{ px: 2.5 }}>
                                                      <ListItem>
                                                        <ListItemButton
                                                          sx={{
                                                            '&:hover': { background: 'linear-gradient(145deg, #E31E25, #E31E25);', boxShadow: 'inset 0px 0px 0px black, inset 0px 0px 9px black', transition: '0.2s ease-in-out', transform: 'scale(1.1)' }
                                                          }}
                                                        >
                                                          <ListItemText>
                                                            {innnerComponent.key}
                                                          </ListItemText>
                                                        </ListItemButton>
                                                      </ListItem>
                                                    </List>
                                                  </>
                                                )
                                              })
                                            }
                                          </Collapse>
                                        </>
                                      )
                                    } else {
                                      return (
                                        <>
                                          <List disablePadding key={innerItem.id}>
                                            <ListItem>
                                              <ListItemButton
                                                sx={{
                                                  '&:hover': { background: 'linear-gradient(145deg, #E31E25, #E31E25);', boxShadow: 'inset 0px 0px 0px black, inset 0px 0px 9px black', transition: '0.2s ease-in-out', transform: 'scale(1.1)' }
                                                }}
                                                onClick={closeSideBar}
                                              >
                                                <ListItemText>
                                                  {innerItem.key}
                                                </ListItemText>
                                              </ListItemButton>
                                            </ListItem>
                                          </List>
                                        </>
                                      )
                                    }
                                  })
                                }
                              </Collapse>
                            </List>
                          </>
                        )
                      }
                    } else {
                      return (
                        <>
                          <ListItem
                            key={item.id}
                            sx={{ display: "block" }}
                            disablePadding
                          >
                            <ListItemButton
                              sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                '&:hover': { background: 'linear-gradient(145deg, #E31E25, #E31E25);', boxShadow: 'inset 0px 0px 0px black, inset 0px 0px 9px black', transition: '0.2s ease-in-out', transform: 'scale(1.1)' }
                              }}
                              onClick={closeSideBar}
                            >
                              <ListItemIcon
                                sx={{
                                  minWidth: 0,
                                  mr: open ? 3 : 'auto',
                                  justifyContent: 'center',
                                  color: "white"
                                }}
                              >
                                {item.icon}
                              </ListItemIcon>
                              <ListItemText sx={{ opacity: open ? 1 : 0 }}>{item.key}</ListItemText>
                            </ListItemButton>
                          </ListItem>
                        </>
                      )
                    }
                  })
                }
              </List>
            </Box>
          </Drawer>
        </ClickAwayListener>
      </Box>
    </>
  );
}