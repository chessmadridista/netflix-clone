import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import EmailBox from "./EmailBox";

function EnterEmail(): JSX.Element {
    return (
        <>
            <img src="src/assets/EnterEmail.jpg" alt="Enter email background image." style={{ position: 'absolute', height: '100%', width: '100%', opacity: '0.6', filter: 'blur(1px)'}} />
            <Card sx={{position: 'relative', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', color: '#fff'}}>
                <CardHeader 
                    title={
                        <Typography variant="h3" sx={{fontWeight: 'bolder', marginTop: 10}}>
                            Unlimited movies, TV shows and more
                        </Typography>
                    }
                    subheader={
                    <Typography variant="h5" color="#fff" sx={{marginTop: 1.5}}>
                        Watch anywhere. Cancel anytime.
                    </Typography>
                } />
                <CardContent>
                    <EmailBox />
                </CardContent>
            </Card>
        </>
    );
}

export default EnterEmail;