import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Login } from "./auth/login"
import { Home } from './shared/home'
import { Register } from './auth/register'
import { ForgotPassword } from './auth/forgotpassword'
import ProtectedRoute from './routes/ProtectedRoute'
import { AuthProvider } from './auth/authProvider'
import { Game } from './shared/game'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
    path: "forgotpassword",
    element: <ForgotPassword/>
    },
    {
      path: "/",
      element: <ProtectedRoute/>,
      children: [
        {
          path: "game",
          element: <Game/>
        },
      ],
    },
  ]);

  return (
  <>
    <AuthProvider>
      <RouterProvider router = {router}/>
    </AuthProvider>
  </>
  )
}

export default App
