import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from "./components/login"
import { Home } from './components/home'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<ProtectedRoutes/>}>
        </Route>

      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
