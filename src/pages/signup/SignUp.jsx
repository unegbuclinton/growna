import './SignUp.css'
import { useState } from 'react'
import axios from 'axios'
import industry from '../../assets/industry.jpg'
import grownabg from '../../assets/grownabg.png'
import { FaUserAlt } from 'react-icons/fa'
import { FaEyeSlash } from 'react-icons/fa'
import { GiAngryEyes } from 'react-icons/gi'
import { Link } from 'react-router-dom'


function SignUp() {

    //Hook for the input icon toogle
    const [open, setOpen] = useState(false)

    const click = () => setOpen(!open)

    //Hook for input e target value

    const [password, setPassword] = useState('')

    const [email, setEmail] = useState('')

    const [phone, setPhone] = useState('')

    const [address, setAddress] = useState('')


    const url = 'http://35.231.148.225:8080/v1/company/register'

    const postData = () => {
        axios.post(url, {
            email,
            password,
            phone,
            address
        }).then(res => {
            console.log(res.data)
            localStorage.setItem('user-token', res.data)



        }).then(err => {

            console.log(err)

        })


    }

    return (
        <div className='signup__wrapper'>

            <div className="signup__header__img">
                <img src={grownabg} alt="" className='login__box__right__img' />
            </div>

            <div className="signup__box">
                <div className="signup__box__left">

                    <div className="signup__writeup">
                        <h1 className='signup__header'>Welcome to GROWNA</h1>
                        <p className='signup__description'>
                            SignUp
                        </p>
                    </div>

                    <div className="signup__form">
                        <div className="input__space">
                            <input type="email" placeholder='UserName' onChange={(e) => setEmail(e.target.value)} className='signup__input' />
                            <FaUserAlt size='15' color="black" className='input__icon' />
                        </div>

                        <div className="input__space">
                            <input type={open ? "text" : "password"} placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='signup__input' />
                            {open ? <GiAngryEyes size='15' color="black" onClick={click} className='input__icon' /> : <FaEyeSlash size='15' color="black" onClick={click} className='input__icon' />}
                        </div>

                        <div className="input__space">
                            <input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)} className='signup__input' />
                        </div>

                        <div className="input__space">
                            <input type='tel' placeholder='Phone' onChange={(e) => setPhone(e.target.value)} className='signup__input' />
                        </div>

                    </div>

                    <button className='signup__btn' onClick={postData}>SignUp</button>

                    <div className="signup__membership">
                        <p className='signup__member'><Link to="/">Already a Member ?</Link></p>
                    </div>
                </div>

                <div className="signup__box__right">

                    <div className="signup__img">
                        <img src={industry} alt="" className='img__img' />
                        <p className='signup__right__text'>
                            Next Generation Upskilling Platform for Industrial Workforce.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp
