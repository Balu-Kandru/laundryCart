import { Header } from "../header/header";
import Referral from "../referral/referral";
import Aboutus from "../aboutusfooter/aboutus";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../register/register.css";
import { useState } from "react";
const Register = ()=>{
    const [registerState,setregisterState] = useState({});
    const navigate = useNavigate();
    const gotosignin = ()=>{
        navigate("/");
    }
    const handleLogin = ()=>{
        axios({
            url :"http://localhost:3001/user/register",
            method: "POST",
            headers : {

            },
            data : registerState
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        <div className="register-container">
        <Header/>
        <section className="left-register-container">
        <div>
        <p className="register-core-test">Laundry Service</p>
        <p className="register-slogan">Doorstep Wash & Dryclean Service</p>
        </div>
        <div className="da-2">
            <p className="da-21">Don't have An Account?</p>
        </div>
        <div className="register-button-sontainer">
            <button className="register-signin-button" onClick={gotosignin}>Sign In</button>
        </div>
        </section>
        <section className="right-register-container">
            <div className="register-text">
                <p className="register-core-title-text">Register</p>
            </div>
            <div className="vl1"></div>
            <form>
                <div className="register-name-input-section">
                    <input id="name1" type="text" placeholder="Name" className="register-name-input-section-name" onChange={(e)=>{setregisterState({...registerState, name: e.target.value})}}/>
                <hr className="hr3"></hr>
                </div>
                 <div className="register-email-input-section">
                    <input id="email1" type="email1" placeholder="Email" className="register-email-input-section-email" onChange={(e)=>{setregisterState({...registerState, email: e.target.value})}}/>
                    <hr className="hr4"></hr>   
                </div>
                <div className="register-phone-input-section">
                    <input id="phone1" type="text" placeholder="Phone" className="register-phone-input-section-section-phone" onChange={(e)=>{setregisterState({...registerState, phone: e.target.value})}}/>
                    <hr className="hr5"></hr>   
                </div>
                <div className="register-state-input-section">
                    <input id="state" type="text" placeholder="State" className="register-state-input-section-state" onChange={(e)=>{setregisterState({...registerState, state: e.target.value})}}/>
                    <hr className="hr6"></hr>   
                </div>
                <div className="register-district-input-section">
                    <input id="district" type="text" placeholder="District" className="register-state-input-section-district" onChange={(e)=>{setregisterState({...registerState, district: e.target.value})}}/>
                    <hr className="hr7"></hr>   
                </div>
                <div className="register-address-input-section">
                    <input id="address" type="text" placeholder="Address" className="register-address-input-section-address" onChange={(e)=>{setregisterState({...registerState, address: e.target.value})}}/>
                    <hr className="hr8"></hr>   
                    </div>
                <div className="register-pincode-input-section">
                    <input id="pincode" type="text" placeholder="Pincode" className="register-pincode-input-section-pincode" onChange={(e)=>{setregisterState({...registerState, pincode: e.target.value})}}/>
                    <hr className="hr9"></hr>   
                </div>
                <div className="register-checkbox-input-section">
                    <input  id="checkbox-register" type="checkbox"/>
                    <label htmlFor="checkbox-register" className="checkbox-text">I agree to Terms & Condition receiving marketing and promotional materials</label>
                </div>
            </form>
            <div className="register-button-container">

            <button type="submit" className="register-button-input-section" onClick={handleLogin}>Register</button>
            </div>
        </section>
        <Referral/>
        <Aboutus/>
        <Footer/>
        </div>
        </>
    )
}

export default Register;