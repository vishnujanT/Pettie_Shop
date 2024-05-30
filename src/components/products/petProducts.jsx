import React from "react";
import './products.css';

function Petproducts() {
    const productList = [
        { id: 1, name: 'Dog Food', price: '$25.00', image: 'dog-food.jpg', category: 'petfood' },
        { id: 2, name: 'Cat Food', price: '$15.00', image: 'cat-food.jpeg', category: 'petfood' },
        { id: 3, name: 'Fish Food', price: '$25.00', image: 'fishfood.jpg', category: 'petfood' },
        { id: 4, name: 'Bird Food', price: '$25.00', image: 'birdfood.jpeg', category: 'petfood' },
        { id: 5, name: 'Dog Medicine', price: '$25.00', image: 'dogmedi.jpeg', category: 'petmedicine' },
        { id: 6, name: 'Dog Syrup Medicine', price: '$25.00', image: 'dogmedipowder.jpg', category: 'petmedicine' },
        { id: 7, name: 'Bird Medicine', price: '$25.00', image: 'birdmedicine.jpg', category: 'petmedicine' },
        { id: 8, name: 'Fish Medicine', price: '$25.00', image: 'fishmedi1.jpeg', category: 'petmedicine' },
        { id: 9, name: 'Bird Cage', price: '$25.00', image: 'bird-cage.jpeg', category: 'petaccessories' },
        { id: 10, name: 'Dog Cannel', price: '$25.00', image: 'dogcannel.jpg', category: 'petaccessories' },
        { id: 11, name: 'Small Dog Cannel', price: '$25.00', image: 'petcomb.jpg', category: 'petaccessories' },
        { id: 12, name: 'Cat Bed', price: '$25.00', image: 'catbed.jpg', category: 'petaccessories' },
        { id: 13, name: 'Dog Toy', price: '$25.00', image: 'dogtoy.jpeg', category: 'pettoys' },
        { id: 14, name: 'Cat Toy', price: '$50.00', image: 'cattoy.jpeg', category: 'pettoys' },
        { id: 15, name: 'Bird Toy', price: '$50.00', image: 'birdtoy.jpeg', category: 'pettoys' },
        { id: 16, name: 'Fish Toy', price: '$50.00', image: 'fishtoy.jpeg', category: 'pettoys' }
    
    ];

    const petFoodProducts = productList.filter(product => product.category === 'petfood');
    const petMedicineProducts = productList.filter(product => product.category === 'petmedicine');
    const petAccessoriesProducts = productList.filter(product => product.category === 'petaccessories');
    const petToysProducts = productList.filter(product => product.category === 'pettoys');

    const renderProducts = (products) => (
        <div className="products-container">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">{product.price}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="heading-pro">
                <h1>Our Products</h1>
            </div>
            <div >
                <h2 className="product-heading">Pet Food</h2>
                {renderProducts(petFoodProducts)}
            </div>
            <div>
                <h2 className="product-heading">Pet Medicine</h2>
                {renderProducts(petMedicineProducts)}
            </div>
            <div>
                <h2 className="product-heading">Pet Accessories</h2>
                {renderProducts(petAccessoriesProducts)}
            </div>
            <div>
                <h2 className="product-heading">Pet Toys</h2>
                {renderProducts(petToysProducts)}
            </div>
        </div>
    );
}

export default Petproducts;
