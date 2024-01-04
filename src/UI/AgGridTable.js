import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

const AgGridTable = ({rowDataArr, width, columns}) => {

//   const gridRef = useRef(); // Optional - for accessing Grid's API

  const [rowData, setRowData] = useState([]);  //Set rowData to Array of Objects, one Object per Row

  useEffect(()=>{
    setRowData(rowDataArr);
  },[rowDataArr]);

  // Each Column Definition results in one Column.
  const [columnDefs, setColumnDefs] = useState(columns);



  // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => {
      return {
        resizable: true,
        sortable: true,
      };
    }, []);

  // Example of consuming Grid Event
  const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
  }, []);

  return (
    <div>

      {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
      <div className="ag-theme-alpine"  style={{width: width, height: 200}}>

        <AgGridReact
            // ref={gridRef} // Ref for accessing Grid's API

            rowData={rowData} // Row Data for Rows

            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection='multiple' // Options - allows click selection of rows

            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
            />
      </div>
    </div>
  );
};

export default AgGridTable;