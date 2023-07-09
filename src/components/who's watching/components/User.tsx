import { Card, CardHeader, CardMedia } from "@mui/material";

interface User {
    user: string;
    src: string;
}

function User({user, src}: User): JSX.Element {
    return (
        <Card>
            <CardMedia
            src={src}
            />
            <CardHeader>{user}</CardHeader>
        </Card>
    );
}

export default User;