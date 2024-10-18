import { useContext, createContext, useState, useEffect} from "react";
import { AuthResponse } from "../types/types";

interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated : false,
    getAccessToken: () => {},
    saveUser: (userData: AuthResponse) => {},
    getRefreshToken: () => {},
});

export function AuthProvider( {children}: AuthProviderProps){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");
   // const [refreshToken, setRefreshToken] = useState("");

    function getAccessToken(){
        return accessToken;
    }

    function getRefreshToken(){
        const token = localStorage.getItem("token");
        if(token){
            const { refreshToken} = JSON.parse(token);
            return refreshToken;
        }

    }

    function saveUser(userData: AuthResponse){
        setAccessToken(userData.body.accessToken);
       // setRefreshToken(userData.body.refreshToken);

        localStorage.setItem("token", JSON.stringify(userData.body.refreshToken));
        setIsAuthenticated(true);

    }

    return (
        <AuthContext.Provider value={{isAuthenticated, getAccessToken, saveUser, getRefreshToken}}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);