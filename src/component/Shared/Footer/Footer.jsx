

const Footer = () => {
    return (
        <footer className="p-6 container mx-auto bg-[#12141D] text-white ">
            <div className=" grid grid-cols-2 gap-10 lg:gap-64 sm:grid-cols-3 md:grid-cols-4 my-20">
                <div className="flex flex-col ">
                    <h2 className=" font-semibold text-xl mb-5">Company</h2>
                    <div className="flex flex-col space-y-2 text-sm ">
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">About</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Features </a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Works</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#"> Career</a>

                    </div>
                </div>
                <div className="flex flex-col ">
                    <h2 className="font-semibold text-xl mb-5">Help</h2>
                    <div className="flex flex-col space-y-2 text-sm ">
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Customer Support</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Delivery Details</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Terms & Conditions</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Privacy Policy</a>

                    </div>
                </div>
                <div className="flex flex-col ">
                    <h2 className="font-semibold text-xl mb-5">Resources</h2>
                    <div className="flex flex-col space-y-2 text-sm ">
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Free eBooks</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Development Tutorial</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#"> How to - Blog</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Youtube Playlist</a>

                    </div>
                </div>
                <div className="flex flex-col ">
                    <h2 className="font-semibold text-xl mb-5">Likes</h2>
                    <div className="flex flex-col space-y-2 text-sm ">
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Free eBooks</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Development Tutorial</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">How to - Blog</a>
                        <a className=" text-sm font-normal pb-3" rel="noopener noreferrer" href="#">Youtube Playlist</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;