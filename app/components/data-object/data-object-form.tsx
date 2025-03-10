'use client';

import { createDataObject } from '@/app/service/createDataObject';
import { useState } from 'react';

const DataObjectForm = () => {
  const [dataObjectName, setDataObjectName] = useState('');
  const [properties, setProperties] = useState([{ name: '', type: 'string' }]);

  const handleAddProperty = () => {
    setProperties([...properties, { name: '', type: 'string' }]);
  };

  const handlePropertyChange = (index: number, field: keyof Property, value: string) => {
    const updatedProperties = [...properties];
    updatedProperties[index][field] = value;
    setProperties(updatedProperties);
  };

  const handleDeleteProperty = (index: number) => {
    const updatedProperties = properties.filter((_, i) => i !== index);
    setProperties(updatedProperties);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newDataObject = {
      name: dataObjectName,
      properties: properties.map(p => ({
        name: p.name,
        type: p.type,
      })),
    };
    createDataObject(newDataObject, () => {
      setDataObjectName('');
      setProperties([{ name: '', type: 'string' }]);
    });
  };

  interface Property {
    name: string;
    type: string;
  }

  return (
    <div className="bg-gray-900 bg-opacity-75">
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 bg-gray-800 shadow-lg rounded-lg flex flex-col gap-y-4"
      >
        {/* Data Object Name Field */}
        <div className="flex flex-col">
          <label htmlFor="dataObjectName" className="text-sm font-medium text-gray-300 mb-1">Data Object Name</label>
          <input
            id="dataObjectName"
            name="dataObjectName"
            type="text"
            placeholder="Enter data object name"
            required
            value={dataObjectName}
            onChange={(e) => setDataObjectName(e.target.value)}
            className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
          />
        </div>

        <button
          type="button"
          onClick={handleAddProperty}
          className="mt-2 py-2 px-4 bg-lightblue-500 text-white font-semibold rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-lightblue-400 border-2 border-orange-500 transition-all duration-300 ease-in-out"
        >
          Add Property
        </button>

        {/* Properties Section */}
        {properties.map((property, index) => (
          <div key={index} className="flex gap-x-2 items-center">
            <div className="flex flex-col w-1/2">
              <label htmlFor={`propertyName-${index}`} className="text-sm font-medium text-gray-300 mb-1">Property Name</label>
              <input
                id={`propertyName-${index}`}
                name={`propertyName-${index}`}
                type="text"
                value={property.name}
                onChange={(e) => handlePropertyChange(index, 'name', e.target.value)}
                placeholder="Property name"
                required
                className="px-4 py-2 h-12 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor={`propertyType-${index}`} className="text-sm font-medium text-gray-300 mb-1">Property Type</label>
              <select
                id={`propertyType-${index}`}
                name={`propertyType-${index}`}
                value={property.type}
                onChange={(e) => handlePropertyChange(index, 'type', e.target.value)}
                className="px-4 py-2 h-12 border border-gray-600 rounded-md text-gray-100 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lightblue-400"
              >
                <option value="string">String</option>
                <option value="number">Number</option>
                <option value="boolean">Boolean</option>
              </select>
            </div>
            {/* Delete Property Button */}
            <button
              type="button"
              className="flex items-center justify-center w-12 h-12 text-orange-500 hover:text-orange-600 focus:outline-none mt-6"
            >
              {properties.length > 1 && <svg onClick={() => handleDeleteProperty(index)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>}
            </button>
          </div>
        ))}

        {/* Save Button */}
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-lightblue-500 text-white font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-lightblue-400 border-2 border-green-500 transition-all duration-300 ease-in-out"
        >
          Save Data Object
        </button>
      </form>
    </div>
  );
};

export default DataObjectForm;
