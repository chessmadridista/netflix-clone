import EnjoyOnYourTv from "./components/EnjoyOnYourTv";
import EnterEmail from "./components/EnterEmail";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import KidProfiles from "./components/KidProfiles";
import WatchEverywhere from "./components/WatchEverywhere";
import WatchOffline from "./components/WatchOffline";

function Home(): JSX.Element {
    return (
        <>
            <Header />
            <EnterEmail />
            <EnjoyOnYourTv />
            <WatchOffline />
            <WatchEverywhere />
            <KidProfiles />
            <FAQs />
            <Footer />
        </>
    );
}

export default Home;