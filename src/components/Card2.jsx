export default function Card2({text1,text2,text3,image}) {
    return (
        <>
            <div className="flex justify-center place-content-center px-25 py-15 mx-50">

                <img className="top-0 h-100" src={image} alt="" />

                <div className="text-justify  ">
                    <h1 className="text-gray-900 text-4xl">{text1}</h1>
                    <h2 className="text-gray-900">{text2}
                    </h2>
                    <button className="mt-8 focus:outline-none text-gray-50 bg-black hover:border hover:border-slate-300 hover:bg-black hover:text-slate-50 focus:ring-2 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-balck dark:focus:ring-gray-2000">{text3}</button>
                </div>
            </div>
        </>
    )
}