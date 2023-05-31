

const PaymentCard = ({ paymentData }) => {
    const { id, title, amount, forPackage, discribtion } = paymentData;
    return (
        <div className="bg-[#282A37] rounded-lg p-5 hover:outline outline-2 outline-secondary"
        data-aos="zoom-in-up" data-aos-duration="1500"
        >
            <div className=" h-96">
                <h1 className=" text-xl font-normal text-white">{title}</h1>
                <h1 className=" text-5xl font-semibold text-white mt-7">{amount}/<span>month</span></h1>
                <p className=" text-accent text-sm font-normal mt-4">{forPackage}</p>
                <h1 className=" text-xl font-bold text-white mt-10">What’s included:</h1>
                <p className=" text-accent text-[16px] font-medium mt-4">{discribtion}</p>
            </div>

            <div className="flex justify-center bottom-0">
                <button type="button" className="px-8 py-3 mt-28 font-semibold text-white outline outline-2 outline-gray-900 hover:outline-none rounded hover:bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF]">Start 14 Days Free Trial</button>
            </div>
        </div>
    );
};

export default PaymentCard;