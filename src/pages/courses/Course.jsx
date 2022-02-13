import Card from '../../components/card/Card'
import Navbar from '../../components/nav/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableCourse from '../../components/table/TableCourse'
import { useState } from 'react'
import './Course.css'
import { AiOutlineBars } from 'react-icons/ai'
import SidebarMobile from '../../components/sidebar/SidebarMobile'

function Course() {

    const [click, setClick] = useState(false)

    
    return (
        <div className='course' >

            <div className={click ? "user__sidebarMobile__active" : "user__sidebarMobile"}>
                <SidebarMobile />
            </div>

            <div className="course__navbar">
                <Navbar name='Courses' />
            </div>

            <div className="course__wrapper">

                <div className="course__sidebar">
                    <Sidebar />
                </div>

                <div className="course__main__content">

                    <div className={!click ? "course__hamburger" : "course__hamburger__color"} onClick={() => { setClick(!click) }}>
                        <AiOutlineBars />
                    </div>

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
                        <div className="course__table" >
                            <TableCourse />
                        </div>

                        <div className="course__leadboard" >
                            <div className="leadboard" >
                                <h1> Leaderboard</h1>
                                <h2> Completed Rate</h2>
                                <div className="course__list">
                                    <p> Course 1</p>
                                    <p>90%</p>
                                </div>

                                <div className="course__list">
                                    <p> Course 2</p>
                                    <p>100%</p>
                                </div>

                                <div className="course__list">
                                    <p> Course 3</p>
                                    <p>70%</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Course
