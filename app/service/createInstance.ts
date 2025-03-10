import { Instance } from "../constant/app.interface";

interface InstanceData {
  id: string,
  instanceValues: Instance[]
}

export async function createInstance (payload: InstanceData, successCallback: (data: any) => void, errorCallback?: (error: any) => void) {  
  const instanceData = {
    dataObjectId: payload.id,
    values: payload.instanceValues,
  };
  try {
    const response = await fetch(`/api/data-objects/${payload.id}/instance`, {
      method: 'POST',
      body: JSON.stringify(instanceData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to save instance');
    }
    const newData = await response.json();
    successCallback(newData);
  } catch (error) {
    if (errorCallback) {
      errorCallback(error);
    }
  }
}