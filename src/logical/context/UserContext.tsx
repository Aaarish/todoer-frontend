import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { User } from "@/logical/User"
import { loginUser } from "@/api/UserApi"

interface UserContextType {
    isLoggedIn: boolean;
    user: User | undefined;
    login: (username: string, password: string) => Promise<User | undefined>;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user') ? true : false);
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            console.log('Stored user:', parsedUser);
            setUser(parsedUser);
            setIsLoggedIn(true);
        }
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const loggedInUser = await loginUser(username, password);
            if (loggedInUser) {
                setIsLoggedIn(true);
                setUser(loggedInUser);
                localStorage.setItem('user', JSON.stringify(loggedInUser));
            }
            return loggedInUser;
        } catch (error) {
            console.error("Login failed:", error);
            return undefined;
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
        setUser(undefined);
        localStorage.removeItem('user');
    }

    return (
        <UserContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
} 