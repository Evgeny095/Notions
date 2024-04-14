import css from './MainTextArea.module.css'

function MainTextArea({children,...props}){
    return <textarea {...props} className={css.textArea+` ${props.className}`}>{children}</textarea>
}
export default MainTextArea;