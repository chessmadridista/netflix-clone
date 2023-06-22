import { Grid, Card, CardHeader, CardMedia, Typography } from "@mui/material";

function KidProfiles(): JSX.Element {
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
                                Create profiles for kids
                            </Typography>
                        }
                        subheader={
                            <Typography variant="h5" sx={{marginTop: 2}}>
                                Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                            </Typography>
                        }
                    />
                </Card>
            </Grid>
        </Grid>
    );
}

export default KidProfiles;