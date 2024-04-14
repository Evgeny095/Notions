import React from 'react';
import cl from './TodoPage.module.css'
import { ToDoInput } from '../../components/toDoInput/ToDoInput';
import { ToDoList } from '../../components/toDoList/ToDoList';
import PageHeader from '../../components/UI/pageHeader/PageHeader';

const TodoPage = () => {

    return (
        <div className={cl.container}>
            <PageHeader>Задачи</PageHeader>
            <ToDoInput />
            <ToDoList />
        </div>
    );
};

export { TodoPage };