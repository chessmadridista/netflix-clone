import { Button, Grid, Typography } from "@mui/material";

function WhosWatching(): JSX.Element {
    return (
        <Grid container sx={{height: '100vh', width: '100vw'}}>
            <Grid item xs={12}>
                <Typography sx={{color: '#fff'}} variant="h3">
                    Who's watching?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
            <Grid item xs={12}>
                <Button 
                variant="outlined" 
                sx={{textTransform: 'none', color: '#aaa', borderColor: '#aaa'}}>
                    Manage Profiles
                </Button>
            </Grid>
        </Grid>
    );
}

export default WhosWatching;