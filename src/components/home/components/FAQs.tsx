import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import EmailBox from "./EmailBox";

interface Questions {
    id: number;
    question: string;
    answer: string;
}

function Questions(): JSX.Element[] {
    const questions: Array<Questions> = [
        {
            id: 0,
            question: 'What is Netflix',
            answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
        },
        {
            id: 1,
            question: 'How much does Netflix cost?',
            answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
        },
        {
            id: 2,
            question: 'Where can I watch?',
            answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
        },
        {
            id: 3,
            question: 'How do I cancel?',
            answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
        },
        {
            id: 4,
            question: 'What can I watch on Netflix?',
            answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
        },
        {
            id: 5,
            question: 'Is Netflix good for kids?',
            answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
        },
    ];
    const questionAccordians = questions.map((question) => {
        return (
            <Accordion key={question.id} disableGutters sx={{color: '#fff', background: '#2d2d2d', width: '75vw', margin: 'auto', marginTop: 1, padding: 2}}>
                <AccordionSummary expandIcon={<ExpandMore sx={{color: '#fff'}} />}>
                    <Typography variant="h5">{ question.question }</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{textAlign: 'left'}}>
                    <Typography sx={{fontSize: 'x-large'}}>{ question.answer }</Typography>
                </AccordionDetails>
            </Accordion>
        );
    });

    return questionAccordians;
}

function FAQs(): JSX.Element {
    return (
        <Grid container sx={{marginTop: 1, background: '#000', color: '#fff', minHeight: '100vh'}}>
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
                    <CardContent sx={{color: '#fff'}}>
                        <Questions />
                        <EmailBox marginTop={5} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default FAQs;