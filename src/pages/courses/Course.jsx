import Card from '../../components/card/Card'
import Chat from '../../components/ccart/Chat'
import Navbar from '../../components/nav/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './Course.css'

function Course() {
    return (
        <div>

            <div className="course__navbar">
                <Navbar name='Courses' />
            </div>


            <div className="course__wrapper">

                <div className="course__sidebar">
                    <Sidebar />
                </div>

                <div className="course__main__content">
                    <div className="course__cards">
                        <div className="course__card">
                            <Card description='Courses' figure='7' />
                        </div>

                        <div className="course__card">
                            <Card description='Avg.User/Courses' figure='15' />
                        </div>

                        <div className="course__card">
                            <Card description='Assessments Completed' figure='15' />
                        </div>
                    </div>

                    <div className="course__content">
                        <div className="course__chart">
                            {/* <Chat /> */}
                        </div>

                        <div className="course__leadboard">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Course
