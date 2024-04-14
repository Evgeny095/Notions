import React from 'react';
import css from './AboutMe.module.css'

const AboutMe = () => {
    return (
        <div className={css.content}>
            <p>Меня зовут Евгений, мне нравиться разрабатывать frontend приложения, больше информации обо мне можно получить в моем портфолио.</p>
        </div>
    );
};

export {AboutMe};