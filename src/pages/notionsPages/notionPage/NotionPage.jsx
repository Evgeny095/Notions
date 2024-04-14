import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOneNotionAsync } from '../../../store/notionSlice'
import { useParams } from 'react-router-dom';
import NotionItem from '../../../components/notionsItem/NotionItem';
import PageHeader from '../../../components/UI/pageHeader/PageHeader';
import css from './NotionPage.module.css'

const NotionPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneNotionAsync(id));
    }, []);
    const notion = useSelector(state => state.notions.oneNotinon);


    return (
        <section className={`one-notion ${css.wrapper}`} id='one-notion' name='one-notion'>
            <PageHeader>Заметка №{notion.id}</PageHeader>
            <div className={css.content}>
                <NotionItem onPage={true} {...notion} />
            </div>
        </section>
    );
};

export { NotionPage };