import { AnimatedTestimonials } from "./ui/AnimatedTransitionSource";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
       ' "Curion helps me filter the noise. I get exactly what I care about, nothing more, nothing less."',
      name: "Sarah Chen",
      designation: "Marketing Student, Delhi University",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        '"Curion has completely changed the way I consume news. It’s fast, accurate, and perfectly tailored to my interests. I no longer waste time scrolling through noise. "',
      name: "Michael Rodriguez",
      designation: "Freelance Content Writer",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        '"Finally, a news app that doesn’t feel overwhelming. The summaries are on point, and I love how it pulls from multiple trusted platforms."',
      name: "Emily Watson",
      designation: "Finance Blogger",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        '"I’ve stopped doomscrolling. Curion gives me a clean, curated feed that keeps me informed and focused. It’s like having an assistant filter the web for me."',
      name: "James Kim",
      designation: "Software Engineer, Pune",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
       ' "The real-time updates and topic filters are genius. I get what I need — from tech to world affairs — without digging through junk."',
      name: "Lisa Thompson",
      designation: "Startup Founder, Jaipur",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}