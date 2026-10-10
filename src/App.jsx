import React, { useState, useEffect } from 'react';
import { Search, MapPin, Bed, DollarSign } from 'lucide-react';
import './App.css';

function App() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from the .NET Web API
  useEffect(() => {
    fetch('http://localhost:5284/api/property')
      .then(response => response.json())
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="header">
        <h1>EstateVision</h1>
        <p>Your AI-Powered Real Estate Marketplace</p>
      </header>

      <main className="main-content">
        <div className="search-bar">
          <input type="text" placeholder="Search by location..." className="search-input" />
          <button className="search-button"><Search size={20} /> Search</button>
        </div>

        {loading ? (
          <p className="loading">Loading properties from server...</p>
        ) : (
          <div className="property-grid">
            {properties.map(property => (
              <div key={property.id} className="property-card">
                <img src={property.imageUrl} alt={property.title} className="property-image" />
                <div className="property-details">
                  <h3>{property.title}</h3>
                  <p className="detail"><MapPin size={16}/> {property.location}</p>
                  <p className="detail"><Bed size={16}/> {property.bedrooms} Beds</p>
                  <p className="price"><DollarSign size={16}/> ${property.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;