import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from "./auth/login"
import { Home } from './shared/home'

function App() {

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Login/>} path="/login"/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
