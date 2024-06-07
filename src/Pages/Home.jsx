import Banner from "../Components/Banner";
import Footer from "../Components/Footer";


import NewsletterSection from "../Components/NewsletterSection";
import PostsSection from "../Components/PostsSection";
import slider1 from '../assets/images/slider4.jpg'





const Home = () => {
    return (
        <div>
           
           
            <Banner img={slider1}></Banner>
            {/* <RecentBlog></RecentBlog> */}
            <PostsSection></PostsSection>

           
           
            <NewsletterSection></NewsletterSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;