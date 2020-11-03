import React from 'react';
import { LoginBg } from '../../assets';
import { Button, Gap, Input, Link, Checkbox, Alert, LinkBadge, Card } from '../../components';

const Login = () => {
    return(
        <div className="main-page">
            <div className="left">
                <img src={ LoginBg } className="bg-image"alt="image-bg" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Gap height={20} />
                <Input label="Email" placeholder="Enter Email.." type="email" autoFocus />
                <Gap height={18} />
                <Input label="Password" placeholder="Enter Password.." type="password" />
                <Gap height={30} />
                <Checkbox title="Remember me"/>
                <Button title="Login" />
                <Gap height={100} />
                <Link path="/register" title="Belum punya akun? Daftar sekarang!" />
                <Alert title="Success!" message="Data has been inserted!" color="green" />
                <LinkBadge color="purple" textColor="text-white" link={true} path="/tes" />
                <LinkBadge color="red" textColor="text-white" link={false} />
                <Card tag={['photography', 'travel', 'winter']} />
            </div>
        </div>
    )
}

export default Login;