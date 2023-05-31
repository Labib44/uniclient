import logo from '../../assets/logo/logo.jpg'
import logo2 from '../../assets/logo/logo2.jpg'
import logo3 from '../../assets/logo/logo3.jpg'
import logo4 from '../../assets/logo/logo4.jpg'
import logo5 from '../../assets/logo/logo5.jpg'
import logo6 from '../../assets/logo/logo6.jpg'
import logo7 from '../../assets/logo/logo7.jpg'
import logo8 from '../../assets/logo/logo8.jpg'
import CoustomerCard from './CoustomerCard';

const Coustomers = () => {
    const logoData=[
        {
            id:1,
            icon:logo
        },
        {
            id:2,
            icon:logo2
        },
        {
            id:3,
            icon:logo3
        },
        {
            id:4,
            icon:logo4
        },
        {
            id:5,
            icon:logo5
        },
        {
            id:6,
            icon:logo6
        },
        {
            id:7,
            icon:logo7
        },
        {
            id:8,
            icon:logo8
        },
    ]
    return (
        <div className='container mx-auto'>
            <h1 className=' text-white text-2xl text-center p-4 mb-20'>Trusted by nearly 5000+ paying customers</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            >
                    {
                        logoData.map(loData => <CoustomerCard
                            key={loData.id}
                            loData={loData}
                        ></CoustomerCard>)
                    }
                </div>
        </div>
    );
};

export default Coustomers;