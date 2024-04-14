import React, { useEffect, useState } from 'react';
import cl from './ToDoList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../../store/todoSlice'
import { ToDoItem } from '../toDoItem/ToDoItem';
import useTodosSort from '../../hooks/useTodosSort';
import useSearch from '../../hooks/useSearch';
import MainInput from '../UI/mainInput/MainInput';
import MainSelect from '../UI/mainSelect/MainSelect';


const ToDoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodosAsync());
    }, []);
    const { todos, status, error } = useSelector(data => data.todos);
    const arrTodos = useTodosSort(todos);
    const [sortValue, setSortValue] = useState('');
    const sort = (e) => {
        setSortValue(e.target.value)
    }
        //Сортировка
        const [searchValue, searchFunc, todosWithSearch]=useSearch(arrTodos(sortValue));

        //Сортировка

    return (<div className={cl.wrapper}>
        <div className={cl.manager_container}>
        {/* <input type="text" value={searchValue} onChange={(e)=>{searchFunc(e.target.value)}} placeholder='Поиск...' /> */}
        <MainInput type="text" value={searchValue} onChange={(e)=>{searchFunc(e.target.value)}} placeholder='Поиск...' />
        <MainSelect name="" id="" defaultValue='all' onChange={sort}>
            <option value="all">Все</option>
            <option value="completed">Завершенные</option>
            <option value="NoCompleted">Не завершенные</option>
        </MainSelect>
        </div>
        <div>
            <ul>
                {
                    todosWithSearch.map(todo =>
                        <li className={cl.todo_list} key={todo.id}>
                            <ToDoItem {...todo} />
                        </li>
                    )
                }
            </ul>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
        </div>
        {todos.length <= 0 && <h3>Задач ещё нет</h3>}
    </div>);
};

export { ToDoList };