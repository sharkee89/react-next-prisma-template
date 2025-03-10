export interface DataObjectPropertyProps {
  name: string;
  value: string;
  handleInputChange: (propertyName: string, value: any) => void;
}

export interface DataObjectBooleanPropertyProps {
  name: string;
  value: boolean;
  handleInputChange: (propertyName: string, value: any) => void;
}