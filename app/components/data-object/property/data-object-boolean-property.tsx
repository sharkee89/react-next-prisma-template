import { DataObjectBooleanPropertyProps } from "./data-object-property";

const DataObjectBooleanProperty = ({ name, value, handleInputChange }: DataObjectBooleanPropertyProps) => {
  return (
    <input
      id={name}
      type="checkbox"
      checked={value || false}
      onChange={(e) => handleInputChange(name, e.target.checked)}
      className="w-4 h-4 text-blue-500"
    />
  );
}

export default DataObjectBooleanProperty;