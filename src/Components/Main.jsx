import { BsPlusCircle } from "react-icons/bs";

const Main = () => {
    return ( 
        <div className="flex parent">
            <div className="flex flex-col gap-2c py-1c text-sm">
                <div className="flex w-60pc md:w-50pc"><p className="font-bold line-height uppercase leading-10 text-redc text-3xl md:text-5xl">Raya and the last dragon</p></div>
                <div className="flex items-center">
                    <span className="text-gray-600 texxt-gray-400 mr-2c">A Disney Original Film</span>
                    <span className="text-green-500 mr-0.5c">98% Match</span>
                    <span className="text-redc">2021</span>
                </div>
                <div className="flex items-center gap-1.5c">
                    <p className="bg-black border-2 border-white hover:bg-redc duration-500 uppercase cursor-pointer font-bold rounded-full text-white w-fit px-2c py-0.5c">Play</p>
                    <BsPlusCircle className="text-white text-3xl hover:text-redc duration-500 cursor-pointer "/>
                </div>
            </div>
        </div>
     );
}
 
export default Main;