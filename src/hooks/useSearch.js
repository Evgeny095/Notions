import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useSearch = (arr) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';
    //URL.ru/posts?post=abc&data=
    const searchFunc = (e) => {
        const query = e;
        setSearchParams({ post: query })
        setSearchValue(e);
    }
    const arrFiltres = arr.filter(post => post.title.includes(postQuery))

    return [searchValue, searchFunc, arrFiltres];

}

export default useSearch;