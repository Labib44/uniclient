import { BiPlayCircle } from "react-icons/bi";
import CustomButton from "../Shared/CustomButton/CustomButton";

const Banner = () => {
    return (
        <div className="container mx-auto bg-[#12141D] my-32 md:my-20">
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white p-2">Write better content for your <span className=" bg-gradient-to-l from-[#FFC947] to-[#FC6739] inline-block text-transparent bg-clip-text p-2 ">Facebook Ads</span> </h1>
                        <p className="py-5 text-accent text-xl">Artificial intelligence writting tool helps you create blogs, social media websites and much more..</p>
                        
                        <CustomButton
                            buttonName={"Start 14 Days Free Trial"}
                            cssStyle={
                                "btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]"
                            }
                        ></CustomButton>
                        <div className="flex w-full justify-center text-white p-3 mt-2">
                            <BiPlayCircle className="w-5 h-5"></BiPlayCircle>
                            <p className="ml-2">Watch A Demo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;