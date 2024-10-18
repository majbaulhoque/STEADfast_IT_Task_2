import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";



const NavBar = () => {
    return (
        <div className="bg-black">
            <nav className="flex max-w-7xl mx-auto justify-between items-center py-5">
                <div>
                    <Logo />
                </div>
                <ul className="space-x-5 text-md text-white">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/'>Services</NavLink>
                    <NavLink to='/'>Contact</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;