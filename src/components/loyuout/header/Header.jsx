import cl from './Header.module.css'
import { NavLink, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const login = useSelector(state => state.loginSlices.loginSlice);
    return <header className={cl.header} id='header'>
        <p className={cl.login}>{login}</p>
        <nav className={cl.header__nav}>
            <NavLink to='/' className={cl.header__link}>Главная</NavLink>
            <NavLink to='about' className={cl.header__link}>О сайте</NavLink>
            <NavLink to='/notions' className={cl.header__link}>Заметки</NavLink>
            <NavLink to='/to-do' className={cl.header__link}>Задачи</NavLink>
        </nav>
        <Navigate className={cl.navigte} />
    </header>
}

export { Header };