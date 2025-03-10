export async function deleteDataObject(id: string, successCallback: Function, errorCallback?: Function) {
  try {
    const response = await fetch(`/api/data-objects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id })
    });

    if (!response.ok) {
      throw new Error('Failed to delete data object');
    }
    successCallback({ id });
  } catch (err: any) {
    if (errorCallback) {
      errorCallback(err);
    }
  }
}