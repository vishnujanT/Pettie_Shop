import React from 'react';
import './homePage.css';

const HomePageGrid = ({ items, onItemClick }) => {
  return (
    <div className='grid'>
      {items.map(item => (
        <div key={item.id} className='grid-item' onClick={() => onItemClick(item)}>
          <img src={item.imageUrl} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePageGrid;
