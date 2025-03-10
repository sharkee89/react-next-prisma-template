import { DataObjectPropertyProps } from "./data-object-property";

const DataObjectNumberProperty = ({name, value, handleInputChange}: DataObjectPropertyProps) => {
  return (
    <input
      id={name}
      type="number"
      value={value || ''}
      onChange={(e) => handleInputChange(name, e.target.value)}
      className="px-4 py-2 border border-gray-600 rounded-md text-gray-100 bg-gray-700"
    />
  );
}

export default DataObjectNumberProperty;