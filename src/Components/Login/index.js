import React, { useState } from 'react';
import "./styles.css";
import logo from "./LOGO.jpg"
import { Form, FormControl } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const id = "anuragsahu060197@gmail.com";
    const password = "SRH#eye";
    const validate = (e) => {
        e.preventDefault();
        if(id !== email || password !== pass){
            alert("Credentials are not valid")
        }else{
            alert("Login successfully")
        }
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="/LOGO.jpg" />
                <form>
                    <input type="email" placeholder="Enter your email" value={email} required onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter your password" required value={pass} onChange={(e)=>setPass(e.target.value)} />
                    <button className='button' type='submit' onClick={validate} >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
