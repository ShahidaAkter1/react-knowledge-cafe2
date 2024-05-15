import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4 pt-4">
            <div className="mb-4 ">
                <h3 className="text-center text-4xl">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs:{bookmarks.length}</h2>

            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
    
}

export default Bookmarks;