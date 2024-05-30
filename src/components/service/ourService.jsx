import React from "react";
import './ourservice.css';

const OurService = () => {
    const services = [
        { id: 1, name: 
        'Day Delivery', image: 'deli1.jpg' },
        { id: 2, name: '30 Days Return', image: 'dayreturn1.jpg' },
        { id: 3, name: 'Security Payment', image: 'security1.jpg' },
        { id: 4, name: '24/7 Support', image: 'daydelivery1.jpg' }
    ];

    return (
        <div>
            <div className="heading">
                <h2 className="heading-text">" Benefits you get from our service !!!"</h2>
            <div className="services-container">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <img src={service.image} alt={service.name} className="service-image" />
                        <h3 className="service-name">{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default OurService;

