import React from 'react';
import css from './AboutPage.module.css'
import{NavLink, Route, Routes, Navigate} from 'react-router-dom'
import { AboutMe } from './subPages/aboutMe/AboutMe';
import { AboutSite } from './subPages/aboutSite/AboutSite';
import { Contacts } from './subPages/contacts/Contacts';
import PageHeader from '../../components/UI/pageHeader/PageHeader';

const AboutPage = () => {
    const setActive = ({ isActive }) => isActive ? `${css.link_active} ${css.link}` : css.link;
    return (
        <>
            <section className={css.about} id='about'>
            <PageHeader>О сайте</PageHeader>
            <nav className={css.links}>
                <NavLink to='about-site' className={setActive}>О сайте</NavLink>
                <NavLink to='about-me'  className={setActive}>О разразаботчике</NavLink>
                <NavLink to='contacts'  className={setActive}>Контакты</NavLink>
            </nav>
            <Routes>
                <Route index element={<Navigate to='about-site' replace />} />
                <Route path='*' element={<Navigate to='about-site' replace />}/>
                <Route path='about-me'  element={<AboutMe/>}/>
                <Route path='about-site' element={<AboutSite/>}/>
                <Route path='contacts' element={<Contacts/>}/>
            </Routes>
        </section>
        </>
    );
};

export {AboutPage};