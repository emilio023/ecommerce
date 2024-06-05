import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeLink = 'block inline-block py-1 text-black hover:text-orange-600	 cursor-pointer mr-4'
    const btnLink = "block inline-block py-1 text-black hover:text-orange-600	 cursor-pointer mr-4"
    return (
        <header className="text-gray-600 body-font bg-pink-600	">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl font-semibold text-black">Mr Beast</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/" className={({ isActive }) => isActive ? activeLink : btnLink}>Inicio</NavLink>
                    <NavLink to="/cursos" className={({ isActive }) => isActive ? activeLink : btnLink}>Productos</NavLink>
                    <NavLink to="/conocenos" className={({ isActive }) => isActive ? activeLink : btnLink}>Conocenos</NavLink>
                    {/* <a className={btnLink}>Inicio</a>
                    <a className={btnLink}>Cursos</a> */}

                </nav>
                <NavLink to="/login" className={({ isActive }) => isActive ? activeLink : btnLink}>Login</NavLink>
                <NavLink to="/contactanos" className={({ isActive }) => isActive ? activeLink : btnLink}>Contáctanos</NavLink>
                <NavLink to="/registro" className={({ isActive }) => isActive ? activeLink : btnLink}>Carrito</NavLink>

                {/* <a className={btnLink}>Login</a>
                <a className={btnLink}>Registro</a> */}
            </div>
        </header>
    )
}

export default NavBar;