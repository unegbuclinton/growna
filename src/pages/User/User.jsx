import './User.css'
import { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from '../../components/card/Card'
import Navbar from '../../components/nav/Navbar'
import Table from '../../components/table/Table'
import { AiOutlineBars } from 'react-icons/ai'
import SidebarMobile from '../../components/sidebar/SidebarMobile'

function User() {



    const [click, setClick] = useState(false)

    return (
        <div className='user'>


            <div className={click ? "user__sidebarMobile__active" : "user__sidebarMobile"}>
                <SidebarMobile />
            </div>

            <div className="user__navbar">
                <Navbar name=' User' />
            </div>

            <div className="user__wrapper">
                <div className="user__sidebar">
                    <Sidebar />
                </div>

                <div className="user__main__content">


                    <div className={!click ? "user__hamburger" : "user__hamburger__color"} onClick={() => { setClick(!click) }}>
                        <AiOutlineBars />
                    </div>

                    <div className="user__cards">
                        <div className="user__card">
                            <Card description='Ave. time spent(in Minutes)' figure='45' />
                        </div>

                        <div className="user__card">
                            <Card description='Avg Course Completed' figure='15' />
                        </div>

                        <div className="user__card">
                            <Card description='Avg Reward' figure='N15000' />
                        </div>
                    </div>

                    <div className="user__main">

                        {/* <table id="user">
                            <tr >
                                <th>User Name <FaFilter className='user__filter' /></th>
                                <th>Average Time  <FaFilter className='user__filter' /></th>
                                <th>Completed Course <FaFilter className='user__filter' /></th>
                                <th>Enrolled Course  <FaFilter className='user__filter' /></th>
                                <th>Rewards<FaFilter className='user__filter' /></th>
                                <th>User Id <FaFilter className='user__filter' /></th>
                            </tr>
                            <tr>
                                <td className='user__user'>
                                    <div className="user__img__container">
                                        <img src={urch} alt="" className='user__img' />
                                    </div>
                                    <div className="user__details">
                                        Alfreds Futterkiste
                                        <p>Updated 1hour ago</p>
                                    </div>

                                </td>
                                <td> 15 minutes</td>
                                <td>01</td>
                                <td>7</td>
                                <td>200</td>
                                <td>0358</td>
                            </tr>
                            <tr>
                                <td className='user__user'>
                                    <div className="user__img__container">
                                        <img src={urch} alt="" className='user__img' />
                                    </div>
                                    <div className="user__details">
                                        Alfreds Futterkiste
                                        <p>Updated 1day ago</p>
                                    </div>

                                </td>
                                <td> 20 minutes</td>
                                <td>01</td>
                                <td>7</td>
                                <td>500</td>
                                <td>0154</td>
                            </tr>

                            <tr>
                                <td className='user__user'>
                                    <div className="user__img__container">
                                        <img src={urch} alt="" className='user__img' />
                                    </div>
                                    <div className="user__details">
                                        Alfreds Futterkiste
                                        <p>Updated 30 minutes ago</p>
                                    </div>

                                </td>
                                <td> 2 hours</td>
                                <td>01</td>
                                <td>7</td>
                                <td>100</td>
                                <td>0258</td>
                            </tr>

                        </table > */}
                        <Table />



                    </div>
                </div>

            </div>

        </div>
    )
}

export default User
