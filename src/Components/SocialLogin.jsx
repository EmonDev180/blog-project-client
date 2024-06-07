import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";





const SocialLogin = () => {

    const {googleSignIn} = useAuth()

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate()


    const handleGoogleSignin = () => {

        googleSignIn()
        .then(result => {
            console.log(result.user)

            const userInfo = {
                email:result.user?.email,
                name:result.user?.displayName,
            }

            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');

            })
        })
        .catch(error => {
            console.log(error)
        })







    }
    return (
        <div>
            <div>
                <div className="px-8">

                    <button onClick={handleGoogleSignin} className="btn btn-block">
                        <FaGoogle className="mr-4"></FaGoogle>
                        Google
                    </button>


                </div>

            </div>
        </div>
    );
};

export default SocialLogin;