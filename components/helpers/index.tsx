import inkjet from "../../public/assets/slides/inkjet.png";
import laser from "../../public/assets/slides/fiber.png";
import tij from "../../public/assets/slides/thermal.png";
import Ibg from "../../public/assets/slides/inkjet_w.png";
import Lbg from "../../public/assets/slides/laser_w.png";
import Tbg from "../../public/assets/slides/thermal_w.png";
import React, { ReactNode } from "react";
import Image from "next/image";
import classes from "../Slider/Slider.module.css";

export type SLIDES_TYPE = {
  id: number;
  image: any;
  title: string;
  info: string;
  bg: ReactNode;
}[];

export const slides: SLIDES_TYPE = [
  {
    id: 0,
    image: inkjet,
    title: "Inkjet",
    info: "Printers",
    bg: <Image src={Ibg} alt="inkjet" width={1400} height={550} />,
  },
  {
    id: 1,
    image: laser,
    title: "Laser",
    info: "Machine",
    bg: <Image src={Lbg} alt="laser" width={1400} height={550} />,
  },
  {
    id: 2,
    image: tij,
    title: "Thermal",
    info: "Printers",
    bg: <Image src={Tbg} alt="tij" width={1400} height={550} />,
  },
];
