import { Grid, Card, CardHeader, CardMedia, Typography } from "@mui/material";

function WatchEverywhere(): JSX.Element {
    return (
        <Grid container sx={{paddingLeft: 4, paddingRight: 4, boxSizing: 'border-box', marginTop: 1, backgroundColor: '#000', minHeight: '100vh'}}>
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
            <Grid item xs={6} sx={{display: 'flex', alignItems: 'center'}}>
                <Card sx={{position: 'relative', backgroundColor: '#000', }}>
                    <CardMedia 
                    component='img'
                    src='src/assets/watch everywhere.png'
                    sx={{position: 'relative', zIndex: 1}}
                    />
                    <video autoPlay playsInline muted loop style={{maxWidth: 415, position: 'absolute', top: '10%', left: '17%'}}>
                        <source src="src/assets/tv watch everywhere.m4v" type="video/mp4" />
                    </video>
                </Card>
            </Grid>
        </Grid>
    );
}

export default WatchEverywhere;