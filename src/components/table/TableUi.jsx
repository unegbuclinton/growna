import React from 'react'

import DataTable from 'react-data-table-component'

function TableUi() {
   
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            filterable: true,
        },
        {
            name: 'User Completed Rate',
            selector: row => row.userCompletedRate,
            filterable: true,
        },
        {
            name: 'Length',
            selector: row => row.length,
            filterable: true,
        },
        {
            name: 'Rating',
            selector: row => row.rating,
            filterable: true,
        }
    ];
    
    const data = [
        {
            id: 1,
            title: 'Fire safety',
            userCompletedRate: '90',
        },
        {
            id: 2,
            title : 'Courses',
            length: '80',
        },
        {

        }
    ]
    return (
        <div>
             <DataTable
            columns={columns}
            data={data}
        />
        </div>
    )
}

export default TableUi


