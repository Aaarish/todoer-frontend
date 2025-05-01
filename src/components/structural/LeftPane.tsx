import { useState } from "react"
import { cn } from "@/lib/utils"
import { Home, Settings, User, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearAuthContext } from "@/state-management/AuthContextSlice"
import toast from "react-hot-toast"

const LeftPane = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const nav = useNavigate()

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(clearAuthContext())
    toast.success('Logged out successfully !')
    nav('/login')
  }

  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: Home, label: "Home", handleClick: () => nav('/') },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings", handleClick: () => nav('/settings') },
    { icon: LogOut, label: "Logout", handleClick: handleLogout },
  ]

  return (
    <div
      className={cn(
        "fixed left-0 top-0 h-screen bg-card border-r transition-all duration-350 ease-in-out",
        isExpanded ? "w-64" : "w-20"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col h-full p-4">
        {/* <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-primary rounded-full" />
          {isExpanded && (
            <span className="ml-3 text-lg font-semibold">TODOer</span>
          )}
        </div> */}

        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={cn(
                    "flex items-center w-full p-2 rounded-md hover:bg-accent transition-colors",
                    isExpanded ? "justify-start" : "justify-center"
                  )}
                  onClick={item?.handleClick}
                >
                  <item.icon className="h-5 w-5" />
                  {isExpanded && (
                    <span className="ml-3">{item.label}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default LeftPane 