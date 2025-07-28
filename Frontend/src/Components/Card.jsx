// src/components/Card.jsx
import React from 'react';

const Card = ({image, title, description,}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:scale-105 duration-300 w-full max-w-sm">
      <img
        className="w-full h-52 object-cover rounded-lg"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
      </div>
    </div>
  );
};

export default Card;