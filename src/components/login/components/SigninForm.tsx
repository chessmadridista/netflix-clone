import { Card, CardHeader, Typography } from "@mui/material";

function SigninForm(): JSX.Element {
    return (
        <Card sx={{
            background: 'rgba(5, 15, 19, 0.8)',
            color: '#fff',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
            }}
        >
            <CardHeader 
                title={
                    <Typography variant='h4' sx={{fontWeight: 'bold'}}>Sign In</Typography>
                }
            />
        </Card>
    );
}

export default SigninForm;