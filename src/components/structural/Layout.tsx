import LeftPane from './LeftPane'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen">
                <LeftPane />
                <main className="flex-1 ml-20 p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout