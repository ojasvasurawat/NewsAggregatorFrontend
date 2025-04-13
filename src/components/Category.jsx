import CategoryCard from "./CategoryCard";

export default function Category() {
    return (<>
        <h1 className="text-3xl text-center p-4 m-3 mt-7 font-bold ">Category</h1>
        <div className="p-9 m-4 grid grid-cols-4">

            <CategoryCard
                text={"Sports"}
                image={"src/assets/sports.svg"} />
            <CategoryCard
                text={"Business"}
                image={"src/assets/business.svg"} />
            <CategoryCard
                text={"Entertainment"}
                image={"src/assets/Entertainment.svg"} />
            <CategoryCard
                text={"Science"}
                image={"src/assets/science.svg"} />
            <CategoryCard
                text={"Technology"}
                image={"src/assets/tecnology.svg"} />
            <CategoryCard
                text={"Politics"}
                image={"src/assets/politics.svg"} />
            <CategoryCard
                text={"Health"}
                image={"src/assets/health.svg"} />
            <CategoryCard
                text={"Social media"}
                image={"src/assets/socialMedia.svg"} />
        </div></>)
}