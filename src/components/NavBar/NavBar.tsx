import { AppBar, Box, MenuItem } from "@mui/material";
import CalculateIcon from '@mui/icons-material/Calculate';
import * as S from "./style"

export const NavBar:React.FC = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
                <S.StyledDesktopToolbar variant="regular">
                    <MenuItem>
                        <S.StyledNavLink>Convertor de Taxas</S.StyledNavLink>
                    </MenuItem>
                    <MenuItem>
                        <S.StyledNavLink>
                            <CalculateIcon fontSize="large" color="secondary" />
                        </S.StyledNavLink>
                    </MenuItem>
                
                </S.StyledDesktopToolbar>
            </AppBar>
        </Box>
        
    );
}