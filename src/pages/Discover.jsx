import { genres } from "../assets/constants";
import SongCard from "../components/SongCard";

const Discover = () => {
    const generaTitle = 'pop';

    return(
        <div className="flex flex-col">
            <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                <h2 className="font-bold text-3xl text-white text-left">Discover {generaTitle}</h2>
                <select onChange={()=>{}} value='' className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0">
                    {genres.map((gener)=><option key={gener.value} value={gener.value}>{gener.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {[1,2,3,4,5,6,7,8,9,10].map((song)=>(
                    <SongCard />
                ))}
            </div>
        </div>
    );
};

export default Discover;
