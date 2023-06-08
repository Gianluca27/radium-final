import React, { useState } from 'react';
import styles from './table.module.css';
import { Button, ModalConfirm } from '../../Shared';
import { Link } from 'react-router-dom';

const SharedTable = ({ data, handleDelete, editLink }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const excludedProperties = ['_id', 'isActive', '__v'];
  const propertyNames = Object.keys(data[0]).filter(
    (propertyName) => !excludedProperties.includes(propertyName)
  );

  const renderCellValue = (value, propertyName) => {
    if (propertyName === 'password') {
      return '********'; // Reemplaza con el texto oculto que desees
    } else if (Array.isArray(value)) {
      let returnNames = '';
      value.forEach((element) => {
        returnNames += element.firstName + '';
      });
      return returnNames;
    } else if (typeof value === 'object') {
      if (value.name) {
        return value.name;
      }
      if (value.firstName) {
        return value.firstName;
      }
      return value._id;
    } else {
      return value;
    }
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            {propertyNames.map((propertyName) => (
              <th key={propertyName}>{propertyName}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              item={item}
              propertyNames={propertyNames}
              editLink={editLink}
              handleDelete={handleDelete}
              renderCellValue={renderCellValue}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableRow = ({ item, propertyNames, editLink, handleDelete, renderCellValue }) => {
  const [showAlert, setshowAlert] = useState(false);

  const confirmDeleteHandler = (id) => {
    handleDelete(id);
    showAlertHandler();
  };

  const cancelDeleteHandler = () => {
    showAlertHandler();
  };

  const showAlertHandler = () => {
    setshowAlert(!showAlert);
  };

  return (
    <tr>
      {propertyNames.map((propertyName) => (
        <td key={propertyName}>{renderCellValue(item[propertyName], propertyName)}</td>
      ))}
      <td>
        <Link to={editLink + item._id}>
          <Button type="edit" />
        </Link>
        <Button type="delete" onClick={showAlertHandler} />
        {showAlert && (
          <ModalConfirm
            title="Confirm"
            message="Are you sure you want to delete this item?"
            onConfirm={() => confirmDeleteHandler(item._id)}
            onCancel={cancelDeleteHandler}
          />
        )}
      </td>
    </tr>
  );
};

export default SharedTable;
