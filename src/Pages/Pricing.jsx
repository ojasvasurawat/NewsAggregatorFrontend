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

        
        <div className="min-h-screen w-full bg-gradient-to-tr from-blue-100 via-indigo-200 to-purple-200">
        <NavLink to="/home" className="text-2xl font-bold text-indigo-500 drop-shadow-[0_0_10px_rgba(99,102,241,0.7)] hover:text-indigo-400 transition">Curion</NavLink>
        <div className="min-h-screen flex items-center justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-50 ">
            {/* <PriceCard
            text1={"Stay Informed With BLIp"} 
            text2 ={"Unlock premium features and stay ahead of the curve. Subscribe now and get exclusive AI-powered insights with real-time updates."}
            /> */}
            <section  className=" m-3 p-3 hover:scale-103 shadow-xl border-2 rounded-4xl max-w-md md:h-150 justify-items-center justify-self-center bg-gradient-to-tr from-blue-200 via-indigo-300 to-purple-200 duration-200">
              <div class="product">
                <div class="description">
                  <h3 className="text-white text-3xl font-bold flex justify-center mb-4 drop-shadow-[0_0_2px_purple]">Basic</h3>
                  <h2 className="mb-5 text-white">Quick access to top news with limited features.</h2>
                  <h5 className="flex justify-center mb-7">
                    <span className="font-bold text-4xl p-2">$5.00</span>
                  <span className="text-sm text-white flex items-center">Per member /day</span></h5>
                </div>
                <div>
                  <ul className="text-lg pl-5">
                    <li className="p-2 hover:scale-105 text-white flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Trending News</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Limited AI Summaries</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Basic Bookmarks</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> No Ad-Free Experience</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Notifications</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> No Offline Reading</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> No Personalized Feed</li>
                  </ul>
                </div>
              </div>
              <button id="checkout-and-portal-button-daily" type="submit" onClick={handleDaily} className=" m-1 mt-12 w-sm p-1 border rounded-md hover:bg-violet-700 hover:scale-101 hover:text-white  active:bg-violet-500 active:scale-101 active:text-white">Get Basic</button>
            </section>



            <section  className=" m-3 p-3 hover:scale-103 border-2 shadow-xl rounded-4xl max-w-md mx-auto md:h-150 justify-items-center justify-self-center bg-gradient-to-tr from-blue-200 via-indigo-300 to-purple-200 duration-200">
              <div class="product">
                <div class="description">
                  <h3 className="text-white text-3xl font-bold flex justify-center mb-4 drop-shadow-[0_0_2px_purple]">Pro</h3>
                  <h2 className="mb-5 text-white">Full access with unlimited features and personalization.</h2>
                  <h5 className="flex justify-center mb-7">
                    <span className="font-bold text-4xl p-2">$20.00</span>
                    <span className="text-sm text-white flex items-center">Per member /month</span></h5>
                </div>
                <div>
                  <ul className="text-lg pl-15">
                    <li className="p-2 text-white hover:scale-105 flex justify-start ">
                      <div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                             Trending News</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Unlimited AI Summaries</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Full Bookmarks</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Ad-Free Experience</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Notifications</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Offline Reading</li>
                    <li className="p-2 text-white hover:scale-105 flex justify-start"><div className="bg-blue-500 p-1 rounded-full mr-4">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div> Personalized Feed</li>
                  </ul>
                </div>
              </div>
              <button id="checkout-and-portal-button-monthly" type="submit" onClick={handleMonthly} className=" m-1 w-sm mt-12 p-1 border rounded-md hover:bg-violet-700 hover:scale-101 hover:text-white active:bg-violet-500 active:scale-101 active:text-white">Get Pro</button>
            </section>
            

      </div>
      </div>
      </div>
    </>)
}
