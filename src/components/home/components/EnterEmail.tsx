import { ChevronRight } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function EnterEmail(): JSX.Element {
    return (
        <>
            <img src="src/assets/EnterEmail.jpg" alt="Enter email background image." style={{ position: 'absolute', height: '100%', width: '100%', opacity: '0.6', filter: 'blur(1px)'}} />
            <Card sx={{position: 'relative', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', color: '#fff'}}>
                <CardHeader 
                    title={
                        <Typography variant="h3" sx={{fontWeight: 'bolder', marginTop: 10}}>
                            Unlimited movies, TV shows and more
                        </Typography>
                    }
                    subheader={
                    <Typography variant="h5" color="#fff" sx={{marginTop: 1.5}}>
                        Watch anywhere. Cancel anytime.
                    </Typography>
                } />
                <CardContent>
                    <Typography variant="h6">
                        Ready to watch? Enter your email to create or restart your membership.
                    </Typography>
                    <div style={{marginTop: 30}}>
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
                </CardContent>
            </Card>
        </>
    );
}

export default EnterEmail;