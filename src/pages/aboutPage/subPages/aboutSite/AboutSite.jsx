import React from 'react';
import css from './AboutSite.module.css'


const AboutSite = () => {
    return (
        <div className={css.content}>
            <p>Этот сайт является демонстрационным для портфолио, разработан на react.js в декабре 2022г.
                Данные для наполнения сайта взяты с API <a target='blank' href={'https://jsonplaceholder.typicode.com/'}>{`{JSON} Placeholder`}</a>.
                В разработке использовались такие библиотеки как: <a href='https://redux-toolkit.js.org/' target='blank'>redux-toolkit</a>, <a href='https://reactrouter.com/en/main' target='blank'>react router dom</a>, <a href='https://axios-http.com/ru/docs/intro' target='blank'>axios</a>.</p>
        </div>
    );
};

export { AboutSite };