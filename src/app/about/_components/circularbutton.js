
const CircularButton = ({ size = 'h-20 w-20',  bgColor = 'bg-emerald-600', textSize = 'text-lg', customStyles = '', title='', content=''}) => {
    return (
        <div className={`flex-col items-center justify-center  content-center text-center ${size} ${bgColor} ${textSize} rounded-full hover:bg-emerald-400 ${customStyles} transition-transform duration-10 ease-in-out scale-100 hover:scale-150 hover:z-10`}>
            <div className="text-lg font-semibold sm:text-sm">
                {title}
            </div>
            <div className=" font-normal leading-none break-words px-2  sm:px-0 sm:text-xs">
                {content}
            </div>
        </div>
    );
};

export default CircularButton;