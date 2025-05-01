import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, User } from "lucide-react"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block">
                            TODOer
                        </span>
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search..."
                                className="pl-8 w-full md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                            <span className="sr-only">User</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar 