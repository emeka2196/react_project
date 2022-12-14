import { BsArrowUp, BsHeartFill, BsStarFill } from "react-icons/bs";
const List = () => {

    const movies = [1,2,3,4,5,6,7,8,9,10]
    return ( 
        <div className="flex parent relative z-20">
            <div className="grid parent movie-container">
                {movies.map((movie, i) => (
                    <div className="bg-gray-500 rounded group overflow-hidden flex movie-items flex-col">
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default List;
