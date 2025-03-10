export async function getDataObjects(successCallback: Function, errorCallback?: Function) {
  try {
    const response = await fetch('/api/data-objects');
    if (!response.ok) {
      throw new Error('Failed to fetch data objects');
    }
    const data = await response.json();
    successCallback(data);
  } catch (err: any) {
    if (errorCallback) {
      errorCallback(err);
    }
  }
}
