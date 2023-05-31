import loderImg from '../../assets/Frame 1136.png'
import CustomButton from '../Shared/CustomButton/CustomButton';
const Tools = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
                <div className=" flex relative "
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                >
                    <div className='bg-white p-5 rounded-lg lg:mr-32 hover:outline outline-4 outline-secondary'>
                        <div className="py-5">
                            <h1 className="text-xl font-bold">Result</h1>
                            <p className=" text-accent">Here is what our AI came up with.</p>
                        </div>
                        <div className=" bg-[#FAFAFA] p-5 rounded-lg">
                            <p className="pt-2">Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.</p>
                            <p className="pt-2">Agitate: You have no idea how much sales tax to charge your customers in each state.</p>
                            <p className="pt-2">Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!</p>
                        </div>

                        <div className=" bg-[#FAFAFA] p-5 mt-4">
                            <p className="pt-2">Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.</p>
                            <p className="pt-2">Agitate: You have no idea how much sales tax to charge your customers in each state.</p>
                            <p className="pt-2">Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!</p>
                        </div>
                    </div>
                    <div className=' absolute w-full lg:ml-52'>
                        <img src={loderImg} className='w-full' alt="loder" />
                    </div>
                </div>
                {/* righ side */}
                <div className="bg-[#12141D] p-5 mx-5 md:mx-20 rounded-lg mt-10"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                >
                    <div className="">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-5">Create content efficiently and quickly with great AI writing tools</h1>
                        <p className=" text-accent text-xl mt-10">150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.</p>
                    </div>

                    <CustomButton
                        buttonName={"Start 14 Days Free Trial"}
                        cssStyle={
                            "btn bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] mt-10"
                        }
                    ></CustomButton>

                </div>
            </div>
        </div>
    );
};

export default Tools;