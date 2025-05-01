import AppRoutes from "./routes/AppRoutes"
import { UserProvider } from "./logical/context/UserContext"
import { Provider } from "react-redux"
import {store} from './redux/store'

function App() {
  return (
    // <Provider store={store}>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    // </Provider>
  )
}

export default App
