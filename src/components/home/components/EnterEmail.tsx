import { Card, CardContent, CardHeader } from "@mui/material";

function EnterEmail(): JSX.Element {
    return (
        <>
            <img src="src/assets/EnterEmail.jpg" alt="Enter email background image." style={{ marginLeft: 0, position: 'absolute', width: '100%'}} />
            <Card sx={{position: 'relative', height: '100vh', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', color: '#fff'}}>
                <CardHeader title='Unlimited movies, TV shows and more' subheader='Watch anywhere. Cancel anytime.' />
                <CardContent>Ready to watch? Enter your email to create or restart your membership.</CardContent>
            </Card>
        </>
    );
}

export default EnterEmail;