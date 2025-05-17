import NavbarLanding from "@/components/Navbar2";
import PriceCard from "../components/PriceCard";
import axios from "axios";
import { NavLink } from "react-router-dom";

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

        <NavLink to="/Signup" className="text-2xl font-bold text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)] hover:text-indigo-400 transition">Curion</NavLink>
        <div className="grid grid-cols-2 gap-10 ">
            {/* <PriceCard
            text1={"Stay Informed With BLIp"} 
            text2 ={"Unlock premium features and stay ahead of the curve. Subscribe now and get exclusive AI-powered insights with real-time updates."}
            /> */}
            <section  className=" m-3 p-3 border rounded-md md:w-70 md:h-50 justify-items-center justify-self-center">
              <div class="product">
                <div class="description">
                  <h3>Daily Access</h3>
                  <h5>$5.00 / day</h5>
                </div>
              </div>
              <button id="checkout-and-portal-button-daily" type="submit" onClick={handleDaily} className=" m-1 mt-3 p-1 border rounded-3xl hover:bg-black hover:text-white">Choose</button>
            </section>



            <section  className=" m-3 p-3 border rounded-md md:w-70 md:h-50 justify-items-center justify-self-center">
              <div class="product">
                <div class="description">
                  <h3>Monthly Pro Plan</h3>
                  <h5>$20.00 / month</h5>
                </div>
              </div>
              <button id="checkout-and-portal-button-monthly" type="submit" onClick={handleMonthly} className=" m-1 mt-3 p-1 border rounded-3xl hover:bg-black hover:text-white">Choose</button>
            </section>

      </div>
    </>)
}
