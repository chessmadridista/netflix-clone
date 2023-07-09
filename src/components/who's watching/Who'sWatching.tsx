import { Button, Grid, Typography } from "@mui/material";

function WhosWatching(): JSX.Element {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography sx={{color: '#fff'}}>
                    Who's watching?
                </Typography>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Button>
                    Manage Profiles
                </Button>
            </Grid>
        </Grid>
    );
}

export default WhosWatching;