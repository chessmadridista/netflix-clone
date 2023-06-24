import { Typography, TextField, Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface EmailBoxProps {
    marginTop?: number;
}

function EmailBox({ marginTop = 0 }: EmailBoxProps): JSX.Element {
    return (
        <>
            <Typography variant="h6" sx={{marginTop: marginTop}}>
                Ready to watch? Enter your email to create or restart your membership.
            </Typography>
            <div style={{marginTop: 15}}>
                <TextField 
                    label='Email address' 
                    InputLabelProps={{
                        style: { color: '#aaa' }
                    }}
                    sx={{background: 'rgba(0, 0, 0, 0.7)', border: '1px solid #777', borderRadius: 2, width: '400px'}} />
                <Link to='/signup'>
                    <Button 
                        variant="contained" 
                        sx={{
                            backgroundColor: '#e50914', 
                            ":hover": {backgroundColor: '#bf0811'},
                            height: 55,
                            width: 180,
                            marginLeft: 1,
                            fontWeight: 'bold',
                            fontSize: 'large',
                            textTransform: 'none'
                        }}
                    >
                        Get Started<ChevronRight />
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default EmailBox;