import { Grid, Typography } from "@mui/material";

function Footer(): JSX.Element {
    return (
        <Grid container sx={{color: '#fff', background: '#000', minHeight: '100vh'}}>
            <Grid item xs={12}>
                <Typography>
                    Questions? Call 000-800-919-1694
                </Typography>
            </Grid>
            <Grid xs={4}>

            </Grid>
            <Grid xs={4}>

            </Grid>
            <Grid xs={4}>

            </Grid>
            <Grid xs={12}>
                
            </Grid>
            <Grid xs={12}>
                <Typography>Netflix India</Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;