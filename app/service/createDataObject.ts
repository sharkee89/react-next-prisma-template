import DataObject from '../data-object/page';

interface Property {
  name: string;
  type: string;
}

interface DataObject {
  name: string;
  properties: Property[];
}

export async function createDataObject(dataObjectArg: DataObject, successCallback: Function, errorCallback?: Function) {
  try {
      const response = await fetch('/api/data-objects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObjectArg),
      });
      if (!response.ok) {
        throw new Error('Failed to save DataObject');
      }
      const savedDataObject = await response.json();
      successCallback(null, savedDataObject);
    } catch (error) {
      if (errorCallback) {
        errorCallback(error);
      }
    }
}