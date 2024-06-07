

const SearchBar = ({blog}) => {

    console.log(blog)
    return (
        <div>
            <h2 className="text-3xl text-center">Search Bar</h2>
            <div className="flex justify-center mt-4">
                <form>

                    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />

                </form>

            </div>
        </div>
    );
};

export default SearchBar;