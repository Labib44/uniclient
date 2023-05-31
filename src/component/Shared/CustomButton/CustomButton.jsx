

const CustomButton = ({ buttonName, cssStyle }) => {
    return (
        <>
            <button
                type="button"
                className={`transition-all focus:outline-none font-semibold border rounded text-white px-6 text-center ${cssStyle && `${cssStyle}`
                    }`}
            >
                {buttonName}
            </button>
        </>
    );
};

export default CustomButton;