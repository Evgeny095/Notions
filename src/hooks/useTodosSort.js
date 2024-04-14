

const useTodosSort = (arr) => {
    return (value) => {
        if (value === 'completed') {
            return arr.filter(el => el.completed === true);
        }
        else if (value === 'NoCompleted') {
            return arr.filter(el => el.completed === false);
        }
        else return arr;
    }
};

export default useTodosSort;