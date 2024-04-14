import { useEffect } from 'react';
import cl from './NotionList.module.css'
import NotionItem from '../notionsItem/NotionItem';
import { useSelector, useDispatch } from 'react-redux';
import { getNotinonsAsync } from '../../store/notionSlice'
import useSearch from '../../hooks/useSearch';
import MainInput from '../UI/mainInput/MainInput';


const NotionList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNotinonsAsync());
    }, []);
    const notions = useSelector(state => state.notions.notions);

    //Сортировка
    const [searchValue, searchFunc, notionsWithSearch] = useSearch(notions);

    //Сортировка

    return (<div className={cl.wrapper}>
        {/* <input className={cl.input} type="text" value={searchValue} onChange={(e)=>{searchFunc(e.target.value)}} placeholder='Поиск...' /> */}
        <MainInput value={searchValue} onChange={(e) => { searchFunc(e.target.value) }} placeholder='Поиск...' />
        <ul className={cl.notion_container}>
            {
                notionsWithSearch.map(notion =>
                    <li key={notion.id}>
                        <NotionItem {...notion} />
                    </li>
                )
            }
        </ul>
        {(notions.length <= 0) && <h3>Заметки не найдены</h3>}
    </div>);
};

export default NotionList;