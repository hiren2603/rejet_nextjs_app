import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  Box,
  CssBaseline,
  Stack,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import FooterLogo from "../../public/assets/radhe.06892ed1da86f069ea23.png";
import {
  headerDivider,
  headerTitle,
  quickLinkStyle,
  resQuickLinkStyle,
} from "./styles";

type FooterPropType = {
  drawerWidth: number;
  open: boolean;
};

const Footer = (props: FooterPropType) => {
  let { drawerWidth, open } = props;
  const theme = useTheme();
  const smallSize = useMediaQuery(theme.breakpoints.down("sm"));

  const FooterContainer = styled("div")(({ theme }) => ({
    width: "100%",
    marginLeft: "4.7%",
    padding: "20px 0px",
    gap: 1,
    backgroundColor: "#000000",
    position: "fixed",
    bottom: "0px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    }),
    [theme.breakpoints.down("sm")]: { justifyContent: "space-between", gap: 5 },
  }));

  return (
    <>
      <FooterContainer>
        <Stack
          direction={smallSize ? "column" : "row"}
          sx={
            smallSize
              ? { alignItems: "center", justifyContent: "center", gap: 2 }
              : { alignItems: "flex-start", justifyContent: "space-evenly" }
          }
        >
          <Stack
            sx={
              smallSize
                ? {
                    alignItems: "center",
                  }
                : { gap: 3 }
            }
          >
            <Typography sx={headerTitle}>
              Quick Links
              <Divider
                sx={{
                  backgroundColor: "#c9c9c9",
                  height: "2px",
                  marginTop: "5px",
                  margin: "1rem 0",
                  ...(smallSize ? { width: "100%" } : { width: "80%" }),
                }}
              />
            </Typography>
            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Applications</Typography>
              <Typography>E-Waste Management</Typography>
              <Typography>Contact</Typography>
            </Box>
          </Stack>

          <Stack sx={smallSize ? { alignItems: "center" } : { gap: 3 }}>
            <Typography sx={headerTitle}>
              Products
              <Divider sx={headerDivider} />
            </Typography>
            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Inkjet</Typography>
              <Typography>Co2</Typography>
              <Typography>Fiber</Typography>
              <Typography>Desktop</Typography>
              <Typography>UV</Typography>
              <Typography>TIJ</Typography>
            </Box>
          </Stack>

          <Stack sx={smallSize ? { alignItems: "center" } : { gap: 3 }}>
            <Typography sx={headerTitle}>
              Contanct Us
              <Divider
                sx={{
                  backgroundColor: "#c9c9c9",
                  height: "2px",
                  marginTop: "5px",
                  margin: "1rem 0",
                  ...(smallSize ? { width: "100%" } : { width: "70%" }),
                }}
              />
            </Typography>

            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Call : 99099 81123</Typography>
              <Typography>E-mail : info@rejettech.com</Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <LocationOnOutlinedIcon />
                Find Us On Map
              </Typography>
            </Box>
          </Stack>

          <Stack sx={smallSize ? { alignItems: "center" } : { gap: 3 }}>
            <Typography sx={headerTitle}>
              Location
              <Divider
                sx={{
                  backgroundColor: "#c9c9c9",
                  height: "2px",
                  marginTop: "5px",
                  margin: "1rem 0",
                  ...(smallSize ? { width: "100%" } : { width: "40%" }),
                }}
              />
            </Typography>
            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <Image src={FooterLogo} alt="logo" height={35} />
              <Typography>Plot No. 36, Suvery No. 277/,</Typography>
              <Typography>Opp. Kaneria Oil Industries,</Typography>
              <Typography>Rani Industrial Area,</Typography>
              <Typography>Shapar (Veraval) 360024-Rajkot</Typography>
              <Typography>(Gujrat), India</Typography>
            </Box>
          </Stack>
        </Stack>
        <Divider sx={{ backgroundColor: "#c9c9c9" }} />
        <Stack sx={{ alignItems: "center", color: "#c0c0c0" }}>
          <Typography>Copyright © 2021 Radhe Enterprise</Typography>
          <Typography>Developed By Gravity Infotech</Typography>
        </Stack>
      </FooterContainer>
    </>
  );
};

export default Footer;
