import { Routes, Route, Navigate } from "react-router-dom"
import Login from "@/components/structural/Login"
import Home from "@/pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "@/state-management/Store";

const AppRoutes = () => {
    const user = useSelector((state: RootState) => state.authContextSliceReducer.isLoggedIn)

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" replace />} />
        </Routes>
    )
}

export default AppRoutes