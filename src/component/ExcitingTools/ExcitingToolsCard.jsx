import { motion } from "framer-motion"

const ExcitingToolsCard = ({ toolData }) => {
    const { title, icon, discription } = toolData;
    return (
        <motion.div className="lg:flex bg-[#282A37] rounded-md hover:outline outline-2 outline-secondary"
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
        >
            <div className=" w-9 h-9 ml-5 mt-5">
                <img src={icon} className="w-9 h-9" alt="" />
            </div>
            <div className="m-5">
                <h1 className=" text-white text-xl font-semibold">{title}</h1>
                <p className=" text-accent pt-3 pr-3">{discription}</p>
            </div>
        </motion.div>
    );
};

export default ExcitingToolsCard;