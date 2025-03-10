import { Instance } from "@/app/constant/app.interface";

interface ExistingInstanceProps {
  instance: Instance;
  handleDeleteInstance: (dataObjectId: string, instanceId: string) => void;
}

const ExistingInstance = ({ instance, handleDeleteInstance}: ExistingInstanceProps) => {

  return (
    <div key={instance.id} className="bg-gray-700 p-4 rounded-lg relative">
      <h5 className="text-lg font-semibold text-gray-100">{instance.name}</h5>
      <pre className="text-gray-300">{JSON.stringify(instance.values, null, 2)}</pre>
      <button
        type="button"
        onClick={() => handleDeleteInstance(instance.dataObjectId, instance.id)}
        className="absolute top-0 right-0 mt-0 flex items-center justify-center w-12 h-12 text-orange-500 hover:text-orange-600 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default ExistingInstance;