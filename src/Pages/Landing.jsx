import NavbarLanding from "../components/Navbar2";
import Hero from "../components/Hero";
import OurSources from "../components/OurSources";
import Feature from "../components/Features";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Landing() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200 drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]">
            <NavbarLanding />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <OurSources />
                <Feature />
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}