import React from 'react';
import cl from './ToDoItem.module.css'
import {useDispatch} from 'react-redux';
import {patchTodoAsync, deleteTodoAsync} from '../../store/todoSlice'
import yes from '../../img/icons/yes.svg';
import not from '../../img/icons/not.svg';
import del from '../../img/icons/delete.svg';
import del2 from '../../img/icons/delete2.svg';
import IconButton from '../UI/iconButton/IconButton';

const ToDoItem = ({id,title,completed}) => {
    const colored=completed ? cl.completed : "";
    const dispatch=useDispatch();
    return (
        <div className={cl.container+" "+colored}>
            <p className={cl.todo_title}>{title}</p>
            {/* <input type="checkbox" name="completed" checked={completed} onChange={()=>dispatch(patchTodoAsync(id))}/> */}
            <div className={cl.icons}>
                {completed && <IconButton onClick={()=>dispatch(patchTodoAsync(id))}>{not}</IconButton>}
                {!completed && <IconButton onClick={()=>dispatch(patchTodoAsync(id))}>{yes}</IconButton>}
                {completed && <IconButton onClick={()=>dispatch(deleteTodoAsync(id))} >{del}</IconButton>}
                {!completed &&<IconButton onClick={()=>dispatch(deleteTodoAsync(id))} >{del2}</IconButton>}
            </div>
        </div>
    );
};

export {ToDoItem};