import React, { useState } from 'react';
import MenuSuperior from './MenuSuperior';
import '../ComponentsCss/ModoEstudio.css';
import Footer from './Footer';
import { useTranslation } from "react-i18next";

const FileReaderComponent = () => {
  const [fileContent, setFileContent] = useState('');
  const [t, i18n] = useTranslation('common');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  const handleSelectFileClick = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = '.txt';
    inputElement.addEventListener('change', handleFileInputChange);
    inputElement.click();
  };

  const renderTable = () => {
    const lines = fileContent.split('\n');
    const tableRows = [];

    for (let i = 0; i < lines.length; i++) {
      if (i % 10 === 0) {
        tableRows.push([]);
      }

      const [spanish, translation] = lines[i].split(';');
      tableRows[Math.floor(i / 10)].push(
        <tr key={i}>
          <td>{translation}</td>
          <td>{spanish}</td>
        </tr>
      );
    }

    const tableColumns = tableRows.reduce((columns, row, index) => {
      if (index % 2 === 0) {
        columns.push([row]);
      } else {
        columns[columns.length - 1].push(row);
      }
      return columns;
    }, []);

    return tableColumns.map((column, index) => (
    <>
      <div key={index} className="table-column">
        {column.map((table, idx) => (
          <table key={idx}>
            <thead>
              <tr>
                <th>Traducción</th>
                <th>Castellano</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        ))}
      </div>
      </>
    ));
  };

  return (
  <>
    <MenuSuperior/>
    <div className="file-reader">
      <button onClick={handleSelectFileClick}>Seleccionar archivo</button>
      <div className="table-columns">{fileContent && renderTable()}</div>
      {!fileContent && <p>Selecciona un archivo de texto (.txt)</p>}
    </div>
  </>
  );
};

export default FileReaderComponent;




