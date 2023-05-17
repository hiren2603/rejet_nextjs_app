import { SvgIconProps } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import CallIcon from "@mui/icons-material/Call";
import ProductSvg from "../Sidebar/ProductSvg";
import EWestSvg from "../Sidebar/EWestSvg";

export type INNER_COMPONENT_TYPE = {
  key: string;
  id: number;
}[];

export type MULTI_COMPONENT_TYPE = {
  key: string;
  id: number;
  componentKey: string;
  nestedcomponent: boolean;
  innercomponent: INNER_COMPONENT_TYPE;
  icon: any;
}[];

export type SIDE_BAR_ARRAY_TYPE = {
  key: string;
  // icon : (props: SvgIconProps) => JSX.Element;
  icon: any;
  id: number;
  multicomponent: boolean;
  multicomponents: MULTI_COMPONENT_TYPE;
}[];

export const SIDE_BAR_ARRAY: SIDE_BAR_ARRAY_TYPE = [
  {
    key: "Home",
    icon: <HomeIcon />,
    id: 1,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "About",
    icon: <AutoStoriesIcon />,
    id: 2,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "Products",
    icon: <ProductSvg />,
    id: 3,
    multicomponent: true,
    multicomponents: [
      {
        key: "Inkjet",
        id: 7,
        nestedcomponent: true,
        componentKey: "inkjet",
        icon: <InvertColorsIcon />,
        innercomponent: [
          { key: "RE200+", id: 13 },
          { key: "RE225", id: 14 },
          { key: "RE224", id: 15 },
        ],
      },
      {
        key: "Laser",
        id: 8,
        nestedcomponent: true,
        componentKey: "laser",
        icon: <InvertColorsIcon />,
        innercomponent: [
          { key: "CO2 Laser", id: 9 },
          { key: "Fiber Laser", id: 10 },
          { key: "UV Laser", id: 11 },
          { key: "Desktop Laser", id: 12 },
        ],
      },
      {
        key: "Thermal",
        id: 13,
        nestedcomponent: true,
        componentKey: "thermal",
        icon: <InvertColorsIcon />,
        innercomponent: [
          { key: "TP 01", id: 16 },
          { key: "TP 01.1", id: 17 },
          { key: "TP Handy", id: 18 },
        ],
      },
    ],
  },
  {
    key: "Applications",
    icon: <AppRegistrationIcon />,
    id: 4,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "E-west Management",
    icon: <EWestSvg />,
    id: 5,
    multicomponent: false,
    multicomponents: [],
  },
  {
    key: "Contact",
    icon: <CallIcon />,
    id: 6,
    multicomponent: false,
    multicomponents: [],
  },
];
