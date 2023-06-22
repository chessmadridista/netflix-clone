import { Grid, Card, CardHeader, CardMedia, Typography } from "@mui/material";

function WatchEverywhere(): JSX.Element {
    return (
        <Grid container sx={{marginTop: 1, backgroundColor: '#000', height: '100vh'}}>
            <Grid item xs={6} sx={{display: 'flex', alignItems: 'center'}}>
                <Card sx={{backgroundColor: '#000',}}>
                    <CardMedia 
                    component='img'
                    src='src/assets/kid profiles.png'
                    />

                </Card>
            </Grid>
            <Grid item xs={6} sx={{display: 'flex', alignItems: 'center'}}>
                <Card sx={{color: '#fff', backgroundColor: '#000'}}>
                    <CardHeader
                        title={
                            <Typography variant="h3" sx={{fontWeight: 'bolder'}}>
                                Watch everywhere
                            </Typography>
                        }
                        subheader={
                            <Typography variant="h5" sx={{marginTop: 2}}>
                                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                            </Typography>
                        }
                    />
                </Card>
            </Grid>
        </Grid>
    );
}

export default WatchEverywhere;