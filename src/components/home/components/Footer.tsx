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
            link: "/faq",
        },
        {
            id: 1,
            name: "Help Centre",
            link: "/help",
        },
        {
            id: 2,
            name: "Account",
            link: "/account",
        },
        {
            id: 3,
            name: "Media Centre",
            link: "/media",
        },
        {
            id: 4,
            name: "Investor Relations",
            link: "/investor",
        },
        {
            id: 5,
            name: "Jobs",
            link: "/jobs",
        },
        {
            id: 6,
            name: "Ways to Watch",
            link: "/ways-to-watch",
        },
        {
            id: 7,
            name: "Terms of Use",
            link: "/terms",
        },
        {
            id: 8,
            name: "Privacy",
            link: "/privacy",
        },
        {
            id: 9,
            name: "Cookie Preferences",
            link: "/cookies",
        },
        {
            id: 10,
            name: "Corporate Information",
            link: "/corporate",
        },
        {
            id: 11,
            name: "Contact Us",
            link: "/contact",
        },
        {
            id: 12,
            name: "Speed Test",
            link: "/speed-test",
        },
        {
            id: 13,
            name: "Legal Notices",
            link: "/legal",
        },
        {
            id: 14,
            name: "Only on Netflix",
            link: "/netflix",
        },
    ];
    const links = footerLinks.map((option) => {
        return (
            <Grid xs={4}>
                <Typography
                    key={option.id}
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
        <Grid container sx={{marginTop: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 10, color: '#ccc', background: '#000', minHeight: '100vh'}}>
            <Grid item xs={12}>
                <Typography>
                    Questions? Call 000-800-919-1694
                </Typography>
            </Grid>
            <FooterLinks />
            <Grid xs={12}>
                <LanguageOption />
            </Grid>
            <Grid xs={12}>
                <Typography>Netflix India</Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;