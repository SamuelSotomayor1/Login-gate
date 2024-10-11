import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from "./auth/login"
import { Home } from './shared/home'
import { Register } from './auth/register'
import { ForgotPassword } from './auth/forgotpassword'

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Register/>} path="/register"/>
        <Route element={<ForgotPassword/>} path="/forgotpassword"/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
