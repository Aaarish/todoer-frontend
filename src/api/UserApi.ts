import { User } from "@/logical/User";
import axiosInstance from "./AxiosInstance"


export const loginUser = async (username : string, password : string) : Promise<User> => {
    const response = await axiosInstance.post(`/users/login`, {username, password})
    return response.data;
}
