import Content from "../components/Content";
import FeatureCard from "../components/Card1";
import Hero from "../components/Hero";
import NavbarLanding from "../components/Navbar2";
import OurSources from "../components/OurSources";
import Feature from "../components/Features";
import BottomFeatures from "../components/BottomFeatures";
import Footer from "../components/Footer";


export default function Landing() {
    return (
        <>
            <NavbarLanding />
            <Hero />
            <OurSources />
            <Feature />
            <BottomFeatures />
            <Footer />
        </>)

}