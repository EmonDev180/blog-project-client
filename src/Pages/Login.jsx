import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";

import toast from "react-hot-toast";
import SocialLogin from "../Components/SocialLogin";



const Login = () => {


    const {signin} = useContext(AuthContext)

    const handleSubmit = e => {

        e.preventDefault()

        const form = e.target;

     
       const email = form.email.value;

       const password = form.password.value;

       console.log(email,password)

       signin(email,password)
       .then((result) => {
      

        console.log(result.user)
        toast.success(' Logged Successfully!')
      
          
       })
       .catch((error) => {
           console.log(error)
       })
   }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                    <img src='https://i.ibb.co/mH1chs8/contact.png' alt="" />
                  
                   


                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit}  className="card-body">
                        <h1 className="text-2xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="submit" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className='my-4 text-center'>have account  <Link className='text-orange-500 font-bold' to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;