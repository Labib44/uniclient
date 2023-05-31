import skeleton1 from '../../assets/skeleton/Skeleton1.jpg'
import skeleton2 from '../../assets/skeleton/skeleton2.jpg'
import skeleton3 from '../../assets/skeleton/skeleton3.jpg'
import CustomButton from '../Shared/CustomButton/CustomButton';

const Convey = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="bg-[#12141D] p-5 mx-5 md:mx-20 rounded-lg mt-10"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                >
                    <div className="">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-5">Write what you want to convey through clear, & authentic writing</h1>
                        <p className=" text-accent text-xl mt-10">AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.</p>
                    </div>
                    <CustomButton
                        buttonName={"Start 14 Days Free Trial"}
                        cssStyle={
                            "btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] mt-10"
                        }
                    ></CustomButton>

                </div>
                {/* righ side */}
                <div className='bg-white p-5 rounded-lg lg:mr-32 hover:outline outline-4 outline-secondary'
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                >
                    <div className="flex">
                        <div className=" text-xl mr-5 py-5">
                            <p className="pt-3 text-accent">Blog Outline</p>
                            <p className="pt-3 text-accent"> Blog Intro</p>
                            <p className="pt-3 text-accent">Blog Conclusion</p>
                            <p className="pt-3 text-accent">AIDA</p>
                            <p className="pt-3 text-accent">PAS</p>
                            <p className="pt-3 text-accent">Content Rewriter</p>
                            <img src={skeleton3} className='mt-3' alt="" />
                        </div>

                        <div>
                            <div className="py-5">
                                <h1 className="text-xl font-bold">Result</h1>
                                <p className=" text-accent">Here is what our AI came up with.</p>
                            </div>
                            <div>
                                <img src={skeleton1} alt="" />
                            </div>
                            <div>
                                <img src={skeleton2} alt="" />
                            </div>
                            <div>
                                <img src={skeleton2} alt="" />
                            </div>
                            <div>
                                <img src={skeleton2} alt="" />
                            </div>

                        </div>

                    </div>
                </div>




            </div>
        </div>
    );
};

export default Convey;