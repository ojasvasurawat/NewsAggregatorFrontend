import { useState } from "react";
import SignUpCard from "./SignupCard";
import SignInCard from "./SignInCard";

const TabsDemo = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="w-[400px]">
      {/* Tabs List */}
      <div className="grid w-full grid-cols-2 mb-4">
        <button
          onClick={() => setActiveTab("account")}
          className={`py-2 text-sm font-medium ${
            activeTab === "account"
              ? "bg-white text-black shadow"
              : "bg-gray-100 text-gray-500"
          } rounded-tl-md rounded-bl-md`}
        >
          Signup
        </button>
        <button
          onClick={() => setActiveTab("password")}
          className={`py-2 text-sm font-medium ${
            activeTab === "password"
              ? "bg-white text-black shadow"
              : "bg-gray-100 text-gray-500"
          } rounded-tr-md rounded-br-md`}
        >
          Signin
        </button>
      </div>

      {/* Tabs Content */}
      {activeTab === "account" && (
        // <div className="border rounded-lg bg-white shadow p-4 space-y-4">
        //   <div>
        //     <h2 className="text-lg font-semibold">Get Started Now </h2>
        //     <p className="text-sm text-gray-500">
        //       Make changes to your account here. Click save when you're done.
        //     </p>
        //   </div>
        //   <div className="space-y-2">
        //     <div className="flex flex-col space-y-1">
        //       <label htmlFor="name" className="text-sm font-medium">First Name</label>
        //       <input
        //         id="name"
        //         defaultValue="Pedro Duarte"
        //         className="border px-3 py-2 rounded-md text-sm"
        //       />
        //     </div>
        //     <div className="flex flex-col space-y-1">
        //       <label htmlFor="username" className="text-sm font-medium">Username</label>
        //       <input
        //         id="username"
        //         defaultValue="@peduarte"
        //         className="border px-3 py-2 rounded-md text-sm"
        //       />
        //     </div>
        //   </div>
        //   <div className="pt-2">
        //     <button className="bg-black text-white text-sm px-4 py-2 rounded-md">
        //       Save changes
        //     </button>
        //   </div>
        // </div>
    
    <div className="w-full bg-amber-500">
      <SignUpCard/>
    </div>
      )}

      {activeTab === "password" && (
        // <div className="border rounded-lg bg-white shadow p-4 space-y-4">
        //   <div>
        //     <h2 className="text-lg font-semibold">Password</h2>
        //     <p className="text-sm text-gray-500">
        //       Change your password here. After saving, you'll be logged out.
        //     </p>
        //   </div>
        //   <div className="space-y-2">
        //     <div className="flex flex-col space-y-1">
        //       <label htmlFor="current" className="text-sm font-medium">Current password</label>
        //       <input
        //         id="current"
        //         type="password"
        //         className="border px-3 py-2 rounded-md text-sm"
        //       />
        //     </div>
        //     <div className="flex flex-col space-y-1">
        //       <label htmlFor="new" className="text-sm font-medium">New password</label>
        //       <input
        //         id="new"
        //         type="password"
        //         className="border px-3 py-2 rounded-md text-sm"
        //       />
        //     </div>
        //   </div>
        //   <div className="pt-2">
        //     <button className="bg-black text-white text-sm px-4 py-2 rounded-md">
        //       Save password
        //     </button>
        //   </div>
        // </div>
        <div><SignInCard/></div>
      )}
    </div>
  );
};

export default TabsDemo;