import { ArrowDropDown, Language } from "@mui/icons-material";
import { AppBar, MenuItem, Select, Toolbar, SelectChangeEvent, InputAdornment, Button } from "@mui/material";
import { useState } from "react";

function Header(): JSX.Element {
    const [language, setLanguage] = useState<string>('English');

    function changeLanguage(event: SelectChangeEvent<string>) {
        setLanguage(event.target.value);
    }

    return (
        <AppBar sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <img 
                    src="src/assets/netflix logo.png" 
                    alt="Netflix logo."
                    style={{ width: 200, height: 80, objectFit: 'cover', marginLeft: '120px' }}
                />
                <Select
                    startAdornment={<InputAdornment position='start' sx={{ color: '#fff' }}><Language /></InputAdornment>}
                    endAdornment={<InputAdornment position='end' sx={{ color: '#fff' }}><ArrowDropDown /></InputAdornment>}
                    id='language'
                    value={language}
                    onChange={changeLanguage}
                    sx={{ height: 40, marginLeft: 70, color: '#fff', border: '1px solid #555' }}
                >
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='Hindi'>Hindi</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    sx={{ marginLeft: 2, backgroundColor: '#e50914', textTransform: 'none', fontWeight: 'bold', ":hover": {backgroundColor: '#bf0811'}, }}
                >
                    Sign in
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;