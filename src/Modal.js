import { useState } from 'react';
import './Modal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export function Modal1(){
    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);
    const hideModal = () => setShow(false);

    return(
        <>
        <Button variant="primary" onClick={showModal}>
           Sing in
        </Button>
        <Modal show = {show} onHide = {hideModal}>
        <button className='close-btn' onClick={hideModal}>Close</button>
            <div className='form-container'>
                <div className='form'>
                    <p>Електронна пошта або мобільний номер</p>
                    <input className='userInput' type='text'></input>
                    <span>By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply.</span>
                    <span><a href=''>More info about Privacy Policy</a></span>
                    <div className='password-container'>
                        <p>Пароль</p>
                        <input className='userInput' type='text'></input>
                        <img className='password-icon' src='/images/Vector (1).png'></img>
                    </div>
                    <span><a href=''>Забули свій пароль?</a></span>
                    <div class="save-container">
                        <label class="checkbox-label">
                            <input type="checkbox"/>
                            Зберегти інформацію
                        </label>
                        <img className='info-icon' src='/images/Vector (2).png'></img>
                    </div>
                    <button className='continue-btn'>ПРОДОВЖИТИ</button>
                    <span className='create-span' >У вас ще немає облікового запису? Створіть його:</span>
                    <button className='create-btn'>СТВОРИТИ АККАУНТ</button>
                </div>
            </div>
        </Modal>
        </>
    )

}