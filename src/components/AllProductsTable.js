'use strict';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faPenToSquare, faEye, faTrash)

var checkboxSelection = function (params) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};

var headerCheckboxSelection = function (params) {
  // we put checkbox on the name if we are not doing grouping
  return params.columnApi.getRowGroupColumns().length === 0;
};
function ActionCellRender (params) {
    const id = params.data.SKU
    console.log(id)
    const handleClick = ()=> {
      axios.delete(`http://localhost:5050/ProduitController/${id}`)
      .then((res)=> {
        console.log(res)
      })
      .catch((err)=> {
        console.log(err)
      })
  }
  return <div className='action-icons'>
                      <FontAwesomeIcon icon="fa-solid fa-eye" />
                      <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                      <FontAwesomeIcon onClick={handleClick} style={{color : "red"}} icon="fa-solid fa-trash" />
          </div>
}


const AllProductsTable = () => {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: '100%', height: '100vh' }), []);
  const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
  const [rowData, setRowData] = useState([]);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Product',
      field: 'Product',
      minWidth: 170,
      checkboxSelection: checkboxSelection,
      headerCheckboxSelection: headerCheckboxSelection,
    },
    { field: 'SKU' },
    { field: 'Category' },
    { field: 'Stock' },
    { field: 'Price' },
    { field: 'Status' },
    { field: 'Added' },
    { field: 'Action',
      cellRenderer : ActionCellRender},
  ]);


  const autoGroupColumnDef = useMemo(() => {
    return {
      headerName: 'Group',
      minWidth: 170,
      field: 'Product',
      valueGetter: (params) => {
        if (params.node.group) {
          return params.node.key;
        } else {
          return params.data[params.colDef.field];
        }
      },
      headerCheckboxSelection: true,
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        checkbox: true,
      },
    };
  }, []);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
  }, []);
  const paginationNumberFormatter = useCallback((params) => {
    return '[' + params.value.toLocaleString() + ']';
  }, []);
  
  useEffect(() => {
    axios.get("http://localhost:5050/ProduitController")
    .then((res)=> {
      const products = [...res.data]
      const updatedRowData = []
      products.map((pr)=> {
        updatedRowData.push({
          Product : pr.nameProduit,
          SKU : pr.id,
          Category : pr.categorie,
          Stock : pr.quanatity,
          Price : pr.price,
        })
      })
      console.log(rowData)
      setRowData([...updatedRowData])
    });
  }, []);

  const onFirstDataRendered = useCallback((params) => {
    gridRef.current.api.paginationGoToPage(4);
  }, []);

  const onPageSizeChanged = useCallback(() => {
    var value = document.getElementById('page-size').value;
    gridRef.current.api.paginationSetPageSize(Number(value));
  }, []);

  return (
    <div style={containerStyle}>
      <div className="example-wrapper">
        <div className="example-header">
          Page Size:
          <select onChange={onPageSizeChanged} id="page-size">
            <option value="10">10</option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>

        <div style={gridStyle} className="ag-theme-alpine">
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            autoGroupColumnDef={autoGroupColumnDef}
            defaultColDef={defaultColDef}
            suppressRowClickSelection={true}
            groupSelectsChildren={true}
            rowSelection={'multiple'}
            rowGroupPanelShow={'always'}
            pivotPanelShow={'always'}
            pagination={true}
            paginationPageSize={10}
            paginationNumberFormatter={paginationNumberFormatter}
            // onGridReady={onGridReady}
            onFirstDataRendered={onFirstDataRendered}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default AllProductsTable
