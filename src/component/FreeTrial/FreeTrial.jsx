const FreeTrial = () => {
    return (
        <div className="p-6 py-12 container mx-auto ">
            <div className=" bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] p-12 rounded-lg hover:outline outline-2 outline-secondary">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className=" text-white text-2xl md:text-3xl lg:text-4xl tracking-tighter font-bold">It will help you improve your writing <br /> & bring ideas more c learly.</h2>
                    
                    <button type="button" className="px-8 py-3 mt-5 lg:mt-0 font-semibold rounded bg-white">Start 14 Days Free Trial</button>
                </div>
            </div>
        </div>
    );
};

export default FreeTrial;