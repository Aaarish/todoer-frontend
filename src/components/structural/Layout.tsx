import LeftPane from './LeftPane'
import CardGrid from './CardGrid'

function Layout() {
    return (
        <div className="flex min-h-screen">
            <LeftPane />
            <main className="flex-1 ml-20 p-4">
                <CardGrid />
            </main>
        </div>
    )
}

export default Layout