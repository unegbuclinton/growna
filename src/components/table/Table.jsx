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
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Average time',
            selector: row => row.averageTime,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Completed course',
            selector: row => row.completedCourse,
            sortable: true,
            filterable: true,

        },
        {
            name: 'Enrolled course',
            selector: row => row.enrolledCourse,
            sortable: true,
            filterable: true,

        },
        {
            name: 'Reward',
            selector: row => row.reward,
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

    const data = [
        {
            id: 1,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 2,
            title: 'Mezie king',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 3,
            title: 'Yash Patel',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 4,
            title: 'Christ mercy',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 5,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 6,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 7,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 8,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
        {
            id: 9,
            title: 'Unegbu Urch',
            averageTime: '15 minutes',
            completedCourse: 7,
            enrolledCourse: 10,
            reward: 200,
            userId: 555
        },
      
    ]



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
