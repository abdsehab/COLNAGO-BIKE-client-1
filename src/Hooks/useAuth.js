import { useContext } from "react"
import { AuthContext } from "./../Context/AuthProvider.js"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;