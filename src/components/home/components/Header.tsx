import { AppBar, Toolbar, Typography } from "@mui/material";

function Header(): JSX.Element {
    return (
        <AppBar sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <img 
                    src="src/assets/netflix logo.png" 
                    alt="Netflix logo."
                    style={{ width: 200, height: 80, objectFit: 'cover', marginLeft: '120px' }}
                />
            </Toolbar>
        </AppBar>
    );
}

export default Header;