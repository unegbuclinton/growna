import DataTable from 'react-data-table-component'

function Table() {

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
            name: 'Course',
            selector: row => row.course,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Completed Rate',
            selector: row => row.completedRate,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Length',
            selector: row => row.length,
            sortable: true,
            filterable: true,

        },
        {
            name: 'Rating',
            selector: row => row.rating,
            sortable: true,
            filterable: true,

        }
    ]

    const data = [
        {
            id: 1,
            course: ' HTML and CSS',
            completedRate: 60,
            length: '60 hours',
            rating: 4.6,
        },
        {
            id: 1,
            course: ' Javascript',
            completedRate: 60,
            length: '60 hours',
            rating: 4.6,
        },
        {
            id: 1,
            course: 'Python',
            completedRate: 60,
            length: '60 hours',
            rating: 4.6,
        },
        {
            id: 1,
            course: 'Rest Api',
            completedRate: 60,
            length: '60 hours',
            rating: 4.6,
        }
      
    ]



    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
              
                
            />
        </>
    )
}

export default Table
