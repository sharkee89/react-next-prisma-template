import { DataObject } from "./data-object-list";

interface DataObjectPropertiesProps {
  dataObject: DataObject;
}

const DataObjectProperties = ({ dataObject }: DataObjectPropertiesProps) => {
  return (
    <>
      <h4 className="text-sm font-medium text-gray-200">Properties</h4>
      {dataObject.properties?.length === 0 ? (
        <p className="text-gray-300">No properties found.</p>
      ) : (
        <ul className="list-disc pl-6">
          {dataObject.properties.map((property: any) => (
            <li key={property.id} className="text-sm text-gray-300">
              <strong>{property.name}</strong>: {property.type}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default DataObjectProperties;