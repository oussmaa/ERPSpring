import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PanelContainer from './PanelContainer';
import PanelHeader from './PanelHeader';



export default function DataTable({cls, minWidth, maxWth, wth, mgTop, title, tableOptions }) {


  return (
    <PanelContainer cls={cls} minWth={minWidth} maxWth = {maxWth} mgtop={mgTop} wth={wth}>
        <PanelHeader title= {title} />
      <div style={{ width : "100%" }}></div>
      <DataGrid
        
        style={{  width : "100%", overflowX : "scroll" }}
        rows={tableOptions.rows}
        columns={tableOptions.columns}
        initialState={{
            pagination: {
              paginationModel: { page: tableOptions.page, pageSize: tableOptions.pageSize },
            },
          }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        // checkboxSelection
        checkboxSelection ={tableOptions.checkboxSelection}
        autoHeight
      />
    </PanelContainer>
  );
}