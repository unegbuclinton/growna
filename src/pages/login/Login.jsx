import './Login.css'
import grownabg from '../../assets/grownabg.png'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import industry from '../../assets/industry.jpg'
import { FaUserAlt } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { GiAngryEyes } from 'react-icons/gi'
import { Link } from 'react-router-dom'







function Login() {

    // Hook for input icon toogle 

    const [open, setOpen] = useState(false)

    const click = () => setOpen(!open)



    //Hook for input target value

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')





    // const url = 'http://35.231.148.225:8080/v1/company/login'


    const navigate = useNavigate();

    // const postReq = () => { 
    //     axios.post(url, {
    //         email,
    //         password
    //     }).then(res => {
    //         console.log(res.data)
    //         localStorage.setItem('user-token', res.data)
    //         navigate('/user')


    //     }).then(err => {

    //         console.log(err)

    //     })


    // }

    const loginBtn = ()=>{
        console.log(email , password)
        navigate('/user')
    }

    return (

        <div>

            <div className="login__wrapper">

                <div className="login__header__img">
                    <img src={grownabg} alt="" className='login__box__right__img' />
                </div>

                <div className="login__box">

                    <div className="login__box__left">

                        <div className="login__writeup">
                            <h1 className='login__header'>Welcome to GROWNA</h1>
                            <p className='login__description'>
                                Login
                            </p>
                        </div>

                        <div className="login__form">
                            <div className="input__space">
                                <input type="email" placeholder='UserName' onChange={(e) => setEmail(e.target.value)} className='login__input' />
                                <FaUserAlt size='15' color="black" className='input__icon' />
                            </div>

                            <div className="input__space">
                                <input type={open ? "text" : "password"} placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='login__input' />
                                {open ? <GiAngryEyes size='15' color="black" onClick={click} className='input__icon' /> : <FaEyeSlash size='15' color="black" onClick={click} className='input__icon' />}
                            </div>

                        </div>

                        <button className='login__btn' onClick={loginBtn}>Login</button>

                        <div className="login__membership">
                            <p className='login__member'><Link to="/signup">Not a Member ?</Link></p>
                        </div>
                    </div>

                    <div className="login__box__right">
                        <div className="login__img">
                            <img src={industry} alt="" className='img__img' />
                            <p className='login__right__text'>
                                Next Generation Upskilling Platform for Industrial Workforce.
                            </p>


                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}


export default Login
