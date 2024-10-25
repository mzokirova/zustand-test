
// SingleNews.js
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNews } from '../../utils/zustand';

const SingleNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { news, updateNews, deleteNews, fetchNews } = getNews();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    if (!news.length) fetchNews();
    const item = news.find((item) => item._id === id);
    setNewsItem(item);
  }, [news, id, fetchNews]);

  const handleUpdate = async (e) => {
    e.preventDefault()
    await updateNews(id, newsItem);
    navigate('/news'); 
  };

  const handleDelete = async () => {
    await deleteNews(id);
    alert("Deleted item")
    navigate('/news'); 
  };

  if (!newsItem) return <p>Loading...</p>;

  return (
    <div className=' container mx-auto'>
      <h2 className='text-center my-10 text-2xl'>Your News</h2>
      <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="">Title</label>
      <input
          className='border p-2 my-2 w-full'
          value={newsItem.title}
          onChange={(e) => setNewsItem({ ...newsItem, title: e.target.value })}
        />
        <label htmlFor="">Body</label>
   <textarea
          className='border h-auto min-h-32 border-gray-400 w-full outline-none my-2 '
          value={newsItem.body}
          onChange={(e) => setNewsItem({ ...newsItem, body: e.target.value })}
        />

    <div className="flex justify-between items-center py-4">
        <p className="capitalize " >Author: {newsItem.user}</p>
        <p>Created : {newsItem.date}</p>
    </div>
    <div className='flex justify-between items-center'>
    <button onClick={handleUpdate} className='bg-green-600 py-2 px-4 rounded'>Save</button>
        <button onClick={handleDelete} className='bg-red-600 py-2 px-4 rounded'>Delete</button>

    </div>
</div>


    
    </div>
  );
};

export default SingleNews;
