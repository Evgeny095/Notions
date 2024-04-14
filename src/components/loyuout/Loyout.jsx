import React, { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LoginWindow from '../loginWindow/LoginWindow';
import cl from './Loyout.module.css'
import logo from '../../img/icons/logo.svg'
import useWindowSize from '../../hooks/useWindowSize';
import burger from '../../img/icons/burger.svg';

const Loyout = () => {
    const windowSize = useWindowSize();
    const [viewBurger, setViewBurger] = useState(false);
    const login = useSelector(state => state.loginSlices.loginSlice);
    const setActive = ({ isActive }) => isActive ? cl.setActive : cl.header__link;
    return (<>
        <LoginWindow />
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <header className={cl.header} id='header'>
                    <Link to='/' className={cl.logo}>
                        <img src={logo} alt="logo" />
                    </Link>
                    {windowSize.width > 768 && <nav className={cl.header__nav}>
                        <NavLink to='/' className={setActive}>Главная</NavLink>
                        <NavLink to='/about' className={setActive}>О сайте</NavLink>
                        <NavLink to='/notions' className={setActive}>Заметки</NavLink>
                        <NavLink to='/to-do' className={setActive}>Задачи</NavLink>
                    </nav>}
                    {
                        windowSize.width <= 768 && <>
                            <button className={cl.burge_btn} onClick={() => setViewBurger(true)}><img src={burger} alt="burger menu" /></button>
                            {viewBurger && <nav className={cl.header__nav_burger}>
                                <NavLink onClick={() => setViewBurger(false)} to='/' className={setActive}>Главная</NavLink>
                                <NavLink onClick={() => setViewBurger(false)} to='/about' className={setActive}>О сайте</NavLink>
                                <NavLink onClick={() => setViewBurger(false)} to='/notions' className={setActive}>Заметки</NavLink>
                                <NavLink onClick={() => setViewBurger(false)} to='/to-do' className={setActive}>Задачи</NavLink>
                            </nav>}
                        </>

                    }
                    <div className={cl.login_container}><p className={cl.login}>Привет: <span>{login}</span></p></div>
                    {/* <Navigate className={cl.navigte}/> */}
                </header>
                <main className={cl.main} id='main'>
                    <Outlet />
                </main>
            </div>
            <footer className={cl.footer} id='footer'>
                <p className='footer__text-item'>All rights reserved</p>
                <p className='footer__text-item'>Developed on 13.12.2022</p>
            </footer>
        </div>
    </>);
};

export { Loyout };