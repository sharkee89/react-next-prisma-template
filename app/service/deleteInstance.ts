interface DeleteInstancePayload {
  id: string;
  instanceId: string;
}

export async function deleteInstance (payload: DeleteInstancePayload, successCallback: (data: any) => void, errorCallback?: (error: any) => void) {
  try {
    const response = await fetch(`/api/data-objects/${payload.id}/instance/${payload.instanceId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Failed to delete data object');
    }
    successCallback(payload);
  } catch (err: any) {
    if (errorCallback) {
      errorCallback('Error deleting data object: ' + err.message);
    }
  }
}