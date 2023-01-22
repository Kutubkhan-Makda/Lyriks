import { genres } from "../assets/constants";

const Discover = () => {
    const generaTitle = 'pop';

    return(
        <div className="flex flex-col">
            <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {generaTitle}</h2>
                <select onChange={()=>{}}></select>
            </div>
        </div>
    );
};

export default Discover;
