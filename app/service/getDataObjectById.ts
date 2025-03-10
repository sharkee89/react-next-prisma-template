export async function getDataObjectById (id: string, successCallback: Function, errorCallback?: Function) {
  if (!id) return;
  try {
    const response = await fetch(`/api/data-objects/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data object');
    }
    const data = await response.json();
    successCallback(data);
  } catch (err: any) {
    if (errorCallback) {
      errorCallback(err);
    }
  }
}