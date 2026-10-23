import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage.jsx";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(()=>{
        const {employees,admin} = getLocalStorage()
        return {employees: employees || [], admin: admin || []}
    })

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider> 
        </div>
  )
}

export default AuthProvider