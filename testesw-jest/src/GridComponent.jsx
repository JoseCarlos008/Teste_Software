import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './GridComponent.css'; // Importando o arquivo CSS personalizado

const GridComponent = () => {
  const columnDefs = [
    { headerName: 'Column 1', field: 'col1', cellClass: 'custom-cell' },
    { headerName: 'Column 2', field: 'col2', cellClass: 'custom-cell' },
    { headerName: 'Column 3', field: 'col3', cellClass: 'custom-cell' },
    { headerName: 'Column 4', field: 'col4', cellClass: 'custom-cell' },
    { headerName: 'Column 5', field: 'col5', cellClass: 'custom-cell' }
  ];

  const rowData = Array.from({ length: 10 }, (_, i) => ({
    col1: `Value 1 - ${i}`,
    col2: `Value 2 - ${i}`,
    col3: `Value 3 - ${i}`,
    col4: `Value 4 - ${i}`,
    col5: `Value 5 - ${i}`
  }));

  return (
    <div className="ag-theme-alpine custom-theme" 
    style={{ height: 600, width: 1024 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
};

export default GridComponent;
