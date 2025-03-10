import DataObjectForm from "../components/data-object/data-object-form";
import DataObjectList from "../components/data-object/data-object-list";
import styles from './data-object.module.scss';

const DataObject = () => {
  return (
    <div className={styles.dataObjectPage}>
      <div>
        <DataObjectForm />
      </div>
      <div>
        <DataObjectList />
      </div>
    </div>
  )
}

export default DataObject;