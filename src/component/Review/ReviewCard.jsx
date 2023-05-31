import { motion } from "framer-motion"

const ReviewCard = ({ reviewData }) => {
    const { id, name, email, image, logo, tag, comment } = reviewData;
    return (
        <motion.div className="bg-white rounded-lg p-5 hover:outline outline-2 outline-secondary"
            whileHover={{ scale: [null, 1.2, 1.2] }}
            transition={{ duration: 0.3 }}
        >

            <div className="flex justify-between p-4">
                <div className="flex">
                    <div>
                        <img src={image} alt="" className="object-cover w-12 h-12 rounded-full" />
                    </div>
                    <div>
                        <h4 className=" text-[16px] font-semibold text-black ">{name}</h4>
                        <span className="text-xs dark:text-gray-400">{email}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <img src={logo} className="w-5 h-5 fill-current" alt="" />
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p className=" text-[16px] font-normal">{comment}</p>
                <p className=" text-secondary">{tag}</p>
            </div>

        </motion.div>
    );
};

export default ReviewCard;