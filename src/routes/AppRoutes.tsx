import { Routes, Route, Navigate } from "react-router-dom"
import Login from "@/components/structural/Login"
import Home from "@/pages/Home";
import { useSelector } from "react-redux";
import { RootState } from "@/state-management/Store";
import Layout from "@/components/structural/Layout";
import Settings from "@/pages/Settings";

const AppRoutes = () => {
    const user = useSelector((state: RootState) => state.authContextSliceReducer.isLoggedIn)

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={user ? <Layout /> : <Navigate to="/login" replace />}>
                <Route path="" element={<Home />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes