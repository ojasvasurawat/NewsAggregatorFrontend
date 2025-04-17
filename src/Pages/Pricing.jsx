import PriceCard from "../components/PriceCard";

export default function Pricing() {
    return (<>
    <h2>Stay Informed</h2>
    <h1>With BLIp</h1>
        <div className="flex  ">
            <PriceCard
            text1={"Stay Informed With BLIp"} 
            text2 ={"Unlock premium features and stay ahead of the curve. Subscribe now and get exclusive AI-powered insights with real-time updates."}
            />
            <PriceCard 
            text1={"Daily Access"} 
            text2={"What you'll get"}/>
            <PriceCard 
            text1={"Monthly Pro Plan"}
            text2={"What You’ll Get"}/>
        </div>
    </>)
}
