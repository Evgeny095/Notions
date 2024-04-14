import cl from './Addbutton.module.css'
import icon from '../../../img/icons/add.png'

function AddButton({children, onClick, className}){
    let classes=cl.button;
    if(className!==undefined && className!=='')
         classes=cl.button+' '+className;
    return <button onClick={onClick} className={classes}>
        <img src={icon} alt="add" />
        <span>{children}</span>
        </button>
}

export default AddButton;
// <MainButton onClick={()=>console.log('click button')}>Click me</MainButton>