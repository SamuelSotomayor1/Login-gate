import { Navbar } from "../components/navbar"

export const Home = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-white bg-cover bg-center bg-no-repeat">
        <Navbar/>
        <img src="/paisaje1.jpg" alt="fondo home"/>
    </div>
    </>
   
  )
}