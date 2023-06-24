import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import LanguageOption from "./LanguageOption";

function Header(): JSX.Element {
    return (
        <AppBar position='fixed' sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', }}>
            <Toolbar>
                <img 
                    src="src/assets/netflix logo.png" 
                    alt="Netflix logo."
                    style={{ 
                        paddingTop: 15,
                        paddingBottom: 15,
                        height: 40, 
                        marginLeft: '120px' }}
                />
                <LanguageOption marginLeft={80} />
                <Link to='/login'>
                    <Button
                        variant="contained"
                        sx={{ marginLeft: 4, backgroundColor: '#e50914', textTransform: 'none', fontWeight: 'bold', ":hover": {backgroundColor: '#bf0811'}, }}
                    >
                        Sign in
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;