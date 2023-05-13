import { Stack } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const Layout = () => {
  const [drawerWidth] = useState(250);
  const [open, setOpen] = React.useState(false);
  const [openSubcategory, setOpenSubcategory] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const handleSubCategory = () => {
    if (!open) handleDrawerOpen();
    setOpenSubcategory(!openSubcategory);
  };
  const handleCategory = () => {
    if (!open) handleDrawerOpen();
    setOpenCategory(!openCategory);
  };
  const closeSideBar = (e: React.KeyboardEvent | React.MouseEvent) => {
    setOpen(false);
    setOpenCategory(false);
    setOpenSubcategory(false);
  };

  return (
    <>
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
    </>
  );
};

export default Layout;
