
import { Link } from 'react-router-dom';
import useAxiosSecure from './../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';



const AllblogCard = ({ blog }) => {

    const axiosSecure = useAxiosSecure()

    const { _id, title, img, category, short_description, long_description } = blog;

    const handleOnSubmit = (blog) => {

        console.log(blog)
        axiosSecure.post('/wishlists', blog)
            .then(res =>
                console.log(res.data),
                toast.success('wishlist added sucessfully!')

            )
            .catch((error) => {
                console.log(error)
            })


    }



    return (
        <div>


            <div className="card card-compact w-80 h-full bg-base-100 shadow-xl">
                <figure className="w-full h-[200px]">
                    <img src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{long_description}</p>
                    <div className="card-actions flex justify-start">
                        <button onClick={() => handleOnSubmit(blog)} className="btn btn-neutral">Wislist</button>

                        <Link to={`/details/${_id}`}>
                            <button className='btn btn-neutral'>BlogDetails</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllblogCard;