import css from './AddInput.module.css'

function AddInput({ ...props }) {
    if (props.type === 'text')
        return <input {...props} className={css.input + ` ${props.className}`} />
    if (props.type === 'submit')
        return <input {...props} className={css.submit + ` ${props.className}`} />
}

export default AddInput;