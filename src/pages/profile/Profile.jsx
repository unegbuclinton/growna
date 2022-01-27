import './Profile.css'
import Navbar from '../../components/nav/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import urch from '../../assets/urch.jpg'

function Profile() {
    return (
        <div className='profile'>
            <div className="profile__wrapper">
                <div className="profile__navbar">
                    <Navbar name='Profile'/>
                </div>

                <div className="profile__body">
                    
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
                                Name : Unegbu Urch
                                Contact Number : +234 90309053
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
