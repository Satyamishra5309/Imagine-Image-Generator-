import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const[image, setImage] = useState(null);
  const[prompt, setPrompt] = useState('');
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[post, setPost] = useState([]);
  const navigate = useNavigate();

  const words = [
    'Make your Imagination Real',
    'Something New..... Let Cook',
    'Imagine anything, Create anything'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = async(prompt) =>{
     if(!prompt) return alert("Prompt is required");

     setLoading(true);
     setImage(null);

     try {

      const response = await axios.post("http://localhost:3000/api/v1/generate/",{
        prompt: prompt
      });

      if(response.data.imageUrl){
        setImage(response.data.imageUrl);
      }else{
        alert("No image is received");
      };
     } catch (error) {
      console.error("Axios error", error);
      alert("something went wrong");
     } finally{
      setLoading(false);
     }
  };

  const handlePost = async (title, image, description) => {

    if(!title || !image || !description){
      return alert("Fields are required");
    };
    
    axios.post("http://localhost:3000/api/v1/posts/upload/", {
      title: title,
      image: image,
      description: description
    })
    .then((response)=>{
      alert("Post successfuly");
      navigate("/explore");
    })
    .catch((error)=>{
      console.error("Post Error", error);
    });
  };

  useEffect(()=>{
    try { 
      axios.get("http://localhost:3000/api/v1/explore/all")
      .then((res)=>{
        setPost(res.data);
      })
    } catch (error) {
      console.error("Not Get post", error);
    }
  },[]);

  return (
  <>
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-gray-100 text-gray-800">
  {loading ? (
    <div className='flex justify-center items-center h-screen text-3xl font-bold text-amber-700 animate-pulse'>
      Generating Image...
    </div>
  ) : image ? (
    <div className="px-4 py-10">
      <div className='max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-start'>
        
        <div className='w-full md:w-1/2'>
        
        <div className='w-full md:w-1/2'>
          <input
            type='text'
            placeholder='Enter Image Name'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-10 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm text-lg'
          />
        </div>

        <div className='w-full md:w-1/2 my-20'>
        <textarea
         placeholder='Description about the Image....'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full h-1/2 px-10 py-15 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm text-lg'
        
        
        ></textarea>
        </div>
        
        
        
        </div>

        <div className='w-full md:w-1/2 flex justify-center items-center border-2 border-dashed border-gray-400 rounded-xl overflow-hidden shadow-lg'>
          <img
              src={image}
              alt="Generated"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl"
          />

        </div>

      </div>

      <div className='flex justify-center mt-10'>
        <button
          onClick={() => handlePost(title, image, description)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full shadow-xl text-lg font-semibold transition duration-300"
        >
          Post Image
        </button>
      </div>
    </div>
  ) : (
    <div className="px-4 py-8">
      <div className="text-center text-3xl sm:text-5xl font-extrabold text-amber-600 mb-8 animate-fade-in">
        {words[index]}
      </div>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Enter your creative prompt..."
          className="w-full sm:w-2/3 lg:w-1/2 px-5 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm text-lg"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      <div className="flex justify-center mb-10">
        <button
          onClick={() => handleChange(prompt)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full shadow-xl text-lg font-semibold transition duration-300"
        >
          Generate Image
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {Array.isArray(post) && post.slice(0, 4).map((card, i) => (
          <Card
            key={i}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText="View"
          />
        ))}
      </div>

      <div className='flex justify-center mt-10'>
        <button
          onClick={() => navigate('/explore')}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full shadow-xl text-lg font-semibold transition duration-300"
        >
          Explore More
        </button>
      </div>
    </div>
  )}
</div>

    </>
  );
};

export default Home;      