import cl from './MainButton.module.css'
import { Link } from 'react-router-dom';

function LinkButton({children, onClick, className, to,...props}){
    let classes=cl.button;
    if(className!==undefined && className!=='')
         classes=cl.button+' '+className;
    return <Link to={to} onClick={onClick} className={classes} {...props}>{children}</Link>
}

export default LinkButton;
// <LinkButton onClick={()=>console.log('click button')}>Click me</LinkButton>