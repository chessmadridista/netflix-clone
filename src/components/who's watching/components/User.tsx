import { Card, CardHeader, CardMedia, Typography } from "@mui/material";
import UserProps from "../interfaces/UserProps";

function User({id, firstName, imageBackgroundSrc}: UserProps): JSX.Element {
    return (
        <Card key={id} sx={{background: '#232323',}}>
            <CardMedia
            component="img"
            height="170px"
            image={imageBackgroundSrc}
            sx={{":hover": {border: '1px solid #fff',}}}
            />
            <CardHeader sx={{color: '#fff'}} 
                title={
                    <Typography>
                        {firstName}
                    </Typography>
                } 
            />
        </Card>
    );
}

export default User;