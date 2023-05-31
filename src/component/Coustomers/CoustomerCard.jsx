

const CoustomerCard = ({loData}) => {
    const {  icon } = loData;
    return (
        <div>
            <img src={icon} alt="Logo"/>
        </div>
    );
};

export default CoustomerCard;