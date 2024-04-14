import React, { useState } from 'react';
import { ModalWindow } from '../UI/modalWindow/ModalWindow';
import { useNavigate } from 'react-router-dom';
import css from './NotionItem.module.css';
import { deleteNotionAsync, patchNotionAsync } from '../../store/notionSlice';
import { useDispatch } from 'react-redux';
import Mainlabel from '../UI/mainLabel/MainLabel';
import AddInput from '../UI/addInput/AddInput';
import MainTextArea from '../UI/mainTextArea/MainTextArea'

const NotionItem = ({ id, title, userId, body, onPage = false }) => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const accept = (e) => {
        e.preventDefault();
        const form = e.target;
        const newValue = {
            id: id,
            userId: '0',
            title: form.title.value,
            body: form.body.value,
        }

        dispatch(patchNotionAsync(newValue))
    }
    const remove = (e) => {
        e.preventDefault();
        dispatch(deleteNotionAsync(id));
        if (!onPage) {
            setVisible(false);
        }
        if (onPage) {
            navigate('/notions', { replace: true });
        }

    }



    const viewObject = () => {
        return <div>
            <form autoComplete='off' onSubmit={accept} className={onPage ? `${css.container} ${css.onPage}` : css.container}>
                {/* <h4>{userId}</h4> */}
                <Mainlabel htmlFor="title">Заголовок</Mainlabel>
                <AddInput type="text" name='title' id='title' defaultValue={title} />
                <Mainlabel htmlFor="body">Содержание</Mainlabel>
                <MainTextArea name="body" id="" cols="30" rows="10" defaultValue={body} />
                <AddInput type="submit" value='Сохранить' />
                <AddInput type="submit" onClick={(e) => remove(e)} value='Удалить' />
                {/* {!onPage && <Link to={'/notions/' + id}>Открыть заметку в новом окне</Link>} */}
            </form>
        </div>
    }



    return (<>
        {
            !onPage && (<>
                <div>
                    <button className={css.button} onClick={() => setVisible(true)}>
                        <p>{title}</p>
                    </button>
                </div>
                <ModalWindow visible={visible} setVisible={setVisible} bigWindow={true}>
                    {viewObject()}
                </ModalWindow>
            </>)
        }
        {
            onPage && (
                <>
                    {viewObject()}
                </>
            )
        }
    </>);
};

export default NotionItem;