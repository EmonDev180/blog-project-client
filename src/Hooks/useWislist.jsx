import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";





const useWislist = () => {


    
    const axiosSecure = useAxiosSecure();




    const {  data: wishlists = [] } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
          const res = await axiosSecure.get('/wishlists');
    
          return res.data;
    
        }
    
    
    
      })

      return[wishlists]

    
    
    
   
    
};

export default useWislist;