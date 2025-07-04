import { useState } from "react";
import { useAuthContext } from "../context/authContext.jsx";
import toast from "react-hot-toast";


const useLogout = () => {
 const [loading , setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();


 const  logout = async ()=> {
    setLoading(true);
    try{
        const res = await fetch("/api/auth/logout",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }

        localStorage.removeItem("Chat-User");
        setAuthUser(null);

    }catch(error){
        toast.error(error.message || "An error occurred during logout");
    }finally{
        setLoading(false);
    }
};
    return { loading, logout };
    };

export default useLogout;
