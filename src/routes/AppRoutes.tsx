import { Routes, Route, Navigate } from "react-router-dom"
import Login from "@/components/structural/Login"
import Home from "@/pages/Home";
import { useUser } from "@/logical/context/UserContext";

const AppRoutes = () => {
    const { isLoggedIn } = useUser();

    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}>
                <Route path="" />
                <Route path="/about" />
            </Route>
        </Routes>
    )
}

export default AppRoutes