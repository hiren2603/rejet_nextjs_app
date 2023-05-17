import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  styled,
  Box,
  useMediaQuery,
  useTheme,
  Container,
  Stack,
  Typography,
  makeStyles,
} from "@mui/material";
import { Cards } from "../helpers/CardData";
import cardClasses from "./Card.module.css";
import {
  cardRow,
  cardContainer,
  cardImageContainer,
  cardBtnContainer,
  resCardRow,
  resCardContainer,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  const theme = useTheme();
  const mdSize = useMediaQuery(theme.breakpoints.only("md"));
  const smSize = useMediaQuery(theme.breakpoints.only("sm"));
  const screenBetween = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const mediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const CardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "center",
    margin: "4rem 0",
  }));
  return (
    <>
      <CardContainer>
        <Stack sx={screenBetween ? resCardRow : cardRow}>
          {Cards?.map((cardDetails, index) => {
            return (
              <>
                <Box
                  key={cardDetails.id}
                  sx={screenBetween ? resCardContainer : cardContainer}
                >
                  <Box sx={cardImageContainer}>
                    <Image
                      src={cardDetails.image}
                      width={200}
                      height={500}
                      alt={cardDetails.button}
                      className={cardClasses.cardImage}
                    />
                    <Link href={cardDetails.link} className={cardClasses.show}>
                      View More
                    </Link>
                  </Box>

                  <Box sx={cardBtnContainer}>
                    <Link
                      href={cardDetails.link}
                      className={cardClasses.cardButton}
                    >
                      {cardDetails.button}
                    </Link>
                  </Box>
                </Box>
              </>
            );
          })}
        </Stack>
      </CardContainer>
    </>
  );
};

export default ProductCard;
