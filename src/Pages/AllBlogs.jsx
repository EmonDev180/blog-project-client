import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from '../Hooks/useAxiosSecure';
import AllblogCard from '../Components/AllblogCard';
import SearchBar from '../Components/SearchBar';


const AllBlogs = () => {


  const axiosSecure = useAxiosSecure();
  



  const { data: blogs = [] } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await axiosSecure.get('/blogs')

      return res.data;

    }



  })


  return (
    <div>
      <SearchBar></SearchBar>
      <div className='grid  grid-cols-3 gap-5 mt-12 ml-8'>


        {
          blogs.map(blog => <AllblogCard key={blog._id} blog={blog}></AllblogCard>)
        }
      </div>
    </div>
  );
};

export default AllBlogs;