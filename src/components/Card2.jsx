export default function Card2({text1,text2,image}) {
    return (
        <>
            <div className="flex justify-center place-content-center px-25 py-15 mx-50">

                <img className="top-0 h-100" src={image} alt="" />

                <div className="text-justify  ">
                    <h1 className="text-gray-700 text-4xl">{text1}</h1>
                    <h2 className="text-gray-500">{text2}
                    </h2>
                    <button className="mt-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700">Explore Now</button>
                </div>
            </div>
        </>
    )
}