import styled from "@emotion/styled";
import { Toolbar } from "@mui/material";

export const StyledNavLink = styled("div")(() => ({
    textDecoration: "none",
    color: "inherit"
}));

export const StyledDesktopToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between",
}));