import React from 'react';
import css from './ModalWindow.module.css'
import close from '../../../img/icons/close.svg'

const ModalWindow = ({ children, visible, setVisible, bigWindow = false }) => {
    if (visible === false) return null;
    const windowSize = () => {
        if (bigWindow) {
            return css.BigModelContent;
        }
        else {
            return css.myModelContent
        }
    }
    return (
        <div className={[css.myModal, css.active].join(' ')} onClick={() => setVisible(false)}>
            <div className={windowSize()} onClick={e => e.stopPropagation()}>
                {children}
                <img src={close} alt="Закрыть окно" onClick={()=>setVisible(false)} className={css.btn_close}/>
            </div>
        </div>
    );
};

export { ModalWindow };