import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Box,
  ClickAwayListener,
  Collapse,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import { Stack } from "@mui/system";
import { SIDE_BAR_ARRAY } from "../Constants";
import { listButtonStyle, listIconStyle } from "./style";

type MiniDrawerPropsType = {
  open: any;
  openSubcategory: any;
  openCategory: any;
  setOpen: any;
  setOpenSubcategory: any;
  setOpenCategory: any;
  handleDrawerOpen: any;
  handleSubCategory: any;
  handleCategory: any;
  closeSideBar: any;
  drawerWidth: number;
};

export default function MiniDrawer(props: MiniDrawerPropsType) {
  const {
    open,
    openSubcategory,
    openCategory,
    handleCategory,
    handleDrawerOpen,
    handleSubCategory,
    closeSideBar,
    drawerWidth,
  } = props;

  const { inkjet, laser, thermal } = openCategory;

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    backgroundColor: `#E31E25`,
    color: "white",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    backgroundColor: `#E31E25`,
    color: "white",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    border: "1px solid black",
    transition: "all 1s ease-int-out",
    "&::scrollbar": {
      width: "5px",
    },
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <>
      <Box sx={{ display: "flex" }} onKeyDown={closeSideBar}>
        <CssBaseline />

        <ClickAwayListener onClickAway={closeSideBar}>
          <Drawer
            variant="permanent"
            open={open}
            PaperProps={{ elevation: 11 }}
          >
            <DrawerHeader>
              {open ? (
                <Stack>
                  <IconButton onClick={handleDrawerOpen}>
                    <KeyboardDoubleArrowLeftIcon sx={{ color: "white" }} />
                  </IconButton>
                </Stack>
              ) : (
                <Stack>
                  <IconButton onClick={handleDrawerOpen}>
                    <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
                  </IconButton>
                </Stack>
              )}
            </DrawerHeader>
            <Divider />
            <Box onKeyDown={closeSideBar}>
              <List>
                {SIDE_BAR_ARRAY?.map((item) => {
                  if (item.multicomponent) {
                    {
                      return (
                        <>
                          <List>
                            <ListItemButton
                              sx={{ ...listButtonStyle, px: open ? 2.5 : 5.3 }}
                              onClick={() => handleCategory(item.componentKey)}
                            >
                              <ListItemIcon
                                sx={{ ...listIconStyle, mr: open ? 3 : "auto" }}
                              >
                                {item.icon}
                              </ListItemIcon>

                              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                                {item.key}
                              </ListItemText>
                              {openCategory ? (
                                <ExpandLess sx={{ opacity: open ? 1 : 0 }} />
                              ) : (
                                <ExpandMore sx={{ opacity: open ? 1 : 0 }} />
                              )}
                            </ListItemButton>
                            <Collapse
                              in={openCategory}
                              timeout="auto"
                              unmountOnExit
                            >
                              {item.multicomponents?.map((innerItem) => {
                                if (innerItem.nestedcomponent) {
                                  return (
                                    <>
                                      <ListItemButton
                                        sx={{
                                          ml: 2,
                                          "&:hover": {
                                            background:
                                              "linear-gradient(145deg, #E31E25, #E31E25);",
                                            boxShadow:
                                              "inset 0px 0px 0px black, inset 0px 0px 9px black",
                                            transition: "0.2s ease-in-out",
                                            transform: "scale(1.1)",
                                          },
                                        }}
                                        key={innerItem.id}
                                        onClick={() =>
                                          handleSubCategory(
                                            innerItem.componentKey
                                          )
                                        }
                                      >
                                        <ListItemIcon
                                          sx={{
                                            ...listIconStyle,
                                            mr: open ? 3 : "auto",
                                          }}
                                        >
                                          {innerItem.icon}
                                        </ListItemIcon>
                                        <ListItemText>
                                          {innerItem.key}
                                        </ListItemText>
                                        {openSubcategory[
                                          innerItem.componentKey
                                        ] ? (
                                          <ExpandLess />
                                        ) : (
                                          <ExpandMore />
                                        )}
                                      </ListItemButton>
                                      <Collapse
                                        in={
                                          openSubcategory[
                                            innerItem.componentKey
                                          ]
                                        }
                                      >
                                        {innerItem.innercomponent?.map(
                                          (innnerComponent) => {
                                            return (
                                              <>
                                                <List
                                                  disablePadding
                                                  key={innnerComponent.id}
                                                  sx={{ px: 2.5 }}
                                                >
                                                  <ListItem>
                                                    <ListItemButton
                                                      sx={{
                                                        "&:hover": {
                                                          background:
                                                            "linear-gradient(145deg, #E31E25, #E31E25);",
                                                          boxShadow:
                                                            "inset 0px 0px 0px black, inset 0px 0px 9px black",
                                                          transition:
                                                            "0.2s ease-in-out",
                                                          transform:
                                                            "scale(1.1)",
                                                        },
                                                      }}
                                                    >
                                                      <ListItemText>
                                                        {innnerComponent.key}
                                                      </ListItemText>
                                                    </ListItemButton>
                                                  </ListItem>
                                                </List>
                                              </>
                                            );
                                          }
                                        )}
                                      </Collapse>
                                    </>
                                  );
                                } else {
                                  return (
                                    <>
                                      <List disablePadding key={innerItem.id}>
                                        <ListItem>
                                          <ListItemButton
                                            sx={{
                                              "&:hover": {
                                                background:
                                                  "linear-gradient(145deg, #E31E25, #E31E25);",
                                                boxShadow:
                                                  "inset 0px 0px 0px black, inset 0px 0px 9px black",
                                                transition: "0.2s ease-in-out",
                                                transform: "scale(1.1)",
                                              },
                                            }}
                                            onClick={closeSideBar}
                                          >
                                            <ListItemIcon
                                              sx={{
                                                ...listIconStyle,
                                                mr: open ? 3 : "auto",
                                              }}
                                            >
                                              {innerItem.icon}
                                            </ListItemIcon>
                                            <ListItemText>
                                              {innerItem.key}
                                            </ListItemText>
                                          </ListItemButton>
                                        </ListItem>
                                      </List>
                                    </>
                                  );
                                }
                              })}
                            </Collapse>
                          </List>
                        </>
                      );
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
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                              "&:hover": {
                                background:
                                  "linear-gradient(145deg, #E31E25, #E31E25);",
                                boxShadow:
                                  "inset 0px 0px 0px black, inset 0px 0px 9px black",
                                transition: "0.2s ease-in-out",
                                transform: "scale(1.1)",
                              },
                            }}
                            onClick={closeSideBar}
                          >
                            <ListItemIcon
                              sx={{ ...listIconStyle, mr: open ? 3 : "auto" }}
                            >
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                              {item.key}
                            </ListItemText>
                          </ListItemButton>
                        </ListItem>
                      </>
                    );
                  }
                })}
              </List>
            </Box>
          </Drawer>
        </ClickAwayListener>
      </Box>
    </>
  );
}
