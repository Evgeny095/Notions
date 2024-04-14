import React, { useState, useEffect } from 'react';
import css from './LoginWindow.module.css'
import { Banner } from '../UI/banner/Banner';
import { useDispatch } from 'react-redux';
import { initLogin } from '../../store/loginSlice'
import MainInput from '../UI/mainInput/MainInput';
import AddInput from '../UI/addInput/AddInput';
import MainLabel from '../UI/mainLabel/MainLabel';



const LoginWindow = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 1000);
    }, []);

    const dispatch = useDispatch();

    const ok = (e) => {
        e.preventDefault();
        const form = e.target;
        let data = form.login.value;
        data = data.trim()
        if (data) {
            setVisible(false);
            dispatch(initLogin(data))
        }
    }

    return (
        <Banner visible={visible} setVisible={setVisible}>
            <form className={css.form} autoComplete='off' onSubmit={ok}>
                <MainLabel htmlFor="login" >Пожалуйста представтесь</MainLabel>
                <MainInput name='login' id='login' type="text" maxLength='15' />
                <AddInput type="submit" value='Ok' />
            </form>
        </Banner>
    );
};

export default LoginWindow;