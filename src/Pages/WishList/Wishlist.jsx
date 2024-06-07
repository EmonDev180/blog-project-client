
import useWislist from "../../Hooks/useWislist";
import WishlistCard from "./wishlistCard";


    



const Wishlist = () => {

    const [wishlists] = useWislist()








    return (
        <div>


            <div>wishlist:{wishlists?.length}</div>
            <div className="grid grid-cols-3 gap-12">

            {
                wishlists?.map(blog => <WishlistCard key={blog._id} blog={blog}></WishlistCard>)
            }

            </div>
           
        </div>
    );
};

export default Wishlist;