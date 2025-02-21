
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authprovider/AuthProvider';
import useAxiosPublic from './../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import SocialLogin from '../Components/SocialLogin';


const Register = () => {

    const axiosPublic = useAxiosPublic()
 
    const {user,createUser} = useContext(AuthContext)


    const handleSubmit = e => {

         e.preventDefault()

         const form = e.target;

        const name = form.name.value;
        const email = form.email.value;

        const password = form.password.value;

        console.log(name,email,password)

        createUser(email,password)
        .then((user) => {

           

            

            const userInfo ={
                name : name,
                email:email,


            }

            // create user entry inn database
            axiosPublic.post('/users',userInfo)

            .then(res => {
                if(res.data.insertedId){

                    console.log('user addeeded the database')
                    toast.success('Successfully toasted!')
                    
                }
            })

            console.log(user)
           
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
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-2xl font-bold text-center">Register now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                    <p className='my-4 text-center'>Already have a account  <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;