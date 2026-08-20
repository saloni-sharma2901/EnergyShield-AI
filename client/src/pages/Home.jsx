import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Statistics />
            <Features />
            <HowItWorks />
            <DashboardPreview />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;