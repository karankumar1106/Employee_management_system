
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // Directly gets { employees: [...], admin: [...] } from AuthProvider
  const authData = useContext(AuthContext);

  // Restore active user session on page refresh

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedData = JSON.parse(loggedInUser);
      setUser(parsedData.role);
      if (parsedData.data) {
        setLoggedInUserData(parsedData.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    // 1. Check Admin
    const admin = authData?.admin?.find(
      (a) => a.email === email && a.password === password
    );

    // console.log("Admin check:", admin);

    if (admin) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin",data:admin }));
      return;
    }

    // 2. Check Employee
    const employee = authData?.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {

      const {password, ...employeeData} = employee; // Exclude password from stored data
      setUser("employee");
      setLoggedInUserData(employeeData);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employeeData })
      );
      return;
    }

    // 3. Fallback for wrong credentials
    alert("Invalid credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} data={loggedInUserData} />}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
