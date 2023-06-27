import { Button, Card, CardActions, Checkbox, CardContent, CardHeader, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SigninForm(): JSX.Element {
    return (
        <Card sx={{
            padding: 6,
            width: 400,
            background: 'rgba(15, 15, 15, 0.88)',
            color: '#fff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
            }}
        >
            <CardHeader 
                title={
                    <Typography variant='h4' sx={{fontWeight: 'bold'}}>Sign In</Typography>
                }
            />
            <CardContent>
                <TextField label='Email or phone number' 
                    sx={{background: '#fff', color: '#fff', width: '100%'}}
                />
                <TextField label='Password' 
                    sx={{marginTop: 2, background: '#fff', color: '#fff', width: '100%'}}
                />
                <CardActions sx={{padding: 0, marginTop: 6}}>
                    <Link to='/browse' style={{width: '100%'}}>
                        <Button variant="contained" sx={{backgroundColor: '#e50914', ":hover": {backgroundColor: '#bf0811'}, width: '100%'}}>Sign In</Button>
                    </Link>
                </CardActions>
                <Grid container sx={{marginTop: 2}}>
                    <Grid item xs={6}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} 
                                label={
                                    <Typography sx={{fontSize: 'small'}}>Remember me</Typography>
                                } 
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/LoginHelp' style={{textDecoration: 'none'}}>
                            <Typography variant="subtitle1"
                                sx={{
                                    display: 'flex',
                                    color: '#ccc',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    fontSize: 'small'
                            }}
                            >
                                Need help?
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid xs={12} sx={{marginTop: 6}}>
                        <Typography sx={{color: '#ccc'}}>
                            New to Netflix? <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>Sign up now.</Link>
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={{marginTop: 1}}>
                        <Typography sx={{color: '#ccc', fontSize: 'small'}}>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to='/' style={{color: '#0045ad', textDecoration: 'none'}}>Learn more.</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SigninForm;