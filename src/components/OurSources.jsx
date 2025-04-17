export default function OurSources(){
    return(
        <>
        <div className="m-4">
            <div className="m-3 text-center">
                <h1 className="text-3xl text-black mt-9 mb-4">Our Sources</h1>
                <h2 className="text-gray-900">We fetch the latest news from top platforms to keep you informed.</h2>
            </div>
            <div className="flex justify-between mx-8 px-15">
                {/* <img className="hover:scale-130 duration-400" src="src/assets/x.svg" alt="" /> */}
                {/* <img className="hover:scale-150 duration-400" src="src/assets/youtube.svg" alt="" /> */}
                <img className="hover:scale-130 duration-400" src="src/assets/bbc.svg" alt="" />
                <img className="hover:scale-130 duration-400" src="src/assets/NYT.svg" alt="" />
            </div>
        </div>
        </>
    )
}