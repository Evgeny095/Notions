import React from 'react';
import css from './Navigate.module.css';
import { useNavigate } from 'react-router-dom';


const Navigate = () => {
    const navigate=useNavigate();
    const goHome=()=>navigate('/',{ replace: true });
    const goBack=()=>navigate(-1);
    return (
        <div className={css.container}>
            <button onClick={goHome} className={css.link}>На главную</button>
            <span>/</span>
            <button onClick={goBack}  className={css.link}>Назад</button>
        </div>
    );
};

export default Navigate;