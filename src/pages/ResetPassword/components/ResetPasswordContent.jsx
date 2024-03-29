import { useState } from 'react'
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import SuccessModal from '../../../components/SuccessModal';
import Input from '../../../components/Input';
import Label from '../../../components/Label';

const ResetPasswordContent = () => {
    const [passwordType, setPasswordType] = useState("password")
    const [passwordType2, setPasswordType2] = useState("password")
    const [passwordInput, setPasswordInput] = useState("")
    const [passwordInput2, setPasswordInput2] = useState("")
    
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }

    const handlePasswordChange2 =(evnt)=>{
        setPasswordInput2(evnt.target.value);
    }
    

    const [show, setShow] = useState(false)

    const togglePassword =()=>{
        if(passwordType==="password")
        {
        setPasswordType("text")
        return;
        }
        setPasswordType("password")
    }

    const togglePassword2 =()=>{
        if(passwordType2==="password")
        {
        setPasswordType2("text")
        return;
        }
        setPasswordType2("password")
    }


    return ( 
        <div className="reset-password-content mx-auto mt-36 w-[89%] py-8 bg-transparent
        tb:bg-white tb:w-[60%] tb:px-14 py-[70px]
        lg:w-6/12 py-12 lg:px-13
        xxl:w-[528px] xxl:px-16">
            <SuccessModal onClose={() => setShow(false)} show={show}>
                <div className="modal-body-text">
                    <p className="text-[16px] leading-6 text-gray-700 font-semibold mb-10">Your new password has been changed successfully</p>
                </div>
                <div className="home-btn">
                    <Link to='/reset'>
                        <Input type={'button'} value={'Home'} className={"border rounded-lg text-white py-3 px-10 bg-[#0544B8] cursor-pointer hover:scale-x-[1.03] text-[20px]"}/>
                    </Link>
                </div>
            </SuccessModal>
            <h1 className='text-black text-2xl font-semibold leading-8 mb-7 text-center
            sm:text-3x1 mb-5
            tb:text-[30px] mb-5
            lg:text-[38px]'>Set a new password</h1>
            <p className='w-[92%] mx-auto text-base font-normal leading-6 text-gray-700 text-center
            sm:text-lg w-3/4
            tb:text-[18px] w-7/8
            lg:text-[18px] w-[99%]'>Your new password must contain an uppercase, a lowercase, a number and a unique character. You can not use a previously used password.</p>
            <div className="form-container">
                <form action="/reset">
                    <div className="password-field my-12
                    tb:my-10">
                        <div className="field password">
                            <div className="input-area password-field mb-6 relative">
                                <Label>{'New Password'}</Label>
                                <input type={passwordType} value={passwordInput} onChange={handlePasswordChange}  
                                name='password' placeholder='New Password' required
                                className='input_password mt-2 w-full py-[12px] pl-4 rounded-lg border border-gray-800 outline-2 outline-gray-800 bg-transparent' 
                                id='input-pass'/>
                                <span className="hide-icon absolute top-[45px] right-[15px]" onClick={togglePassword}>
                                    {passwordType==='password' ? <BsFillEyeSlashFill/> : <BsFillEyeFill/> }
                                </span>
                            </div>                    
                        </div>
                        <div className="field confirm-password">
                            <div className="input-area password-field relative">
                                <Label>{'Confirm Password'}</Label>
                                <input type={passwordType2} value={passwordInput2} onChange={handlePasswordChange2}  
                                name='password' placeholder='Confirm Password' required
                                className='input_password input_password mt-2 w-full py-[12px] pl-4 rounded-lg outline-2 outline-gray-800 border border-gray-800 bg-transparent' 
                                id='input-pass'/>
                                <span className="hide-icon absolute top-[45px] right-[15px]" onClick={togglePassword2}>
                                    {passwordType==='password' ? <BsFillEyeSlashFill/> : <BsFillEyeFill/> }
                                </span>
                            </div>                    
                        </div>
                    </div>
                    <div className="reset-password">
                        <Link to='/reset'>
                            <input type="submit" value='Reset Password' onClick={()=>{setShow(true)}} className="reset-btn text-center w-full bg-blue-700 border rounded-lg text-white py-4 cursor-pointer hover:scale-x-[1.03]"/>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
     );
}
 
export default ResetPasswordContent;