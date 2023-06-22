import { Card, CardHeader, Grid, Typography } from "@mui/material";

function FAQs(): JSX.Element {
    return (
        <Grid container sx={{marginTop: 1, background: '#000', color: '#fff', height: '100vh'}}>
            <Grid item sx={{display: 'flex', justifyItems: 'center'}} xs={12}>
                <Card sx={{background: '#000', width: '100vw', textAlign: 'center', paddingTop: 6}}>
                    <CardHeader 
                    title={
                        <Typography variant="h3"
                        sx={{fontWeight: 'bolder', }}
                        >
                            Frequently Asked Questions
                        </Typography>
                    } 
                    sx={{color: '#fff', width: '100%'}}
                    />
                </Card>
            </Grid>
        </Grid>
    );
}

export default FAQs;