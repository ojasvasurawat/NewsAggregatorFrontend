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
        <div className="w-full min-h-screen flex flex-col">
            <NavbarLanding />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <OurSources />
                <Feature />
                <BottomFeatures />
            </main>
            <Footer />
        </div>
    )
}