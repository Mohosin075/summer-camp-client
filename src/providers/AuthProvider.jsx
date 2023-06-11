/* eslint-disable react/prop-types */
import { createContext } from "react";
import app from "../../firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    const user = {name : 'md mohosin'}
    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;