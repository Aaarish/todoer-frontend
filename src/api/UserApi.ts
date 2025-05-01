import toast from "react-hot-toast";
import axiosInstance from "./AxiosInstance"
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setAuthContext } from "@/state-management/AuthContextSlice";
import { useNavigate } from "react-router-dom";

export interface User {
    user_id: string,
    username: string,
}

export interface Credentials {
    username: string,
    password: string,
}

export const loginUser = async (credentials: Credentials): Promise<User> => {
    const res = await axiosInstance.post<User>(`/users/login`, credentials)
    if (res.status === 201) return res.data
    throw new Error('Login failed')
}

export const useUser = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()

    return useMutation({
        mutationFn: (credentials: Credentials) => loginUser(credentials),
        onSuccess: (userData: User) => {
            toast.success('Logged in successfully !!')
            dispatch(setAuthContext(userData))
            nav('/')
        },
        onError: () => toast.error('Invalid credentials')
    })
}

