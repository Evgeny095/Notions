import cl from './MainInput.module.css'

function MainInput({...props}){
    if(props.type===undefined){
        props.type="text"
    }
    return <input className={cl.input} {...props}/>
}

export default MainInput;