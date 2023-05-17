export const cardRow = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
};

export const resCardRow = {
  padding: 0,
  flexDirection: "column",
  flexWrap: "wrap",
  height: "auto",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
};

export const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
};

export const cardContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  boxShadow: "2px 2px 20px 1px #b6b6b6",
  cursor: "pointer",
  height: "470px",
  width: "29%",
};

export const resCardContainer = {
  // .card__container{
  //     margin-bottom: 2rem;
  //     width:80%;
  //     height: 400px;
  // }
  marginBottom: "2rem",
  width: "80%",
  height: "400px",
};
export const cardImageContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundColor: "#ffe7e7",
    opacity: 0.5,
    transition: "all 0.5s ease",
  },
};

export const cardBtnContainer = {
  background: "#5b5b5b",
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "3px",
  "&:hover": {
    background: "#E31E25",
    transititon: "all 0.3s ease",
  },
};
