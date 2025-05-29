// import { AnimatedTestimonialsDemo } from "./AnimatedTestimonial";

// export default function Testimonials() {
//     return (<>
//         <div className="mb-5" data-aos="fade-down" data-aos-delay="100">
//             <div className="text-center text-gray-800 font-sans px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-indigo-600 my-3.5 mb-6">What Our Users Say</h1>
//                 <h2 className="text-indigo-300 font-sans mt-4 mb-10 text-sm sm:text-base md:text-lg px-2 sm:px-6">Real feedback from readers who rely on Curion for their daily dose of trustworthy, AI-curated news.</h2>
//             </div>
//             <div className="flex flex-col bg-indigo-950 rounded-2xl sm:flex-row flex-wrap justify-center items-center gap-6 px-4 sm:px-6 md:px-10">
//                 <div className=" rounded-2xl" data-aos="fade-up" data-aos-delay="100">
//                     <AnimatedTestimonialsDemo/>
//                 </div>
//             </div>
//         </div>
//     </>)
// }
import { useState } from "react";

// Updated animated testimonial component
function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      content:
        "Curion has completely changed how I consume news. The AI curation is spot-on with my interests, and I love how it pulls from multiple trusted sources.",
      author: "Sarah Johnson",
      role: "Marketing Executive",
      avatar: "/api/placeholder/100/100",
    },
    {
      content:
        "As a busy professional, I don't have time to browse through endless headlines. Curion delivers exactly what I need to know, when I need to know it.",
      author: "Michael Chen",
      role: "Software Engineer",
      avatar: "/api/placeholder/100/100",
    },
    {
      content:
        "The personalization is incredible! I've discovered so many important stories that I would have missed otherwise. Definitely worth every penny.",
      author: "Alex Rodriguez",
      role: "Financial Analyst",
      avatar: "/api/placeholder/100/100",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <svg
              width="45"
              height="36"
              className="fill-blue-400"
              viewBox="0 0 45 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 18H9C9 12.477 13.477 8 19 8V12C15.686 12 13 14.686 13 18H13.5ZM31.5 18H27C27 12.477 31.477 8 37 8V12C33.686 12 31 14.686 31 18H31.5Z" />
              <path d="M13 20C10.791 20 9 21.791 9 24C9 26.209 10.791 28 13 28C15.209 28 17 26.209 17 24C17 21.791 15.209 20 13 20ZM31 20C28.791 20 27 21.791 27 24C27 26.209 28.791 28 31 28C33.209 28 35 26.209 35 24C35 21.791 33.209 20 31 20Z" />
            </svg>
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
            {testimonials[currentIndex].content}
          </p>

          <div className="flex items-center mb-6">
            <img
              src={testimonials[currentIndex].avatar}
              alt={testimonials[currentIndex].author}
              className="w-12 h-12 rounded-full border-2 border-blue-100"
            />
            <div className="ml-4 text-left">
              <p className="font-medium text-gray-800">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          <div className="flex space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
          <button
            onClick={handleNext}
            className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
    return (<>
        <div className="py-20" data-aos="fade-down" data-aos-delay="100">
            <div className="text-center px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
                <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Testimonials</span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">What Our Users Say</h1>
                <h2 className="text-gray-600 font-sans mt-2 mb-10 text-sm sm:text-base md:text-lg px-2 sm:px-6">Real feedback from readers who rely on Curion for their daily dose of trustworthy, AI-curated news.</h2>
            </div>
            <div className="flex flex-col bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl sm:flex-row flex-wrap justify-center items-center gap-6 px-4 sm:px-6 md:px-10 py-10">
                <div className="w-full" data-aos="fade-up" data-aos-delay="100">
                    <AnimatedTestimonialsDemo/>
                </div>
            </div>
        </div>
    </>)
}