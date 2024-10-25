import { useState } from 'react';
import { getNews } from '../../utils/zustand';
import useAuthStore from '../../utils/authStore';
const CreateNews = () => {
  const { createNews, isLoading, error, } = getNews();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');

  const {user}=useAuthStore()
  const handleCreateNews = async() => {
    const newsItem = {
      title,
      body,
      user:user.username,
      date, 
    };

    await createNews(newsItem);

    setTitle('');
    setBody('');
    setDate('');
    
    console.log(newsItem)
  };

  return (
    <div className='bg-stone-200 w-[60%] mx-auto flex flex-col gap-y-4 mt-10 py-4 px-4 rounded'>
      <h1 className='text-center text-lg py-1'>Create New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='rounded '
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={user.username}
      readOnly
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className='rounded bg-cyan-800 text-xl w-40 text-center text-white p-1.5' onClick={handleCreateNews}>Create </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CreateNews;

