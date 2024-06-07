
const PostsCard = ({ post }) => {

    const {img,blogName,publishedDate} = post;







    return (

        <div>


            <div className="card w-64 h-full  bg-base-100 border-solid border-2 border-gray-200  ">
                <figure>
                    <img src={img}  alt="Shoes" />
                </figure>
                <div className="mt-4">
          
               
                    <h2 className="card-title ">{blogName}</h2>
                </div>

                <div className="mt-4">
                
                    
                    <p> publishedDate:{publishedDate}</p>
                        
                </div>

            </div>
     

          
        </div>










    );
};

export default PostsCard;