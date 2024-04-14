import css from './MainLabel.module.css';

function MainLabel({children,...props}){   
    return <label {...props} className={css.label+` ${props.className}`}>{children}</label>
}

export default MainLabel;