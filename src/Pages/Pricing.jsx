import PriceCard from "../components/PriceCard";
import axios from "axios";
export default function Pricing() {

   const handleDaily = async ()=> {
          const lookup_key = "standard_daily";
           

                await axios.post("http://localhost:4242/billing/create-checkout-session",{
                  lookup_key,
                }).then(function (response) {
                  // console.log(response);
    window.location.replace(response.data);
  })
            
        }


        const handleMonthly = async ()=> {
          const lookup_key = "standard_monthly";
           

                await axios.post("http://localhost:4242/billing/create-checkout-session",{
                  lookup_key,
                }).then(function (response) {
                  // console.log(response);
    window.location.replace(response.data);
  })
            
        }

    return (<>
    <h2>Stay Informed</h2>
    <h1>With BLIp</h1>
        <div className="flex  ">
            {/* <PriceCard
            text1={"Stay Informed With BLIp"} 
            text2 ={"Unlock premium features and stay ahead of the curve. Subscribe now and get exclusive AI-powered insights with real-time updates."}
            /> */}
            <section  className=" m-3 p-3 border rounded-md  ">
      <div class="product">
        <div class="description">
          <h3>Starter plan</h3>
          <h5>$5.00 / day</h5>
        </div>
      </div>
        <button id="checkout-and-portal-button-daily" type="submit" onClick={handleDaily} className=" m-1 mt-3 p-1 border">Checkout</button>
    </section>



    <section  className=" m-3 p-3 border rounded-md  ">
      <div class="product">
        <div class="description">
          <h3>pro plan</h3>
          <h5>$20.00 / month</h5>
        </div>
      </div>
        <button id="checkout-and-portal-button-monthly" type="submit" onClick={handleMonthly} className=" m-1 mt-3 p-1 border">Checkout</button>
    </section>

        </div>
    </>)
}
