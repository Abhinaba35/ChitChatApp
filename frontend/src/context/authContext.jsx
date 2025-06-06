import { createContext } from 'react';
import { useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children}) => {

    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("Chat-User")) || null);

    return(
        <AuthContext.Provider value={{authUser , setAuthUser}}>
            {children}
        </AuthContext.Provider>
    );
}