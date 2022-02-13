import './Overview.css';
import Sidebar from '../../components/sidebar/Sidebar'
import { useState } from 'react'
import Navbar from '../../components/nav/Navbar';
import Chat from '../../components/ccart/Chat'
import Card from '../../components/card/Card';
import { AiOutlineBars } from 'react-icons/ai'
import SidebarMobile from '../../components/sidebar/SidebarMobile'

function Overview() {

    const [click, setClick] = useState(false)


    return <div className='overview'>

        <div className={click ? "overview__sidebarMobile__active" : "overview__sidebarMobile"}>
            <SidebarMobile />
        </div>

        <div className="overview__navbar">
            <Navbar name='Overview' />
        </div>

        <div className="overview__wrapper">
            <div className="overview__sidebar">
                <Sidebar />
            </div>

            <div className="overview__main__content">

                <div className={!click ? "overview__hamburger" : "overview__hamburger__color"} onClick={() => { setClick(!click) }}>
                    <AiOutlineBars />
                </div>

                <div className="overview__cards">
                    <div className="overview__card">
                        <Card description='Courses' figure='7' />
                    </div>

                    <div className="overview__card">
                        <Card description='Avg. courses' figure='10' />
                    </div>

                    <div className="overview__card">
                        <Card description='Assessments' figure='15' />
                    </div>
                </div>

                <div className="overview__content">
                    <div className="overview__chart">
                        <Chat />
                    </div>

                    <div className="overview__leadboard">
                        <h1> Leaderboard</h1>
                        <div className="leaderboard">
                            <p> Monthly</p>
                            <p> Weekly</p>
                            <p> All Time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Overview;
