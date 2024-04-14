import cl from './IconButton.module.css';

function IconButton({className, alt, onClick, children, ...props}){
    let classes=cl.button;
    if(className!==undefined && className!=="")
        classes+=` ${cl.button}`;
    return <button onClick={onClick} className={classes}>
        <img className={cl.img} src={children} alt={alt} />
    </button>
}

export default IconButton;
 // <IconButton onClick={()=>console.log('click yes')}>{yes}</IconButton>