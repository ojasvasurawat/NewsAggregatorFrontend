
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Profile() {

    const [changedName, setChangedName] = useState("");
    const [changedPassword, setChangedPassword] = useState("");
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click(); 
    };

    const handleAvatarChange = async (e) => {
        const file = e.target.files?.[0];

        if (!file) return;

        // Preview the image
        const previewUrl = URL.createObjectURL(file);
        setAvatarUrl(previewUrl); // Assuming you're using useState

        console.log('File selected:');
        console.log('Name:', file.name);
        console.log('Type:', file.type);
        console.log('Size:', file.size);
        console.log('Preview URL:', previewUrl);

        const toBase64 = async (file) => {
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
        };


        const base64 = await toBase64(file);

        try {
            const response = await axios.post("http://localhost:8000/avatar", {
                avatarUrl: base64
            },{
                headers:{
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            });

            if (response.data) {
                toast.success("Avatar uploaded successfully");
            }
        } catch (error) {
            console.error("Upload failed:", error);
            if (error.response?.data?.message) {
                toast.error(`Upload failed: ${error.response.data.message}`);
            } else {
                toast.error("Upload failed: Unknown error occurred");
            }
        }
        


        
    };

    const handleUpdate = async () => {

        if (changedPassword === "" || changedName === "" ) {
            toast.warning("Enter the details");
            return;
        }
        if (changedPassword.length < 8 ) {
            toast.warning("Password must be at least 8 characters long.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/profile", {
                name: changedName,
                password: changedPassword
            },{
                headers:{
                    'Content-Type': 'application/json',
                    'authorization': localStorage.getItem('authorization')
                }
            });

            if (response.data) {
                toast.success("Account updated successfully");
            }
        } catch (error) {
            console.error("Update failed:", error);
            if (error.response?.data?.message) {
                toast.error(`Signup failed: ${error.response.data.message}`);
            } else {
                toast.error("Update failed: Unknown error occurred");
            }
        }
    };

   
    return (
        <>
        <SidebarProvider className="relative flex">
          <AppSidebar />
          <main className="flex-1">
            <SidebarTrigger className="fixed bg-white"/>
            <div>
                
                <h1 className="text-center font-bold text-4xl font-sans text-indigo-500 pt-7">Profile</h1>
                <div className=" justify-self-center mt-10 h-150 border rounded-xl w-120">
                    <div className="space-y-6">
                        <h2 className="text-center text-3xl font-bold text-gray-900">Edit Profile</h2>

                        <div className="space-y-4">
                            <div className="grid justify-items-center">
                                {avatarUrl && <img src={avatarUrl} alt="Avatar Preview" width="100" />}
                                <button onClick={handleButtonClick}>Upload Avatar</button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleAvatarChange}
                                    accept="image/*"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Username
                                </label>
                                <input
                                    id="name"
                                    type="name"
                                    value={changedName}
                                    onChange={(e) => setChangedName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your new username"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    {/* <a href="#" className="text-sm text-blue-600 hover:underline">
                                        Forgot password?
                                    </a> */}
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    value={changedPassword}
                                    onChange={(e) => setChangedPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your new password"
                                />
                            </div>

                            
                        </div>

                        <button
                            onClick={handleUpdate}
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-900 text-white font-medium rounded-lg transition duration-200"
                        >
                            Update
                        </button>
                    </div>

                </div>
            </div>
          </main>
        </SidebarProvider>
        </>
    );
}