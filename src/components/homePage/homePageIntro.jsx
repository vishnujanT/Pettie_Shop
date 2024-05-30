import React from 'react';
import './homePage.css';

const HomePageIntro = () => {
    return (
        <div className="home-page-intro">
        <div className="leftContainer">
        <h1>FIND EVERYTHING YOUR PET NEEDS</h1>
        <p>Welcome to Pettie, your number one online store for top-quality pet supplies! We pride ourselves on providing a huge selection of products for dogs, cats, birds and more. Shop food, treats, beds, toys and so much more. We make pampering your pet easy and affordable!</p>
        <h2>Show them your Love!</h2>
        </div>
        <div>
        <img className='introImage' src="Dog.jpg" alt="Dog image" />
        </div>
        </div>
    );
};  

export default HomePageIntro;
