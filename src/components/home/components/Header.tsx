import { ArrowDropDown, Language } from "@mui/icons-material";
import { AppBar, MenuItem, Select, Toolbar, SelectChangeEvent, InputAdornment, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
    const [language, setLanguage] = useState<string>('English');

    function changeLanguage(event: SelectChangeEvent<string>) {
        setLanguage(event.target.value);
    }

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
                <Select
                    startAdornment={<InputAdornment position='start' sx={{ color: '#fff' }}><Language /></InputAdornment>}
                    endAdornment={<InputAdornment position='end' sx={{ color: '#fff' }}><ArrowDropDown /></InputAdornment>}
                    id='language'
                    value={language}
                    onChange={changeLanguage}
                    sx={{ height: 40, marginLeft: 80, color: '#fff', border: '1px solid #555' }}
                >
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='Hindi'>Hindi</MenuItem>
                </Select>
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