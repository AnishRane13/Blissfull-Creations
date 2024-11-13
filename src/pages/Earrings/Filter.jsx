import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg mb-6 flex space-x-4">
      <select name="type" onChange={handleChange} value={filter.type} className="border p-2 rounded">
        <option value="All">All Types</option>
        <option value="Studs">Studs</option>
        <option value="Hoops">Hoops</option>
        <option value="Chandeliers">Chandeliers</option>
      </select>
      <select name="color" onChange={handleChange} value={filter.color} className="border p-2 rounded">
        <option value="All">All Colors</option>
        <option value="Gold">Gold</option>
        <option value="Silver">Silver</option>
        <option value="Rose Gold">Rose Gold</option>
      </select>
      <select name="priceRange" onChange={handleChange} value={filter.priceRange} className="border p-2 rounded">
        <option value="All">All Prices</option>
        <option value="[0, 50]">Below $50</option>
        <option value="[50, 100]">$50 - $100</option>
        <option value="[100, 200]">$100 - $200</option>
      </select>
    </div>
  );
};

export default Filter;
