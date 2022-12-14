import {BsArrowLeft, BsBookshelf, BsDice3Fill, BsDownload, BsFillCameraVideoFill, BsPlayCircle, BsSave, BsSave2, BsSave2Fill } from 'react-icons/bs'


const Movie = () => {
    return ( 
        <div className="flex flex-col gap-2c pt-1c parent">
            <div className="flex cursor-pointer hover:text-redc duration-300 text-sm font-bold text-gray-700 items-center gap-0.5c">
                <BsArrowLeft className='stroke-2'/>
                <p>Back to Dahsboard</p>
            </div>
            <div className="flex gap-1c flex-col items-center md:flex-row">
                <div className="w-14c rounded-[.5rem] h-16c bg-redc"></div>
                <div className="w-full h-fit flex flex-col justify-start gap-1c">
                    <p className='text-center md:text-start font-bold text-[2.5rem]'>John Wick</p>
                    <div className="flex flex-col gap-0.5c">
                        <p className='text-xs w-full md:w-40pc text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aliquam? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere amet nobis, incidunt consequuntur voluptas quo! Provident nihil officiis eveniet eligendi quo. Eum optio maxime ullam.</p>
                        <p className='text-xs text-blue-500 cursor-pointer hover:text-redc duration-300'>Read More</p>
                    </div>
                    <div className="flex justify-center md:justify-start  gap-1.25c">
                        <div className="flex items-center shadow group gap-0.5c cursor-pointer hover:bg-black duration-500 p-0.75c border-2 border-gray-300 bg-gray-300 rounded-full hover:bg-redc hover:text-white">
                            <p className='text-xs'>Watch Now</p>
                            <BsPlayCircle className='group-hover:text-redc duration-500'/>
                        </div>
                        <div className="flex items-center gap-0.5c cursor-pointer duration-500 border-2 border-black shadow p-0.75c bg-white rounded-full hover:bg-redc hover:text-white">
                            <p className='text-xs'>Watch Later</p>
                            <BsFillCameraVideoFill />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1c">
                <p className='text-gray-700 text-sm font-bold'>Cast</p>
                <div className="flex text-gray-500 text-sm gap-2c">

                </div>
            </div>
            <div className="flex flex-col gap-1c">
                <p className='text-gray-700 text-sm font-bold'>Rating</p>
                <div className="flex text-gray-500 text-sm gap-2c">
                    <p>IMBd: 9.2</p>
                    <p>Rotten Tomatoes: 8.5</p>
                </div>
            </div>
        </div>
     );
}
 
export default Movie;
