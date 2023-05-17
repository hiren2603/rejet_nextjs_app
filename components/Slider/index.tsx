import React, { useState, useEffect, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { slides, SLIDES_TYPE } from "../helpers";
import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  sliderWrapper,
  leftIconContainer,
  imageContainer,
  imageContainerHidden,
  imgTitle,
  imgInfo,
  rightIconContainer,
} from "./styles";
import classes from "./Slider.module.css";
import inkjet from "../slides/inkjet.png";
import laser from "../../public/assets/slides/fiber.png";
import tij from "../../public/assets/slides/thermal.png";
import ibg from "../../public/assets/slides/inkjet_w.png";
import lbg from "../../public/assets/slides/laser_w.png";
import tbg from "../../public/assets/slides/thermal_w.png";
import Image from "next/image";

const delay = 2500;
const Slider = () => {
  const [slideRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        const clearNextTimeout = () => {
          clearTimeout(timeout);
        };

        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        };

        slider.on("create", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <>
      <div ref={slideRef} className={`keen-slider ${classes.slider}`}>
        {slides.map((slide, idx: number) => (
          <>
            <div
              key={slide.id}
              className={`keen-slider__slide ${classes.slide__container}`}
            >
              <div>{slide.bg}</div>

              <h1 className={classes.img__title}>
                {slide.title}
                {""}
                <span className={classes.img__info}>{slide.info}</span>
              </h1>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Slider;
