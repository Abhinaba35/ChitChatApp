import {useState} from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext.jsx';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} =  useAuthContext();

  const signup = async ({fullName, username , password , confirmPassword, gender}) => {
    const success = handleInputError({fullName, username, password, confirmPassword,gender})
    if (!success) return;

    setLoading(true);
    try{
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fullname: fullName, username, password, confirmPassword , gender })

        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.setItem("Chat-User", JSON.stringify(data));

        setAuthUser(data);


    }catch(error){
        toast.error(error.message || "An error occurred during signup");
    }finally {
        setLoading(false);
    }

  };

  return { loading, signup };
};

export default useSignup;

function handleInputError({fullName, username, password, confirmPassword, gender}) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("All fields are required");
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if(password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return false;
    }

    return true;
}
