import { Card, CardContent, CardHeader } from "@mui/material";

function EnterEmail(): JSX.Element {
    return (
        <Card sx={{marginTop: 12}}>
            <CardHeader title='Unlimited movies, TV shows and more' />
            <CardContent>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</CardContent>
        </Card>
    );
}

export default EnterEmail;