import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const WishlistCard = ({ blog }) => {

    const axiosSecure = useAxiosSecure()



    const { _id, title, img, category, short_description, long_description } = blog;

 



    const handleRemoveWishlist = (id) => {

      

        axiosSecure.delete(`/wishlists/${id}`)
        .then(res => {
            console.log(res.data)

        })
        .catch(error => {
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
                    <div className="card-actions justify-center">
                        <button onClick={() => handleRemoveWishlist(blog._id)}  className="btn btn-neutral"> remove Wislist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WishlistCard;