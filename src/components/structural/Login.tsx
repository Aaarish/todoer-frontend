import { useUser } from "@/api/UserApi";
import { useState } from "react"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginMutation = useUser();

    return (
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-4">
            <div className="text-2xl font-bold text-center">Login</div>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    onClick={() => loginMutation.mutate({ username, password })}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login