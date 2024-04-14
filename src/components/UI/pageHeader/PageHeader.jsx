import cl from './PageHeader.module.css';
import Navigate from '../../navigate/Navigate';
import GoUp from '../../goUp/GoUp';

function PageHeader({ children }) {

    return <div className={cl.container}>
        <div className={cl.left_element}>
            <Navigate />
        </div>
        <h2 className={cl.text}>{children}</h2>
        <div className={cl.right_element}>
            <GoUp />
        </div>
    </div>
}

export default PageHeader;