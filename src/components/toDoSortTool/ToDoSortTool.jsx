

const ToDoSortTool = (sortState) => {

    const sort = (e) => {
        sortState(e.target.value)
    }

    return (
        <select name="" id="" defaultValue='all' onChange={sort}>
            <option value="all">Все</option>
            <option value="completed">Завершенные</option>
            <option value="NoCompleted">Не завершенные</option>
        </select>
    );
};

export default ToDoSortTool;