import { useState, useEffect, useRef } from 'react';

export default function Scrollcard({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollPosition = container.scrollTop;
        const itemHeight = container.clientHeight;

        const newIndex = Math.floor(scrollPosition / itemHeight);

        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }

      }
    };

    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className=" grid h-screen overflow-y-scroll snap-y snap-mandatory justify-items-center"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="relative h-screen snap-start flex justify-center items-center w-103"
        >
          <div className="p-3 justify-items-center z-0 h-full "><img className="w-full h-full object-cover" src={item.img}/></div>
          
                 <div className=" m-3 absolute inset-x-0 bottom-0 z-10 flex flex-col items-center p-4 text-white drop-shadow-[0_0_2px_blue] space-y-reverse space-y-2 backdrop-blur-xs">
                     <div className="text-lg md:text-3xl font-bold mb-2 ">{item.title}</div>
                     {/* <div className="text-sm md:text-lg mb-2 ">{item.description}</div> */}
                     <div className="text-sm md:text-base mb-10"><a href={item.link} className="underline hover:text-blue-400">Read More</a></div>
                 </div>
             
          
        </div>
      ))}
      <p>No more content.</p>
    </div>
  );
}
