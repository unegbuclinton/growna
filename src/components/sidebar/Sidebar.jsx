import './Sidebar.css'
import { VscPreview } from 'react-icons/vsc'
import { FaUserAlt } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { SiFuturelearn } from 'react-icons/si'
import growna1 from '../../assets/growna1.png'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__container">
                <div className="sidebar__logo">
                    <img src={growna1} alt="" className="sidebar__img" />
                    <p className='sidebar__title'>GROWNA</p>
                </div>

                <ul className="page__links">

                    <li className='page__link'>
                        <VscPreview color="white" className='side__icon'/>
                        <Link className='side__link' to="/overview">Overview </Link>
                    </li>

                    <li className='page__link'>
                        <SiFuturelearn color='white' className='side__icon'/>
                        <Link className='side__link' to="/course">Course </Link>
                    </li>

                    <li className='page__link'>
                        <FaUsers color="white" className='side__icon'/>
                        <Link className='side__link' to="/user">User </Link>
                    </li>

                    <li className='page__link'>
                        <FaUserAlt color="white" className='side__icon'/>
                        <Link className='side__link' to="/profile">Profile </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
