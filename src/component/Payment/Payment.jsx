import PaymentCard from "./PaymentCard";


const Payment = () => {

    const paymentsData = [
        {
            id: 1,
            title: 'Starter Plan',
            amount: '$29',
            forPackage: 'This package is suitable for teams 1-15 people.',
            discribtion: '10 GB Dedicated Hosting Free Best for Developers, Freelancers 1 Year Support',
        },
        {
            id: 2,
            title: 'Basic Plan',
            amount: '$79',
            forPackage: 'This package is suitable for teams 1-50 people.',
            discribtion: '15 GB Dedicated Hosting Free Best for Developers, Freelancers 5 Year Support Free Custom Domain Basic Statistics',
        },
        {
            id: 3,
            title: 'Premium Plan',
            amount: '$129',
            forPackage: 'This package is suitable for teams 1-100 people.',
            discribtion: '20 GB Dedicated Hosting FreeBest for Developers, Freelancers Unlimited Support Free Custom Domain Full Statistics',
        },

    ]
    return (
        <div className=" container mx-auto">
            <h1 className=" text-white text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-20">Make the wise decision <br /> for your business</h1>
            <p className=" text-accent text-center p-5">Choose from our affordable 3 packages</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 lg:mx-64'>
                {
                    paymentsData.map(paymentData => <PaymentCard
                        key={paymentData.id}
                        paymentData={paymentData}
                    ></PaymentCard>)
                }
            </div>

        </div>
    );
};

export default Payment;