import imgage from '../../assets/review/Ellipse 14.png'
import imgage1 from '../../assets/review/Ellipse 14 (1).png'
import imgage2 from '../../assets/review/Ellipse 14 (2).png'
import imgage3 from '../../assets/review/Ellipse 14 (3).png'
import imgage4 from '../../assets/review/Ellipse 14 (4).png'
import imgage5 from '../../assets/review/Ellipse 14 (5).png'
import imgage6 from '../../assets/review/Ellipse 14 (6).png'
import imgage7 from '../../assets/review/Ellipse 14 (7).png'
import vector from '../../assets/review/Vector (7).png'
import ReviewCard from './ReviewCard'

const Review = () => {
    const reviewsData = [
        {
            id: 1,
            name: 'Darrell Steward',
            email: 'darrell@gmail.com',
            image: imgage,
            logo: vector,
            tag:'#another',
            comment: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            email: 'leslie@gmail.com',
            image: imgage1,
            logo: vector,
            tag:'#postcrafts',
            comment: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.',
        },
        {
            id: 3,
            name: 'Jenny Wilson',
            email: 'jenny@gmail.com',
            image: imgage2,
            logo: vector,
            tag:'#make_it_fast',
            comment: 'This is a top quality product. No need to think twice before making it live on web.',
        },
        {
            id: 4,
            name: 'Kristin Watson',
            email: 'kristin@gmail.com',
            image: imgage3,
            logo: vector,
            tag:'#postcrafts',
            comment: 'Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.',
        },
        {
            id: 5,
            name: 'Guy Hawkins',
            email: 'guy@gmail.com',
            image: imgage4,
            logo: vector,
            tag:'#make_it_fast',
            comment: 'This is a top quality product. No need to think twice before making it live on web.',
        },
        {
            id: 6,
            name: 'Marvin McKinney',
            email: 'marvin@gmail.com',
            image: imgage5,
            logo: vector,
            tag:'#dev #tools',
            comment: 'With Postcrafts, it’s quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.',
        },
        {
            id: 7,
            name: 'Annette Black',
            email: 'annette@gmail.com',
            image: imgage6,
            logo: vector,
            tag:'#another',
            comment: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
        },
        
        {
            id: 8,
            name: 'Floyd Miles',
            email: 'floyd@gmail.com',
            image: imgage7,
            logo: vector,
            tag:'#postcrafts',
            comment: 'My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.',
        },
        

    ]
    return (
        <div className='container mx-auto'>
            <h1 className=" text-white text-center text-2xl md:text-3xl lg:text-4xl font-semibold mt-20">What our customers say for your business</h1>
            <p className=" text-accent text-center p-5">Read why thousands of marketers, writers, and <br/> entrepreneurs love us so much.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5'>
                {
                    reviewsData.map(reviewData => <ReviewCard
                        key={reviewData.id}
                        reviewData={reviewData}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;