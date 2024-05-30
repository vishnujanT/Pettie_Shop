import React from 'react';
import './App.css';
import NavBar from './components/homePage/navBar.jsx';
import SearchBar from './components/homePage/searchBar';
import HomePageGrid from './components/homePage/homePageGrid';
import HomePageIntro from './components/homePage/homePageIntro';
import Categories from './components/topCategories/categories';
import Petproducts from './components/products/petProducts.jsx';
import OurService from './components/service/ourService.jsx';
import FooterPart from './components/footer/footerPart.jsx';

function App() {
    return (
        <div className="App">
            <NavBar />
            <SearchBar />
            <HomePageIntro />
            <Categories />
            <Petproducts />
            <OurService />
            <FooterPart />
            
        </div>
    );
}

export default App;
