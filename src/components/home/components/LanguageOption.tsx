import { useState } from "react";
import { Select, MenuItem, SelectChangeEvent, InputAdornment } from "@mui/material";
import { Language, ArrowDropDown } from "@mui/icons-material";

interface LanguageOptionProps {
    marginLeft?: number;
    marginTop?: number;
}

function LanguageOption({marginLeft, marginTop=0}: LanguageOptionProps): JSX.Element {
    const [language, setLanguage] = useState<string>('English');

    function changeLanguage(event: SelectChangeEvent<string>) {
        setLanguage(event.target.value);
    }

    return (
        <Select
            startAdornment={<InputAdornment position='start' sx={{ color: '#fff' }}><Language /></InputAdornment>}
            endAdornment={<InputAdornment position='end' sx={{ color: '#fff' }}><ArrowDropDown /></InputAdornment>}
            id='language'
            value={language}
            onChange={changeLanguage}
            sx={{ height: 40, marginLeft: marginLeft, marginTop: marginTop, color: '#fff', border: '1px solid #555' }}
        >
            <MenuItem value='English'>English</MenuItem>
            <MenuItem value='Hindi'>Hindi</MenuItem>
        </Select>
    );
}

export default LanguageOption;