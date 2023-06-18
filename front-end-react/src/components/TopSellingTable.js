import React, { useEffect, useState } from 'react'
import DataTable from './Table'
import Badge from './Badge';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';





  
  // const rows = [
  //   { id: 1, product : "fanta", sells: 24, price: `$${234}`, amount: `$${35}` },
  //   { id: 2, product : "fanta", sells: 15, price: `$${234}`, amount: `$${42}` },
  //   { id: 3, product : "fanta", sells: 35, price: `$${234}`, amount: `$${45}` },
  //   { id: 4, product : "fanta", sells: 32, price: `$${234}`, amount: `$${16}` },
  //   { id: 5, product : "fanta", sells: 17, price: `$${234}`, amount: `$${300}` },
  //   { id: 6, product : "fanta", sells: 22, price: `$${234}`, amount: `$${150}` },
  //   { id: 7, product : "fanta", sells: 14, price: `$${234}`, amount: `$${44}` },
  //   { id: 8, product : "fanta", sells: 26, price: `$${234}`, amount: `$${36}` },
  //   { id: 9, product : "fanta", sells: 28, price: `$${234}`, amount: `$${65}` }
  // ];


  const rowFunc = (pr)=> {
    return {
      id : pr.id,
      product : pr.title,
      sells : pr.rating,
      price : pr.price,
      amount : pr.discountPercentage,
      stock : pr.stock
    }
  }

const TopSellingTable = (props) => {

    const products = useSelector(state => state.products)
    // const loading = useSelector(state => state.loading)
    const [row, setRow] = useState([])


    useEffect(()=> {
      // console.log(products)
      // console.log(products.images)
            const updeteRow = products.map((pr)=> rowFunc(pr))
            setRow(updeteRow)
    }, [products])


    const columns = [
      { 
        field: 'product', 
        headerName: 'Product', 
        sortable: false,
        width: 170,
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
      { 
        field: 'sells', 
        headerName: 'Sells', 
        sortable: false,
        width: 130 
    },
      {
        field: 'amount',
        headerName: 'Amount',
        sortable: false,
        type: 'number',
        width: 90,
      },
      { 
        field: 'price', 
        headerName: 'Price', 
        sortable: false,
        width: 130 
    },
      {
        field: 'status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
              return (<Badge
                          content={`${+products.filter(el => el.title === params.row.product)[0].stock >= 100 ? 'Published' : 'Low Stock'}`}
                          nullValue={100}
                          valueBg={+products.filter(el => el.title === params.row.product)[0].stock}
                        />
                      );
        }
      },
    ];




  return (
    <DataTable 
            minWidth= "300px" 
            wth="60%" 
            title="Top Selling Product" 
            tableOptions ={{ rows : row ,
                             columns : columns,
                             width : "100%", 
                             minWidth : "300px",
                             checkboxSelection : false,
                             page : 0,
                             pageSize : 5 }} />
                    
  )
}

export default TopSellingTable

