import axios from "axios";
import CategoryCard from "./CategoryCard";

export default function Category() {
    
    return (<>
        <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-20">Category</h1>
        <div className="p-9  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                image={"src/assets/technology.svg"} />
            <CategoryCard
                text={"Politics"}
                image={"src/assets/politics.svg"} />
            <CategoryCard
                text={"Health"}
                image={"src/assets/health.svg"} />
            <CategoryCard
                text={"Lifestyle"}
                image={"src/assets/lifestyle.svg"} />
            <CategoryCard
                text={"Environment"}
                image={"src/assets/environment.svg"} />
            <CategoryCard
                text={"Education"}
                image={"src/assets/education.svg"} />
            <CategoryCard
                text={"Automobiles"}
                image={"src/assets/automobiles.svg"} />
            <CategoryCard
                text={"Astrology"}
                image={"src/assets/astrology.svg"} />
        </div></>)
}