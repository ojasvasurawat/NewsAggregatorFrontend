import { AnimatedTestimonialsDemo } from "./AnimatedTestimonial";

export default function Testimonials() {
    return (<>
        <div className="mb-5" data-aos="fade-down" data-aos-delay="100">
            <div className="text-center text-gray-800 font-sans px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-600 my-3.5 mb-6">What Our Users Say</h1>
                <h2 className="text-indigo-300 font-sans mt-4 mb-10 text-sm sm:text-base md:text-lg px-2 sm:px-6">Real feedback from readers who rely on Curion for their daily dose of trustworthy, AI-curated news.</h2>
            </div>
            <div className="flex flex-col bg-indigo-950 rounded-2xl sm:flex-row flex-wrap justify-center items-center gap-6 px-4 sm:px-6 md:px-10">
                <div className=" rounded-2xl" data-aos="fade-up" data-aos-delay="100">
                    <AnimatedTestimonialsDemo/>
                </div>
            </div>
        </div>
    </>)
}
