import { useEffect, useState } from "react";
import AddBlogCard from "./AddBlogCard";
import Banner from "../Components/Banner";

import slider3 from '../assets/images/slider2.jpg'




const AddBlogs = () => {

    const [blogs, SetBlogs] = useState()


    useEffect(() => {
        fetch('http://localhost:4000/posts')
            .then(res => res.json())
            .then(data => SetBlogs(data))



    }, [])

    console.log(blogs)

    return (

        <div>

            <Banner img={slider3}></Banner>
      

            <div className="grid grid-cols-3 w-3/3 gap-4 mt-4">
                {
                    blogs?.map(blog => <AddBlogCard key={blog._id} blog={blog}></AddBlogCard>)
                }

            </div>
        </div>

    );
};

export default AddBlogs;