import { Stack, Box } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Footer from "../Footer";

const Layout = () => {
  const [drawerWidth] = useState(250);
  const [open, setOpen] = React.useState(false);
  const [openSubcategory, setOpenSubcategory] = React.useState({
    inkjet: false,
    laser: false,
    thermal: false,
  });
  const [openCategory, setOpenCategory] = React.useState(false);
  const { inkjet, laser, thermal } = openSubcategory;

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleSubCategory = (componentKey: string) => {
    if (!open) handleDrawerOpen();
    if (componentKey === "inkjet") {
      setOpenSubcategory({
        inkjet: !inkjet,
        laser: false,
        thermal: false,
      });
    } else if (componentKey === "laser") {
      setOpenSubcategory({
        inkjet: false,
        laser: !laser,
        thermal: false,
      });
    } else if (componentKey === "thermal") {
      setOpenSubcategory({
        inkjet: false,
        laser: false,
        thermal: !thermal,
      });
    }
  };

  const handleCategory = () => {
    if (!open) handleDrawerOpen();
    setOpenCategory(!openCategory);
  };

  const closeSideBar = (e: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(false);
    setOpenCategory(false);
    setOpenSubcategory({
      inkjet: false,
      laser: false,
      thermal: false,
    });
  };

  return (
    <Box
      sx={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <Stack direction={"row"}>
        <Topbar open={open} drawerWidth={drawerWidth} />
        <Sidebar
          open={open}
          drawerWidth={drawerWidth}
          setOpen={setOpen}
          openSubcategory={openSubcategory}
          setOpenSubcategory={setOpenSubcategory}
          openCategory={openCategory}
          setOpenCategory={setOpenCategory}
          handleCategory={handleCategory}
          handleDrawerOpen={handleDrawerOpen}
          handleSubCategory={handleSubCategory}
          closeSideBar={closeSideBar}
        />
      </Stack>
      <Footer drawerWidth={drawerWidth} open={open} />
    </Box>
  );
};

export default Layout;
