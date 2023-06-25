import { Button, Card, CardActions, Checkbox, CardContent, CardHeader, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function SigninForm(): JSX.Element {
    return (
        <Card sx={{
            background: 'rgba(5, 15, 19, 0.8)',
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
                    sx={{background: '#333333', color: '#fff'}}
                />
                <TextField label='Password' 
                    sx={{background: '#333333', color: '#fff'}}
                />
                <CardActions>
                    <Button>Sign In</Button>
                </CardActions>
                <Grid container>
                    <Grid item xs={6}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label='Remember me' />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={6}>
                        <Link to='/LoginHelp' style={{textDecoration: 'none'}}>
                            <Typography variant="subtitle1"
                                sx={{
                                    color: '#fff',
                            }}
                            >
                                Need help?
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid xs={12}>
                        <Typography sx={{color: '#ccc'}}>
                            New to Netflix? <Link to='/' style={{color: '#fff', textDecoration: 'none'}}>Sign up now.</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default SigninForm;