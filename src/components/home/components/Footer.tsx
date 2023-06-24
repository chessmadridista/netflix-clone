import { Grid, Typography } from "@mui/material";
import LanguageOption from "./LanguageOption";

interface FooterLink {
    id: number;
    name: string;
    link: string;
}

function FooterLinks(): JSX.Element[] {
    const footerLinks: Array<FooterLink> = [
        {
            id: 0,
            name: "FAQ",
            link: "https://help.netflix.com/support/412",
        },
        {
            id: 1,
            name: "Help Centre",
            link: "https://help.netflix.com/",
        },
        {
            id: 2,
            name: "Account",
            link: "https://www.netflix.com/youraccount",
        },
        {
            id: 3,
            name: "Media Centre",
            link: "https://media.netflix.com/",
        },
        {
            id: 4,
            name: "Investor Relations",
            link: "http://ir.netflix.com/",
        },
        {
            id: 5,
            name: "Jobs",
            link: "https://jobs.netflix.com/jobs",
        },
        {
            id: 6,
            name: "Ways to Watch",
            link: "https://www.netflix.com/watch",
        },
        {
            id: 7,
            name: "Terms of Use",
            link: "https://help.netflix.com/legal/termsofuse",
        },
        {
            id: 8,
            name: "Privacy",
            link: "https://help.netflix.com/legal/privacy",
        },
        {
            id: 9,
            name: "Cookie Preferences",
            link: "https://www.netflix.com/in/#",
        },
        {
            id: 10,
            name: "Corporate Information",
            link: "https://help.netflix.com/legal/corpinfo",
        },
        {
            id: 11,
            name: "Contact Us",
            link: "https://help.netflix.com/contactus",
        },
        {
            id: 12,
            name: "Speed Test",
            link: "https://fast.com/",
        },
        {
            id: 13,
            name: "Legal Notices",
            link: "https://help.netflix.com/legal/notices",
        },
        {
            id: 14,
            name: "Only on Netflix",
            link: "https://www.netflix.com/in/browse/genre/839338",
        },
    ];
    const links = footerLinks.map((option) => {
        return (
            <Grid xs={4} sx={{marginTop: 1, height: 1}}>
                <Typography
                    key={option.id}
                    variant='subtitle2'
                    component='a'
                    href={option.link}
                    sx={{color: '#ccc'}}
                >
                    {option.name}
                </Typography>
            </Grid>
        );
    });
    
    return links;
}

function Footer(): JSX.Element {
    return (
        <Grid container sx={{marginTop: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10, color: '#ccc', background: '#000', }}>
            <Grid item xs={12}>
                <Typography sx={{marginBottom: 3}}>
                    Questions? Call 000-800-919-1694
                </Typography>
            </Grid>
            <FooterLinks />
            <Grid xs={12}>
                <LanguageOption marginTop={6} />
            </Grid>
            <Grid xs={12} sx={{marginTop: 3}}>
                <Typography>Netflix India</Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;