import React, { useState } from 'react';
import cl from './NotionInput.module.css';
import { ModalWindow } from '../UI/modalWindow/ModalWindow';
import { useDispatch } from 'react-redux';
import { postNotionAsync } from '../../store/notionSlice';
import AddButton from '../UI/addButton/AddButton';
import AddInput from '../UI/addInput/AddInput';
import MainTextArea from '../UI/mainTextArea/MainTextArea';
import MainLabel from '../UI/mainLabel/MainLabel';


const NotionInput = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const userId = '0';

    const create = (e) => {
        e.preventDefault();
        const form = e.target;
        const el = {
            userId: userId,
            id: new Date().toISOString(),
            title: form.title.value,
            body: form.body.value
        };
        setVisible(false);
        dispatch(postNotionAsync(el));
    }

    return (<>
        <AddButton onClick={() => setVisible(true)}>Добавить заметку</AddButton>
        <ModalWindow visible={visible} setVisible={setVisible}>
            <form autoComplete='off' onSubmit={create} className={cl.container}>
                <MainLabel htmlFor="title">Заголовок</MainLabel>
                <AddInput type="text" id='title' name='title' maxLength='50' />
                <MainLabel htmlFor="body">Текст заметки</MainLabel>
                <MainTextArea name="body" id="body" cols="30" rows="5"></MainTextArea>
                <AddInput type="submit" value='Добавить заметку' />
            </form>
        </ModalWindow>
    </>);
};

export default NotionInput;