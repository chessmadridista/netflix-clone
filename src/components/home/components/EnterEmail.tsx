import { Card, CardContent, CardHeader } from "@mui/material";

function EnterEmail(): JSX.Element {
    return (
        <Card sx={{marginTop: 12}}>
            <CardHeader title='Unlimited movies, TV shows and more' subheader='Watch anywhere. Cancel anytime.'/>
            <CardContent>Ready to watch? Enter your email to create or restart your membership.</CardContent>
        </Card>
    );
}

export default EnterEmail;