import React from "react";
import './categories.css';

const Categories = () => {
    return (
        <div className="heading">
        <div >
            <h1>PET BASIC FOR EVERY NEED</h1>
            <h2>Our Top Catogories</h2>
        <div className="grid">
         <div className='grid-item' >
            <h3>Pet Food</h3>
          <img  className="food" src='food.jpg' alt= 'pet food' />
          <button> Check Now </button>
        </div>
        <div className='grid-item' >
            <h3>Pet Medicine</h3>
          <img className='medicine' src='medicine.jpg' alt= 'pet medicine' />
          <button> Check Now </button>
        </div>
        <div className='grid-item' >
            <h3>Pet Toys</h3>
          <img className= 'toys' src='toys.jpg' alt= 'pet toys' />
          <button> Check Now </button>
        </div>
        <div className='grid-item' >
            <h3>Pet Accessesories</h3>
          <img className= 'accessories' src='accessories.jpg' alt= 'pet accessories' />
          <button> Check Now </button>
        </div>
    </div>
    </div>
    <div className="seperationLine" />
    {/* <div>
        <h2>Offers</h2>
    <div className="grid2">
        <div className='grid-item2' >
        <button> Buy Now </button>
          <img  className="sale1" src='sale1.jpg' alt= 'pet food' />
          
        </div>
        <div className='grid-item2' >
        <button> Buy Now </button>
          <img className='sale2' src='sale2.jpg' alt= 'pet medicine' />
        </div>  
        <div className='grid-item2' >
        <button> Buy Now </button>
          <img className= 'sale3' src='sale3.jpg' alt= 'pet accessories' />
          
        </div>   
     </div>
    </div> */}
    </div>
    );
}

export default Categories;