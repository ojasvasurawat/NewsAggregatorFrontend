import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Cancle() {
    const navigate = useNavigate()


  return (<>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h2>
        <p className="text-gray-600 mb-6">
        We couldn't process your subscription. Please try again or use a different payment method.
        </p>
        <input type="hidden" id="session-id" name="session_id" value="" />
        <button
        onClick={()=>{navigate('/pricing')}}
        id="retry-payment-button"
        type="button"
        className="w-full py-3 px-4 bg-red-600 hover:bg-red-800 text-white font-medium rounded-lg transition duration-200"
        >
        Retry Payment
        </button>
    </div>
    </section>

  </>)
}