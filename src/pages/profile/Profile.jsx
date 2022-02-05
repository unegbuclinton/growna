import './Profile.css'
import { useState } from 'react'
import Navbar from '../../components/nav/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import urch from '../../assets/urch.jpg'
import SidebarMobile from '../../components/sidebar/SidebarMobile'
import {AiOutlineBars} from 'react-icons/ai'

function Profile() {

    const [click, setClick] = useState(false)


    return (
        <div className='profile'>

            <div className={click ? "profile__sidebarMobile__active" : "profile__sidebarMobile"}>
                <SidebarMobile />
            </div>
            
            <div className="profile__wrapper">
                <div className="profile__navbar">
                    <Navbar name='Profile' />
                </div>



                <div className="profile__body">

                    <div className={!click ? "profile__hamburger" : "profile__hamburger__color"} onClick={() => { setClick(!click) }}>
                        <AiOutlineBars />
                    </div>
                    <div className="profile__sidebar">
                        <Sidebar />
                    </div>

                    <div className="profile__main">
                        <div className="profile__img">
                            <img src={urch} alt="" className="profile__img__img" />
                        </div>
                        <div className="profile__contact__details">
                            <p className='contact__detail__header'>
                                Contact Details
                            </p>
                            <div className="contact__name">
                                <p> Name : Unegbu Urch</p>
                                <p> Contact Number : +234 90309053</p>
                            </div>

                        </div>

                        <div className="profile__company__details">

                            <p className='contact__detail__header'>
                                Company Details
                            </p>
                            <div className="contact__name">
                                <p className='contact__item'> Name : Unegbu Urch </p>
                                <p className='contact__item'>  Contact Details: 889744456945,5584551</p>
                                <p className='contact__item'>   No. Employees : 10 employees</p>
                                <p className='contact__item'>  Industry Vertical : EdTech</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
