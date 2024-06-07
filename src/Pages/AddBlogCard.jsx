import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";





const AddBlogCard = ({ blog }) => {

  const axiosSecure = useAxiosSecure()


  const { _id , img, category, shortDescription,longDescription,publishedDate } = blog;






  const handleSubmit = (blog) => {



    console.log(blog)

    axiosSecure.post('/blogs',blog)
    .then(res => {
      console.log(res)
      toast.success('added sucessfully!')

      
    })
    .catch((error) => {
      console.log(error)
    })



  }


  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white  bg-clip-border  w-96">
      <div
        className="relative h-56 mx-4 -mt-6 overflow-hidden text-white  bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={img}
          alt="card-image" />
      </div>
      <div className="p-6">
        <h1 className="font-bold text-2xl">{category}</h1>
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {shortDescription}
        </h5>
       
      </div>
      <div className="p-6 pt-0">

        {/* <Link to={`/allBlogs/${_id}`}> */}

        <button onClick={() => handleSubmit(blog)} className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button">
            submit
        </button>



        {/* </Link> */}
      </div>
    </div>
  );
};

export default AddBlogCard;