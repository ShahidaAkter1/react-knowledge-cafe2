
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title`} />
        <div className='flex justify-between mb-4'>
            <div className='flex '>
               <img className='w-14' src={author_img} alt="" />
               <div className='ml-4'>
                <h3 className='text-2xl'>{author}</h3>
                <p>{posted_date}</p>
               </div>
            </div>
            <div>
               <span>{reading_time} min read</span>
               <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'> <FaBookmark /></button>
            </div>
        </div>
            <h2 className='text-4xl '>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx )=> <span key={idx}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(id, reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;