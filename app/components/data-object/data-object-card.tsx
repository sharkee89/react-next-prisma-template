import { redirect } from 'next/navigation';
import { useState } from 'react';
import DataObjectProperties from './data-object-properties';
import { DataObject } from './data-object-list';

interface DataObjectCardProps {
  dataObject: DataObject;
  handleDelete: (id: string) => void;
}

const DataObjectCard = ({ dataObject, handleDelete }: DataObjectCardProps) => {
  const [expandedDataObjectId, setExpandedDataObjectId] = useState<string | null>(null);

  const handleDetailsClick = (id: string) => {
    redirect(`/data-object/${id}`);
  };

  const handleExpand = (id: string) => {
    setExpandedDataObjectId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div key={dataObject.id} className="bg-gray-700 hover:bg-gray-600 mb-4 rounded-lg">
      <div
        onClick={() => handleExpand(dataObject.id)}
        className="p-4 cursor-pointer flex justify-between items-center"
      >
        <span className="text-lg text-gray-100">{dataObject.name}</span>
        <button className="text-lightblue-500 hover:text-lightblue-600">
          {expandedDataObjectId === dataObject.id ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      </div>
      {expandedDataObjectId === dataObject.id && (
        <div className="p-4 bg-gray-800 rounded-b-lg">
          <DataObjectProperties dataObject={dataObject} />
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => handleDetailsClick(dataObject.id)}
              className="py-2 px-4 bg-lightblue-500 text-white font-semibold rounded-md hover:bg-blue-500 border-2 border-blue-500 transition duration-300 cursor-pointer"
            >
              View Details
            </button>
            <button
              onClick={() => handleDelete(dataObject.id)}
              className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DataObjectCard;