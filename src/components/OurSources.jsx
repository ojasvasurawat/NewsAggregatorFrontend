// export default function OurSources(){
//     return(
//         <>
//         {/* <div className="m-4">
//             <div className="m-3 text-center">
//                 <h1 className="text-3xl text-black mt-9 mb-4">Our Sources</h1>
//                 <h2 className="text-gray-900">We fetch the latest news from top platforms to keep you informed.</h2>
//             </div>
//             <div className="flex justify-between mx-8 px-15"> */}
//                 {/* <img className="hover:scale-130 duration-400" src="src/assets/x.svg" alt="" /> */}
//                 {/* <img className="hover:scale-150 duration-400" src="src/assets/youtube.svg" alt="" /> */}
//                 {/* <img className="hover:scale-130 duration-400" src="src/assets/bbc.svg" alt="" />
//                 <img className="hover:scale-130 duration-400" src="src/assets/NYT.svg" alt="" />
//             </div>
//         </div> */}
//         </>
//     )
// }
export default function OurSources() {
    return (
        <>
            <div className="py-16 px-4">
                <div className="text-center mb-10">
                    <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Trusted Sources</span>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Our News Partners</h1>
                    <h2 className="text-gray-600 max-w-2xl mx-auto">We fetch the latest news from top platforms to keep you informed with reliable content.</h2>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-4">
                    <div className="grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110">
                        <img className="h-10 md:h-12" src="src/assets/x.svg" alt="Twitter" />
                    </div>
                    <div className="grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110">
                        <img className="h-10 md:h-12" src="src/assets/youtube.svg" alt="YouTube" />
                    </div>
                    <div className="grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110">
                        <img className="h-10 md:h-12" src="src/assets/bbc.svg" alt="BBC" />
                    </div>
                    <div className="grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110">
                        <img className="h-10 md:h-12" src="src/assets/NYT.svg" alt="New York Times" />
                    </div>
                </div>
            </div>
        </>
    )
}