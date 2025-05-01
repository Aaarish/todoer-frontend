import toast from "react-hot-toast";
import axiosInstance from "./AxiosInstance"
import { useMutation } from "@tanstack/react-query";

export interface User {
    id: string,
    username: string,
    password: string,
}

export interface Credentials {
    username: string,
    password: string,
}

export const loginUser = async (credentials: Credentials) => {
    return (await axiosInstance.post<User>(`/users/login`, credentials)).data
}

export const useUser = () => useMutation({
    mutationFn: (credentials: Credentials) => loginUser(credentials),
    onSuccess: () => toast.success('Logged in successfully !!'),
    onError: () => toast.error('Invalid credentials')
})

