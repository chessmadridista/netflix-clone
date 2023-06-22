import { Card, CardHeader, CardMedia, Grid, Typography } from "@mui/material";

function WatchOffline(): JSX.Element {
    return (
        <Grid container sx={{marginTop: 1, backgroundColor: '#000', height: '100vh'}}>
            <Grid item xs={6}>
                <Card sx={{backgroundColor: '#000'}}>
                    <CardMedia 
                    component='img'
                    src='src/assets/watch offline.jpg'
                    />

                </Card>
            </Grid>
            <Grid item xs={6} sx={{display: 'flex', alignItems: 'center'}}>
                <Card sx={{color: '#fff', backgroundColor: '#000'}}>
                    <CardHeader
                        title={
                            <Typography variant="h3" sx={{fontWeight: 'bolder'}}>
                                Download your shows to watch offline
                            </Typography>
                        }
                        subheader={
                            <Typography variant="h5" sx={{marginTop: 2, fontWeight: 'bold'}}>
                                Save your favourites easily and always have something to watch.
                            </Typography>
                        }
                        sx={{width: 600, }}
                    />
                </Card>
            </Grid>
        </Grid>
    );
}

export default WatchOffline;