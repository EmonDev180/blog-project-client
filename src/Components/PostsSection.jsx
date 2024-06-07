import { useEffect, useState } from "react";
import PostsCard from "./PostsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from '../assets/images/download (1).jpeg'
import img2 from '../assets/images/download (2).jpeg'
import img3 from '../assets/images/download (3).jpeg'
import img4 from '../assets/images/download (4).jpeg'
import img5 from '../assets/images/download (5).jpeg'


const PostsSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };




    const [posts, setPosts] = useState();

    useEffect(() => {

        fetch('/public/postBlog.json')
            .then(res => res.json())
            .then(data => setPosts(data));







    }, [])




    console.log(posts);

    return (
        <div className=" flex ">



            <div className=" grid grid-cols-3 gap-4 justify-items-center w-3/4 ">


                {
                    posts?.map(post => <PostsCard key={post.id} post={post}></PostsCard>)
                }


            </div>



            <div className="border w-1/4">
                <h2 className="text-3xl font-bold text-center">Latest Blog</h2>


                <div className="">
                    <div className="mt-8">
                        <h1 className="font-bold"> How Technology is Shaping Our Future</h1>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-bold"> Exploring the Depths of the Ocean: Mysteries Unveiled</h1>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-bold"> Sustainable Living: Tips for an Eco-Friendly Lifestyle</h1>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-bold">Mindfulness and Meditation: A Guide to Inner Peace</h1>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-bold"> Investing in Cryptocurrency: A Beginner’s Guide</h1>
                    </div>
                    <div className="mt-8">
                        <h1 className="font-bold"> The Digital Nomad Lifestyle: Work from Anywhere</h1>
                    </div>
                </div>

                <div>

                    <h1 className="text-3xl text-center mt-4 font-bold">Recent Blog</h1>

                    <div className="mt-10  gap-10">

                        <div className="flex gap-2">
                            <img src={img1} className="w-[150px] h-[100px] " alt="" />
                            <h3 className="font-bold">Space travel is becoming a reality, with missions to Mars and beyond on the horizon. </h3>
                            
                        </div>


                      <div className="flex gap-2 mt-2">
                            <img src={img2} className="w-[150px] h-[100px] mt-4" alt="" />
                            <h3 className="mt-2 font-bold">The digital nomad lifestyle allows you to work from anywhere in the world </h3>
                            
                        </div>  


                        <div className="flex gap-2 mt-2">
                            <img src={img3} className="w-[150px] h-[100px] mt-4" alt="" />
                            <h3 className="mt-2 font-bold">The digital nomad lifestyle allows you to work from anywhere in the world </h3>
                            
                        </div>  

                        <div className="flex gap-2 mt-2">
                            <img src={img4} className="w-[150px] h-[100px] mt-4" alt="" />
                            <h3 className="mt-2 font-bold">The digital nomad lifestyle allows you to work from anywhere in the world </h3>
                            
                        </div> 

                        <div className="flex gap-2 mt-2">
                            <img src={img5} className="w-[150px] h-[100px] mt-4" alt="" />
                            <h3 className="mt-2 font-bold">The digital nomad lifestyle allows you to work from anywhere in the world </h3>
                            
                        </div>  

                        


                    </div>

                </div>




            </div>



        </div >
    );
};

export default PostsSection;