import './Navbar.css'
import urch from '../../assets/urch.jpg'
import { BiLogOutCircle } from 'react-icons/bi'
import {  Link } from 'react-router-dom'



function Navbar({name}) {
    return (
        <>
            <ul className="navbar__items">
                <div className="navbar__left">
                    {name}
                </div>

                <div className="navbar__right">

                    <div className="navbar__username">
                        Unegbu Uche
                    </div>

                    <div className="navbar__img">
                        <img src={urch} alt="" className='navbar__img__img' />
                    </div>

                    <div className="navbar__logout">
                        <Link to="/">
                            <BiLogOutCircle size='25' color='#06102C ' />
                        </Link>

                    </div>
                </div>
            </ul>
        </>
    )
}

export default Navbar
