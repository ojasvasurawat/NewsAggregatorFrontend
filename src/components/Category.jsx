import axios from "axios";
import CategoryCard from "./CategoryCard";
import sports from "/src/public/sports.svg"
import astrology from "/src/public/astrology.svg"
import business from "/src/public/business.svg"
import Entertainment from "/src/public/Entertainment.svg"
import science from "/src/public/science.svg"
import technology from "/src/public/technology.svg"
import politics from "/src/public/politics.svg"
import health from "/src/public/health.svg"
import lifestyle from "/src/public/lifestyle.svg"
import environment from "/src/public/environment.svg"
import education from "/src/public/education.svg"
import automobiles from "/src/public/automobiles.svg"

export default function Category() {
    
    return (<>
    
        <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-20">Category</h1>
        <div className="p-9  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <CategoryCard
                text={"Sports"}
                image={sports} />
            <CategoryCard
                text={"Business"}
                image={business} />
            <CategoryCard
                text={"Entertainment"}
                image={Entertainment} />
            <CategoryCard
                text={"Science"}
                image={science} />
            <CategoryCard
                text={"Technology"}
                image={technology} />
            <CategoryCard
                text={"Politics"}
                image={politics} />
            <CategoryCard
                text={"Health"}
                image={health} />
            <CategoryCard
                text={"Lifestyle"}
                image={lifestyle} />
            <CategoryCard
                text={"Environment"}
                image={environment} />
            <CategoryCard
                text={"Education"}
                image={education} />
            <CategoryCard
                text={"Automobiles"}
                image={automobiles} />
            <CategoryCard
                text={"Astrology"}
                image={astrology} />
        </div></>)
}