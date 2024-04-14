import React from 'react';
import cl from './NotionsPage.module.css'
import NotionInput from '../../../components/notionsInput/NotionInput';
import NotionList from '../../../components/notionsList/NotionList';
import PageHeader from '../../../components/UI/pageHeader/PageHeader';

const NotionsPage = () => {
    return (
        <div className={cl.notion}>
            <PageHeader>Заметки</PageHeader>
            <NotionInput/>
            <NotionList/>
        </div>
    );
};

export {NotionsPage};