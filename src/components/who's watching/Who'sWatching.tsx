import { Button, Grid, Typography } from "@mui/material";
import User from "./components/User";
import UserProps from "./interfaces/UserProps";

function WhosWatching(): JSX.Element {
    const users: Array<UserProps> = [
        {
            id: 0,
            firstName: 'Rakesh Mishra',
            imageBackgroundSrc: 'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229',
        },
        {
            id: 1,
            firstName: 'Rashmi Mishra',
            imageBackgroundSrc: 'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4)',
        },
        {
            id: 2,
            firstName: 'Divyansh Mishra',
            imageBackgroundSrc: 'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7)',
        },
        {
            id: 3,
            firstName: 'Lavanya Mishra',
            imageBackgroundSrc: 'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e)',
        },
        {
            id: 4,
            firstName: 'Aditya Mishra',
            imageBackgroundSrc: 'https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTEYr5GclkFvWr7UwFeZpOL1oyV7oD98NciCdYxbhh88KEKn5uB_EcZ6Q_dIG9zNfu-4RvoOWfrLxyPODLCeMAdgsKe1W5JLoXos.png?r=a4b)',
        },
    ];
    const userCards: Array<JSX.Element> = users.map((user) => {
        return (
            <>
                <User
                    key={user.id} 
                    id={user.id} 
                    firstName={user.firstName} 
                    imageBackgroundSrc={user.imageBackgroundSrc} 
                />
            </>
        );
    });

    return (
        <Grid container sx={{height: '100vh', width: '100vw'}}>
            <Grid item xs={12}>
                <Typography sx={{color: '#fff'}} variant="h3">
                    Who's watching?
                </Typography>
            </Grid>
            <Grid container xs={12} justifyContent='space-around'>
                {userCards}
            </Grid>
            <Grid item xs={12}>
                <Button 
                variant="outlined" 
                sx={{textTransform: 'none', color: '#aaa', borderColor: '#aaa'}}>
                    Manage Profiles
                </Button>
            </Grid>
        </Grid>
    );
}

export default WhosWatching;