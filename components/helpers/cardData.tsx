import inkjet from "../slides/inkjet.png";
import fiber from "../slides/fiber.png";
import tij from "../slides/thermal.png";
import Image from "next/image";

type cardDataType = {
  id: number;
  image: any;
  button: string;
  link: string;
  text: string;
}[];

export const Cards: cardDataType = [
  {
    id: 11,
    image: inkjet,
    button: "Inkjet",
    link: "/products/inkjet",
    text: "Know More",
  },
  {
    id: 12,
    image: fiber,
    button: "Laser",
    link: "/products/laser/fiber",
    text: "Know More",
  },
  {
    id: 13,
    image: tij,
    button: "Thermal",
    link: "/products/thermal",
    text: "Know More",
  },
];
