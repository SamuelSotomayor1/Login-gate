import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>   
    <div className="relative z-2 w-full bg-gray-100 py-8 shadow-sm">
        <nav className="flex justify-between px-4 py-4 border">
            <div className="border">
            </div>
            <div className="border">
            </div>
            <div className="border">
                <Link to="/login">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Iniciar sesión</button>
                </Link>
            </div>
        </nav>
    </div>
    </>
  )
}
