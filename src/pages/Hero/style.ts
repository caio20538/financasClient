import { styled } from "@mui/material/styles";
import { Select as MuiSelect } from "@mui/material";

export const hero = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const formConverter = styled("form")(({ theme }) => ({
  width: "100%",
  maxWidth: "500px",
  border: `1px solid ${theme.palette.primary.contrastText}55`,
  backgroundColor: `${theme.palette.primary.main}15`,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1rem",
  padding: "2rem",
  boxShadow: `0 4px 12px ${theme.palette.primary.contrastText}22`,
  transition: "all 0.3s ease",

  "&:hover": {
    boxShadow: `0 6px 16px ${theme.palette.primary.contrastText}33`,
  },

  "& button": {
    alignSelf: "center"
  }

}));

export const inputConverter = styled("input")(({ theme }) => ({
  width: "100%",
  padding: "0.5rem",
  borderRadius: "8px",
  border: `1px solid ${theme.palette.primary.contrastText}55`,
  backgroundColor: `${theme.palette.background.paper}`,
  color: theme.palette.text.primary,
  fontSize: "1rem",
}));

export const labelConverter = styled("label")(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.text.primary,
}));

// Select com o mesmo visual dos inputs
export const selectConverter = styled(MuiSelect)(({ theme }) => ({
  width: "100%",
  borderRadius: "8px",
  backgroundColor: theme.palette.background.paper,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.primary.contrastText}55`,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
}));
