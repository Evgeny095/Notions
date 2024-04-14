import React, { useState } from 'react';
import css from './ToDoInput.module.css'
import { useDispatch } from 'react-redux';
import { postTodoAsync } from '../../store/todoSlice';
import { ModalWindow } from '../UI/modalWindow/ModalWindow';
import AddButton from '../../components/UI/addButton/AddButton'
import AddInput from '../../components/UI/addInput/AddInput'

const ToDoInput = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);

    const btnAdd = () => {
        setVisible(true)
    }

    const add = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        dispatch(postTodoAsync({ title }));
        setVisible(false);
    }

    return (
        <div>
            {/* <button onClick={btnAdd}>Добавить задачу</button> */}
            <AddButton onClick={btnAdd}>Добавить задачу</AddButton>
            <ModalWindow visible={visible} setVisible={setVisible}>
                <form autoComplete='off' onSubmit={add} className={css.form} >
                    <AddInput type='text' name='title' placeholder='Введите задачу' />
                    <AddButton type='submit' value='Добавить' />
                </form>
            </ModalWindow>
        </div>
    );
};

export { ToDoInput };