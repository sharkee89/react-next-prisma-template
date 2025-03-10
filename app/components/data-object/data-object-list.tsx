'use client';

import { useEffect, useState } from 'react';
import { DataObject as PrismaDataObject } from '@prisma/client';
import DataObjectCard from './data-object-card';
import { getDataObjects } from '@/app/service/getDataObjects';
import { deleteDataObject } from '@/app/service/deleteDataObject';

export interface DataObject extends PrismaDataObject {
  properties: { id: string; name: string; type: string }[];
}

const DataObjectList = () => {
  const [dataObjects, setDataObjects] = useState<DataObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataObjects = async () => {
      getDataObjects((data: any) => {
        setDataObjects(data);
        setLoading(false);
      }, (error: any) => {
        setError('Error fetching data objects: ' + error.message);
      });
    };

    fetchDataObjects();
  }, []);

  const handleDelete = async (id: string) => {
    deleteDataObject(id, () => {
      setDataObjects((prevDataObjects) =>
        prevDataObjects.filter((dataObject) => dataObject.id !== id)
      );
      console.log('Data object deleted successfully!');
    }, (error: any) => {
      setError('Error deleting data object: ' + error.message);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-full max-w-100 p-6 bg-gray-800 shadow-lg rounded-lg overflow-y-auto max-h-screen">
      {dataObjects.length === 0 ? (
        <p className="text-center text-gray-300">No data objects found.</p>
      ) : (
        <>
          <h3 className="text-2xl font-semibold text-gray-100 mb-4 text-center">Data Object List</h3>
          <div>
            {dataObjects.map((dataObject) => (
              <DataObjectCard key={dataObject.id} dataObject={dataObject} handleDelete={handleDelete} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DataObjectList;
