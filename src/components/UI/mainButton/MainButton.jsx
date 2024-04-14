import cl from './MainButton.module.css'

function MainButton({children, onClick, className, ...props}){
    let classes=cl.button;
    if(className!==undefined && className!=='')
         classes=cl.button+' '+className;
    return <button onClick={onClick} className={classes} {...props}>{children}</button>
}

export default MainButton;
// <MainButton onClick={()=>console.log('click button')}>Click me</MainButton>