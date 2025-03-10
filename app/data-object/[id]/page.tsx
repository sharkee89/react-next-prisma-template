'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DataObjectStringProperty from '@/app/components/data-object/property/data-object-string-property';
import DataObjectNumberProperty from '@/app/components/data-object/property/data-object-number-property';
import DataObjectBooleanProperty from '@/app/components/data-object/property/data-object-boolean-property';
import ExistingInstance from '@/app/components/data-object/existing-instance';
import { Instance } from '@/app/constant/app.interface';
import { getDataObjectById } from '@/app/service/getDataObjectById';
import { createInstance } from '@/app/service/createInstance';
import { deleteInstance } from '@/app/service/deleteInstance';

const DataObjectDetailPage = () => {
  const [dataObject, setDataObject] = useState<any>(null);  // Use a specific type here if possible
  const [instanceValues, setInstanceValues] = useState<any>({});
  const [instances, setInstances] = useState<any[]>([]); // State for instances
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams() as { id: string };

  useEffect(() => {
    const fetchDataObject = async () => {
      if (id) {
        getDataObjectById(id, (data: any) => {
          setDataObject(data);
          setInstances(data.instances);
          setInstanceValues(
            data.properties.reduce((acc: any, property: any) => {
              acc[property.name] = '';
              return acc;
            }, {})
          );
          setLoading(false);
        }, (error: any) => {
          setError('Failed to fetch data object: ' + error.message);
          setLoading(false);
        });
      };
    };

    fetchDataObject();
  }, [id]);

  const handleInputChange = (propertyName: string, value: any) => {
    setInstanceValues((prevState: any) => ({
      ...prevState,
      [propertyName]: value,
    }));
  };

  const handleSaveInstance = async () => {;
    createInstance({
      id: dataObject.id,
      instanceValues: instanceValues,
    }, (newData) => {
      setInstances([...instances, newData]);
    }, () => {
      console.error('Error saving instance:', error);
    })
  };

  const handleDeleteInstance = async (id: string, instanceId: string) => {
    deleteInstance({ id, instanceId }, () => {
      setInstances(instances.filter((instance) => instance.id !== instanceId));
    }, (error) => {
      console.error('Error deleting data object:', error.message);
    }
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-100 mb-4">{dataObject.name}</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveInstance();
        }}
        className="space-y-4"
      >
        {dataObject.properties.map((property: any) => (
          <div key={property.id} className="flex flex-col">
            <label htmlFor={property.name} className="text-sm font-medium text-gray-300 mb-1">
              {property.name}
            </label>

            {property.type === 'string' && (
              <DataObjectStringProperty name={property.name} value={instanceValues[property.name]} handleInputChange={handleInputChange} />
            )}

            {property.type === 'number' && (
              <DataObjectNumberProperty name={property.name} value={instanceValues[property.name]} handleInputChange={handleInputChange} />
            )}

            {property.type === 'boolean' && (
              <DataObjectBooleanProperty name={property.name} value={instanceValues[property.name]} handleInputChange={handleInputChange} />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 py-2 px-4 text-white font-semibold rounded-md hover:bg-green-600 border-2 border-green-500 transition duration-300 cursor-pointer"
        >
          Save Instance
        </button>
      </form>

      {/* Display existing instances */}
      <h4 className="text-xl font-semibold text-gray-100 mt-6">Existing Instances</h4>
      {instances.length === 0 ? (
        <p className="text-gray-300">No instances available.</p>
      ) : (
        <div className="space-y-4 mt-4">
          {instances.map((instance: Instance) => (
            <ExistingInstance key={instance.id} instance={instance} handleDeleteInstance={handleDeleteInstance} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DataObjectDetailPage;
