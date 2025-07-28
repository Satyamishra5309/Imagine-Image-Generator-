import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Components/Card';

const Explore = () => {

  const[value,setValue] = useState();
  const [post, setPost] = useState([]);

  useEffect(()=>{
   const getpost = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/explore/all");
      setPost(res.data);

    } catch (error) {
       console.error("Not get images", error);
       alert("Unable to fetch posts"); 
    }};

    getpost();
  },[]);


  return (
    <div>
    
    <div className="flex justify-center m-10">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-gray-300 rounded-2xl w-1/2 p-3 text-lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto'>
      {post.map((card,idx)=>{
       return (
         <Card
        key={idx}
        image = {card.image}
        title = {card.title}
        description = {card.description}
        />
       );
      })};
     
      </div>

    </div>
  )
}

export default Explore