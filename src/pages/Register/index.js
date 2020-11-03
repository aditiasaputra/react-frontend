import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

const Register = () => {
    return(
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-image"alt="image-bg" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Gap height={20} />
                <Input label="Full Name" placeholder="Enter Full Name.." autoFocus />
                <Gap height={18} />
                <Input label="Email" placeholder="Enter Email.." type="email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Enter Password.." type="password" />
                <Gap height={18} />
                <Gap height={30} />
                <Button title="Register" />
                <Gap height={100} />
                <Link path="/login" title="Kembali ke login" />
            </div>
        </div>
    )
}

export default Register;