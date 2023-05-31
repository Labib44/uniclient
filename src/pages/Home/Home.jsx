import Banner from "../../component/Banner/Banner";
import Convey from "../../component/Convey/Convey";
import Coustomers from "../../component/Coustomers/Coustomers";
import ExcitingTools from "../../component/ExcitingTools/ExcitingTools";
import FreeTrial from "../../component/FreeTrial/FreeTrial";
import Mixland from "../../component/Mixland/Mixland";
import Payment from "../../component/Payment/Payment";
import Review from "../../component/Review/Review";
import Tools from "../../component/Tools/Tools";



const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Coustomers></Coustomers>
            <Tools></Tools>
            <Convey></Convey>
            <ExcitingTools></ExcitingTools>
            <Mixland></Mixland>
            <Review></Review>
            <Payment></Payment>
            <FreeTrial></FreeTrial>
        </>
    );
};

export default Home;