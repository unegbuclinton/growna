import './SidebarMobile.css';
import { VscPreview } from 'react-icons/vsc'
import { FaUserAlt } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { SiFuturelearn } from 'react-icons/si'
import growna1 from '../../assets/growna1.png'
import { Link } from 'react-router-dom'

function SidebarMobile() {
    return <div>
        <div className="sidebar__mobile__container">

            <ul className="page__links__mobile">

                <li className='page__link__logo'>
                    <img src={growna1} alt="" className="sidebar__mobile__img" />
                </li>

                <li className='page__link__mobile'>
                    <VscPreview color="white" className='side__icon' />
                    <Link className='side__link' to="/overview">Overview </Link>
                </li>

                <li className='page__link__mobile'>
                    <SiFuturelearn color='white' className='side__icon' />
                    <Link className='side__link' to="/course">Course </Link>
                </li>

                <li className='page__link__mobile'>
                    <FaUsers color="white" className='side__icon' />
                    <Link className='side__link' to="/user">User </Link>
                </li>

                <li className='page__link__mobile'>
                    <FaUserAlt color="white" className='side__icon' />
                    <Link className='side__link' to="/profile">Profile </Link>
                </li>
            </ul>
        </div>
    </div>;
}

export default SidebarMobile;
