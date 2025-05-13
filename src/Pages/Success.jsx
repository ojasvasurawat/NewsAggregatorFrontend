import axios from "axios"
import { useEffect } from "react";
export default function Success(){

useEffect( () => {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('session_id')) {
    const session_id = searchParams.get('session_id');
    console.log(session_id);
    document.getElementById('session-id').setAttribute('value', session_id);
  }   
  },[]);   

        const handleBilling = async ()=>{

          const old_session_id = document.getElementById("session-id").value;
          const session_id = old_session_id.replace(/\//g, '');

          if (!session_id) {
        console.error("No session_id found!");
        return;
      }
       

                await axios.post("http://localhost:4242/billing/create-portal-session",{
                  session_id,
                }).then(function (response) {
                  // console.log(response);
    window.location.replace(response.data);
  })
           
        }

    return(<>
    <section>
    <div class="product Box-root">
      <div class="description Box-root">
        <h3>Subscription to Starter plan successful!</h3>
      </div>
    </div>
      <input type="hidden" id="session-id" name="session_id" value="" />
      <button id="checkout-and-portal-button" type="submit" onClick={handleBilling} className="m-1 p-1 border rounded-md ">Manage your billing information</button>
  </section>
    </>)
}