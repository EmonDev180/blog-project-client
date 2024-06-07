

const NewsletterSection = () => {

    const handleEmail = e => {
        e.preventDefault()

        const email = e.target.email.value;

        console.log(email)


    }
    return (
        <div>
            <div className="text-5xl text-center m-12 ">
                Our NewsLetter
            </div>
            <div className="hero min-h-60 overflow-hidden mt-4" style={{ backgroundImage: 'url(https://i.ibb.co/S3ZHcZ4/images.jpg)' }}>
                <div>

                    <div className="grid justify-items-center gap-4">
                        <h1 className="text-5xl font-bold">join our NewsLetter</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero delectus nemo tempore fugiat dicta dolorem adipisci soluta nostrum laboriosam.</p>

                        <div className="join mt-4">
                            <form onSubmit={handleEmail}>
                                <div className="join">
                                    <input  type="email" className="input input-bordered join-item" name="email"  placeholder="Email" />
                                    <button className="btn join-item rounded">Subscribe</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;