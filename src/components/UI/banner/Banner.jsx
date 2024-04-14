import React from 'react';
import css from './Banner.module.css'

const Banner = ({children,visible,setVisible}) => {
    if (visible === false) return null;
    return (
        <div className={[css.myModal, css.active].join(' ')} >
            <div className={css.myModelContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export {Banner};