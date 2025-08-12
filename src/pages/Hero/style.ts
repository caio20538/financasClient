import styled from "@emotion/styled";

export const hero = styled("div")(() => ({
  width: "100%",
  height: "100vh",           // ocupa a altura total da tela
  display: "flex",           // ativa flexbox
  justifyContent: "center",  // centraliza horizontalmente
  alignItems: "center",      // centraliza verticalmente
}));

export const formConverter = styled("form")(() =>({
    width: "100%",
    height: "90px",
    border: "1px solid grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",

//     [theme.breakpoints.down("md")]: {
//     flexDirection: "column",
//     height: "auto",       // deixar altura automática para comportar inputs em coluna
//     padding: "1rem",
//   }
}));

export const inputConverter = styled("input")(() => ({
}));

export const labelConverter = styled("label")(() => ({

}));