import { createContext } from "react";
import useProducts from "../Hooks/useProducts.js";
import useFirebase from './../Hooks/useFirebase.js';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const products = useProducts();

    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={{ allContexts, products }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;