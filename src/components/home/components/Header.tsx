import { Language } from "@mui/icons-material";
import { AppBar, MenuItem, Select, Toolbar, SelectChangeEvent, InputAdornment } from "@mui/material";
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
                    startAdornment={<InputAdornment position='start'><Language /></InputAdornment>}
                    id='language'
                    value={language}
                    onChange={changeLanguage}
                    sx={{ height: 40, marginLeft: 80 }}
                >
                    <MenuItem value='English'>English</MenuItem>
                    <MenuItem value='Hindi'>Hindi</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
}

export default Header;