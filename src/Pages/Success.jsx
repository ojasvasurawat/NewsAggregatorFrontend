import axios from "axios"
import { useEffect } from "react";
export default function Success() {

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('session_id')) {
      const session_id = searchParams.get('session_id');
      console.log(session_id);
      document.getElementById('session-id').setAttribute('value', session_id);
    }
  }, []);

  const handleBilling = async () => {

    const old_session_id = document.getElementById("session-id").value;
    const session_id = old_session_id.replace(/\//g, '');

    if (!session_id) {
      console.error("No session_id found!");
      return;
    }


    await axios.post("http://localhost:4242/billing/create-portal-session", {
      session_id,
    }).then(function (response) {
      // console.log(response);
      window.location.replace(response.data);
    })

  }

  return (<>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
        <p className="text-gray-600 mb-6">
          Subscription to plan successful!
        </p>
        <input type="hidden" id="session-id" name="session_id" value="" />
        <button
          onClick={handleBilling}
          id="checkout-and-portal-button"
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-900 text-white font-medium rounded-lg transition duration-200 "
        >
          Manage your billing information
        </button>
      </div>
    </section>
  </>)
}



