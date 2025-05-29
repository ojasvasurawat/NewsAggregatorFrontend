// export default ThreeDCardDemo;
import { useState } from "react";

export default function ThreeDCardDemo({ text1, text2, image }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative h-80 w-64 rounded-2xl bg-gradient-to-tl from-indigo-300 drop-shadow-[0_0_12px_rgba(26,72,153,0.7)] shadow-lg transition-all duration-200 ease-out hover:shadow-xl"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-4 rounded-xl bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 opacity-90 p-6 shadow-inner"
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
      >
        <div className="flex h-full flex-col items-center justify-between">
          <div
            className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-400 to-purple-300"
            style={{ transform: "translateZ(40px)" }}
          >
            {image ? (
              <img src={image} alt="" className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-6 w-6"
              >
                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 3c-6.627 0-12-5.373-12-12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12Z" />
              </svg>
            )}
          </div>
          <div
            className="text-center"
            style={{ transform: "translateZ(50px)" }}
          >
            <h3
              className="text-lg font-bold text-gra-800"
              style={{ transform: "translateZ(60px)" }}
            >
              {text1}
            </h3>
            <p
              className="mt-2 text-sm text-white"
              style={{ transform: "translateZ(40px)" }}
            >
              {text2}
            </p>
          </div>
          <div
            className="mb-2 mt-4"
            style={{ transform: "translateZ(70px)" }}
          >
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 text-xs font-medium text-white shadow-md transition hover:shadow-lg">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
