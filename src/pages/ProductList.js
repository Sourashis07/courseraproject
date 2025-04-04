import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './ProductList.css';
import image1 from './Lavender.jpg';

import image2 from './rosemary.webp';
import image3 from './mint.jpg';
import image4 from './jasmine.jpg';
import image5 from './thyme.jpg';
import image6 from './lemongrass.jpg';
import image7 from './sage.webp';
import image8 from './chamomile.jpg';
import image9 from './basil.jpg';
import image10 from './coriander.avif';
import image11 from './alovera.webp';
import image12 from './neem.jpg';
import image13 from './tulsi.webp';
import image14 from './ginger.jpg';
import image15 from './turmeric.webp';
import image16 from './peppermint.jpg';
import image17 from './eucalyptus.jpg';
import image18 from './ashwagandha.jpg';
import image19 from './fenugreek.jpg';

const products = [
  { id: 1, name: 'Lavender', description: 'Aromatic plant great for relaxation.', category: 'Aromatic Plants', price: 10, image: image1 },
  { id: 3, name: 'Rosemary', description: 'Used in cooking and herbal medicine.', category: 'Aromatic Plants', price: 12, image: image2 },
  { id: 4, name: 'Mint', description: 'Refreshing herb for teas and cooking.', category: 'Aromatic Plants', price: 8, image: image3 },
  { id: 5, name: 'Jasmine', description: 'Fragrant flower used in perfumes.', category: 'Aromatic Plants', price: 15, image: image4 },
  { id: 6, name: 'Thyme', description: 'Aromatic herb used in culinary dishes.', category: 'Aromatic Plants', price: 10, image: image5 },
  { id: 7, name: 'Lemongrass', description: 'Citrus-scented herb for teas and oils.', category: 'Aromatic Plants', price: 14, image: image6 },
  { id: 8, name: 'Sage', description: 'Aromatic herb with medicinal benefits.', category: 'Aromatic Plants', price: 9, image: image7 },
  { id: 9, name: 'Chamomile', description: 'Used for teas and relaxation.', category: 'Aromatic Plants', price: 11, image: image8 },
  { id: 10, name: 'Basil', description: 'Sweet aromatic herb for cooking.', category: 'Aromatic Plants', price: 7, image: image9 },
  { id: 11, name: 'Coriander', description: 'Fragrant herb used in many dishes.', category: 'Aromatic Plants', price: 6, image: image10 },

  // Medicinal Plants
  { id: 2, name: 'Aloe Vera', description: 'Medicinal plant used for skin treatment.', category: 'Medicinal Plants', price: 15, image: image11 },
  { id: 12, name: 'Neem', description: 'Known for its antibacterial properties.', category: 'Medicinal Plants', price: 18, image: image12 },
  { id: 13, name: 'Tulsi', description: 'Holy basil with healing properties.', category: 'Medicinal Plants', price: 12, image: image13 },
  { id: 14, name: 'Ginger', description: 'Used for digestion and immunity.', category: 'Medicinal Plants', price: 14, image: image14 },
  { id: 15, name: 'Turmeric', description: 'Anti-inflammatory medicinal plant.', category: 'Medicinal Plants', price: 16, image: image15 },
  { id: 16, name: 'Peppermint', description: 'Good for digestion and fresh breath.', category: 'Medicinal Plants', price: 9, image: image16 },
  { id: 17, name: 'Eucalyptus', description: 'Used for respiratory relief.', category: 'Medicinal Plants', price: 17, image: image17 },
  { id: 18, name: 'Ashwagandha', description: 'Popular in Ayurvedic medicine.', category: 'Medicinal Plants', price: 20, image: image18 },
  { id: 19, name: 'Fenugreek', description: 'Known for its medicinal benefits.', category: 'Medicinal Plants', price: 8, image: image19 },
];

const ProductList = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  // Filter function
  const filteredProducts = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (categoryFilter ? p.category === categoryFilter : true) &&
      (priceFilter ? p.price <= Number(priceFilter) : true)
    );
  });

  return (
    <div className="product-container">
      {/* Filter Section */}
      <div className="filter-column">
        <h3>Filter</h3>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search plant..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Filter */}
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Aromatic Plants">Aromatic Plants</option>
          <option value="Medicinal Plants">Medicinal Plants</option>
        </select>

        {/* Price Filter */}
        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="">All Prices</option>
          <option value="10">Up to $10</option>
          <option value="15">Up to $15</option>
          <option value="20">Up to $20</option>
        </select>
      </div>

      {/* Product Display */}
      <div className="product-list">
        {filteredProducts.map((plant) => (
          <div key={plant.id} className="card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>${plant.price}</p>
            <button onClick={() => addToCart(plant)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
