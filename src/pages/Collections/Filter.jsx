import React from 'react';
import { ChevronDown, X } from 'lucide-react';

const MultiSelect = ({ name, values, onChange, options, label }) => {
  const handleSelect = (e) => {
    const value = e.target.value;
    if (value === 'All') {
      onChange(name, ['All']);
    } else {
      const newValues = values.includes('All')
        ? [value]
        : values.includes(value)
          ? values.filter(v => v !== value)
          : [...values, value];

      onChange(name, newValues.length ? newValues : ['All']);
    }
  };

  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value=""
          onChange={handleSelect}
          className="appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                   hover:border-gray-300 transition-colors duration-200"
        >
          <option value="" disabled>Select {label}</option>
          <option value="All">All {label}s</option>
          {options.filter(opt => opt.value !== 'All').map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {values.filter(value => value !== 'All').map((value) => (
          <span
            key={value}
            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
          >
            {options.find(opt => opt.value === value)?.label}
            <button
              onClick={() => {
                const newValues = values.filter(v => v !== value);
                onChange(name, newValues.length ? newValues : ['All']);
              }}
              className="ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-purple-200 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

const Filter = ({ filters, setFilters }) => {
  const handleFilterChange = (name, newValues) => {
    setFilters(prev => ({
      ...prev,
      [name]: newValues
    }));
  };

  const filterOptions = {
    type: [
      { value: 'All', label: 'All Types' },
      { value: 'Gold', label: 'Gold' },
      { value: 'Silver', label: 'Silver' },
    ],
    color: [
      { value: 'All', label: 'All Colors' },
      { value: 'Gold', label: 'Gold' },
      { value: 'Silver', label: 'Silver' },
    ],
    priceRange: [
      { value: 'All', label: 'All Prices' },
      { value: '[0,50]', label: 'Under $50' },
      { value: '[50,100]', label: '$50 - $100' },
    ],
  };

  const clearAllFilters = () => {
    setFilters({
      type: ['All'],
      color: ['All'],
      priceRange: ['All']
    });
  };

  const hasActiveFilters = Object.values(filters).some(
    filterValues => !filterValues.includes('All') || filterValues.length > 1
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-0.5 bg-purple-500"></div>
            <h2 className="text-lg font-medium text-gray-900">Filter Collection</h2>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-purple-600 transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Refine your search to find the perfect piece
        </p>
      </div>

      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MultiSelect
            name="type"
            values={filters.type}
            onChange={handleFilterChange}
            options={filterOptions.type}
            label="Earring Type"
          />
          <MultiSelect
            name="color"
            values={filters.color}
            onChange={handleFilterChange}
            options={filterOptions.color}
            label="Metal Color"
          />
          <MultiSelect
            name="priceRange"
            values={filters.priceRange}
            onChange={handleFilterChange}
            options={filterOptions.priceRange}
            label="Price Range"
          />
        </div>
      </div>

      <div className="px-6 py-3 bg-gray-50 rounded-b-xl border-t border-gray-100">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">Active Filters:</span>
          {!hasActiveFilters ? (
            <span className="text-gray-500">None</span>
          ) : (
            Object.entries(filters).map(([key, values]) =>
              values[0] !== 'All' && values.map(value => (
                <span
                  key={`${key}-${value}`}
                  className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                >
                  {filterOptions[key].find(opt => opt.value === value)?.label}
                  <button
                    onClick={() => {
                      const newValues = values.filter(v => v !== value);
                      handleFilterChange(key, newValues.length ? newValues : ['All']);
                    }}
                    className="ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-purple-200 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;