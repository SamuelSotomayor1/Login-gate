
export const Navbar = () => {
  return (
    <>   
    <div className="relative z-10 w-full bg-gray-900 shadow-sm">
        <nav className="relative flex items-center justify-between w-full max-w-screen-xl px-5 py-5 mx-auto text-white lg:px-2 lg:shadow-none">
            <div className="absolute inset-0 z-20 w-full h-full shadow-md opacity-50 lg:hidden">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hola</button>
            </div>
        </nav>
    </div>
    </>
  )
}
