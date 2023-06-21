import { Card, CardContent, CardHeader, Typography } from "@mui/material";

function EnterEmail(): JSX.Element {
    return (
        <>
            <img src="src/assets/EnterEmail.jpg" alt="Enter email background image." style={{ position: 'absolute', height: '100%', width: '100%', opacity: '0.6', filter: 'blur(1px)'}} />
            <Card sx={{position: 'relative', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', color: '#fff'}}>
                <CardHeader title='Unlimited movies, TV shows and more' subheader={
                <Typography variant="subtitle1" color="#fff">
                    Watch anywhere. Cancel anytime.
                </Typography>
            } />
                <CardContent>Ready to watch? Enter your email to create or restart your membership.</CardContent>
            </Card>
        </>
    );
}

export default EnterEmail;