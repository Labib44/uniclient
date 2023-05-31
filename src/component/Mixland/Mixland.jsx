const Mixland = () => {
    return (
        <div className='container mx-auto'>
            <h1 className=' text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center my-20'>Mixland helps you <br/> build beautiful website</h1>
            <div className='lg:flex lg:mx-64'>
                <div className='flex flex-col m-5'>
                    <button type="button" className="px-8 py-3 mt-2 font-semibold text-white outline outline-2 outline-gray-700 hover:outline-none rounded hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Blog Headlines</button>
                    <button type="button" className="px-8 py-3 mt-2 font-semibold text-white outline outline-2 outline-gray-700 hover:outline-none rounded hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Blog Intros</button>
                    <button type="button" className="px-8 py-3 mt-2 font-semibold text-white outline outline-2 outline-gray-700 hover:outline-none rounded hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Facebook Ads</button>
                    <button type="button" className="px-8 py-3 mt-2 font-semibold text-white outline outline-2 outline-gray-700 hover:outline-none rounded hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Product Description</button>
                    <button type="button" className="px-8 py-3 mt-2 font-semibold text-white outline outline-2 outline-gray-700 hover:outline-none rounded hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">PAS Copywriting Formula</button>
                </div>

                <div className='bg-[#282A37] rounded-lg mx-10 p-5 hover:outline outline-2 outline-secondary'
                data-aos="zoom-in-up" data-aos-duration="1500"
                >
                    <div className='-mt-10'>
                        <span className='text-[#F23936] text-7xl  opacity-90'>.</span>
                        <span className='text-[#FABB18] text-7xl  opacity-90'>.</span>
                        <span className='text-[#45C646] text-7xl  opacity-90'>.</span>
                    </div>

                    <div className="grid grid-cols-1 divide-y divide-[#313342]">
                        <p className=' text-accent p-4'>4 Blog Headlines Generated</p>
                        <h1 className='text-white text-xl font-semibold p-4'>Create original content that ranks for SEO</h1>
                        <h1 className='text-white text-xl font-semibold p-4'>Any mechanical keyboard enthusiasts in design?</h1>
                        <h1 className='text-white text-xl font-semibold p-4'>The More Important the Work, the More Important the Rest</h1>
                        <h1 className='text-white text-xl font-semibold p-4'>How to design a product that can grow itself 10x in year</h1>
                        <h1 className='text-white text-xl font-semibold p-4'>Any mechanical keyboard enthusiasts in design?</h1>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Mixland;