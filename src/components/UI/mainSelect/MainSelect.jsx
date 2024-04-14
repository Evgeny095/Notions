import cl from './MainSelect.module.css';

function MainSelect({ children, ...props }) {

    return <div className={cl.castom}>
        <select className={cl.select} {...props}>
            {
                children
            }
        </select>
    </div>
}

export default MainSelect