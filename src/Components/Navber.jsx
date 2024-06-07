import  { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';


const Navber = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {

        logOut()
            .then(() => {

            })
            .catch((error) => {

                console.log(error)
            })


    }

    return (
        <div className="navbar fixed  z-10 bg-gray-500 bg-opacity-30 text-white max-w-screen-xl  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  w-52">


                    </ul>
                </div>
                <a className=" text-xl">daisyUI</a>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addBlogs'>AddBlogs</NavLink></li>
                    <li><NavLink to='/allBlogs'>All blogs</NavLink></li>
                    <li><NavLink to='/featherd'>Feathured Blog </NavLink></li>
                    <li><NavLink to='/wishlist'>Wishlist </NavLink></li>


                </ul>
            </div>

            <div className="navbar-end">
                {/* <button className="btn btn-outline btn-warning">Login</button> */}
                {
                    user ?
                        <button onClick={handleLogout} className="btn btn-outline btn-warning">Logout</button>

                        :

                        

                        <Link to="/login">
                            <button className="btn btn-outline btn-warning">Login</button>
                        </Link>
                       
                }





            </div>

        </div>
    );
};

export default Navber;
