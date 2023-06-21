import { Card, CardHeader, CardMedia, Typography } from "@mui/material";

function EnjoyOnYourTv(): JSX.Element {
    return (
        <Card sx={{marginTop: 1, paddingLeft: 5, backgroundColor: '#000', color: '#fff', height: '100vh', display: 'flex', }}>
            <CardHeader 
                title={
                    <Typography variant="h3" sx={{fontWeight: 'bolder'}}>
                        Enjoy on your TV
                    </Typography>
                }
                subheader={
                    <Typography variant="h5" sx={{width: 500, marginTop: 2}}>
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                    </Typography>
                }
            
            />
            <CardMedia 
            component='img'
            height='300'
            src="src/assets/tv.png"
            />
        </Card>
    );
}

export default EnjoyOnYourTv;