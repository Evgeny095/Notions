import cl from './HomePage.module.css'
import PageHeader from '../../components/UI/pageHeader/PageHeader';
import working from '../../img/working.gif';
import { useSelector } from 'react-redux';


const HomePage = () => {
    const login = useSelector(state => state.loginSlices.loginSlice);

    return (
        <div className={cl.container}>
            <PageHeader>Главная страница</PageHeader>
            <h2 className={cl.header}>Добро пожаловать!
                <span> {login}</span>,
                этот сайт создан для того, чтобы помочь тебе достить, твоих целей! Здесь ты можешь вести заметки а также создавать для себя задачи и следить за их выполнением
            </h2>
            <div className={cl.img_wrap}>
                <img className={cl.working} src={working} alt="" />
            </div>
        </div>
    );
};

export { HomePage };