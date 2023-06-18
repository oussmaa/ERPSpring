import React, { useEffect, useState } from 'react'
import DataTable from './Table'
import Badge from './Badge';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';




  
  // const rows = [
  //   { id: 1, product : "fanta", date: 24, total: `$${234}`, customers: `$${35}` },
  //   { id: 2, product : "fanta", date: 15, total: `$${234}`, customers: `$${42}` },
  //   { id: 3, product : "fanta", date: 35, total: `$${234}`, customers: `$${45}` },
  //   { id: 4, product : "fanta", date: 32, total: `$${234}`, customers: `$${16}` },
  //   { id: 5, product : "fanta", date: 17, total: `$${234}`, customers: `$${300}` },
  //   { id: 6, product : "fanta", date: 22, total: `$${234}`, customers: `$${150}` },
  //   { id: 7, product : "fanta", date: 14, total: `$${234}`, customers: `$${44}` },
  //   { id: 8, product : "fanta", date: 26, total: `$${234}`, customers: `$${36}` },
  //   { id: 9, product : "fanta", date: 28, total: `$${234}`, customers: `$${65}` }
  // ];


  const rowFunc = (pr)=> {
    return {
      id : pr.id,
      product : pr.title,
      date : '09/062023',
      total : pr.price,
      customers : "Aymen",
      payment : "master Card",
    }
  }

const RecentOrders = () => {
  const products = useSelector(state => state.products)
  const [row, setRow] = useState([])



  useEffect(()=> {
    const updeteRow = products.map((pr)=> rowFunc(pr))
    setRow(updeteRow)
  }, [products])


  const columns = [
    { field : 'id', headerName : "Order ID", width : 60, sortable: false, },
    { 
      field: 'product', 
      headerName: 'Product', 
      width : 130 ,
      sortable: false,
      renderCell : (params) => {
        return (<div 
                    style={{display : "flex", 
                            justifyContent : "center", 
                            alignItems : "center", 
                            gap : "8px"}}>
              {<Avatar  
                    sx={{ width: 24, height: 24 }} 
                    alt={params.row.product} 
                    src={products.filter(el => el.title === params.row.product)[0].images[0]} /> }
              {params.row.product}
        </div>
                );
        }
  },
    { field: 'date', headerName: 'Date', sortable: false, width : 130 },
    {
      field: 'customer',
      headerName: 'Customer',
    //   type: 'number',
      width : 100,
      sortable: false,
    },
    { field: 'total', headerName: 'Total',sortable: false, width : 70, minWidth: 50 },
    { field: 'payment', headerName: 'Payment',sortable: false, width : 70, minWidth: 50 },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width : 90,
      renderCell: (params) => {
            return (<Badge
                        content={`${params.row.sells > 20 ? 'Published' : 'Low Stock'}`}
                        nullValue={18}
                        valueBg={params.row.sells}
                      />
                    );
      },
    },
    { field: "action",
       headerName : "Action",
       sortable : false,
       width : 70,
         }
  ];
  
  return (
    <DataTable 
            // minWidth= "350px" 
            cls={"orders-table"}
            minWidth= "300px" 
            wth="100%" 
            mgTop={"24px"} 
            title={<div style={{display : "flex", alignItems : "center"}}>
                            Recent Orders 
                            <Badge content={"+2 orders"} nullValue={0} valueBg={2}/>
                    </div> }
            tableOptions ={{ rows : row ,
                             columns : columns,
                             width : "100%", 
                             minWidth : "300px",
                             checkboxSelection : true,
                             page : 0,
                             pageSize : 10 }} />
                    
  )
}

export default RecentOrders
