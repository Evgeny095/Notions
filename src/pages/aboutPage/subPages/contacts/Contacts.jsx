import React from 'react';
import css from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={css.content}>
            <p>Свзяться со мной можно по электронной почте - <a href="mailto:evgeny.yn5@gmail.com">evgeny.yn5@gmail.com</a></p>
        </div>
    );
};

export { Contacts };