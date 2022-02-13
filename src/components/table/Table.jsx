import DataTable from 'react-data-table-component'
import axios from 'axios'
import { useState,useEffect } from 'react'



function Table() {


    const [datas, setDatas] = useState([])

    const url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios.get(url,{params: {_limit:9}})
            .then(res => {              
                setDatas(res.data)    
            })

    }, [url])



    const customStyles ={
        rows :{
            style :{
      
            }
        },
        headCells:{
            style :{
                background : '#06102C',
                color : '#fff'
            }
        },
        cells:{
            style :{
            
            
            }
        }

    }

    const columns = [

        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Username',
            selector: row => row.userName,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            filterable: true,

        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true,
            filterable: true,

        },
        {
            name: 'Website',
            selector: row => row.website,
            sortable: true,
            filterable: true,
        },
        {
            name: 'User Id',
            selector: row => row.id,
            sortable: true,
            filterable: true,

        }
    ]

    const data= datas.map(d =>({
   
                id: d.id,
                title: d.name,
               userName: d.username,
                email: d.email,
                city: d.address.city,
                website: d.website,
                userId: 555
    
    })
    
    )
  


    return (
        <>
            <DataTable
            className='data__table'
                columns={columns}
                data={data}
                customStyles={customStyles}
              
                
            />
        </>
    )
}

export default Table
