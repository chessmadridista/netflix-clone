import { Card, CardHeader, Typography } from "@mui/material";

function WatchOffline(): JSX.Element {
    return (
        <Card sx={{display: 'flex', marginTop: 1, backgroundColor: '#000', color: '#fff', height: '100vh'}}>
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
                sx={{width: 700}}
            />
        </Card>
    );
}

export default WatchOffline;