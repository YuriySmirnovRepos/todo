import React from "react";
import ToDoListItem from "./todo-list-item";
import './todo-list.css'

const ToDoList = ({ todos=[] }) =>
{
    //Преобразование массива объектов в массив JSX-элементов
    const elems = todos.map((item) => {
        const { id, ...itemProps } = item;
        return  (
        <li key={item.id} className="list-group-item">
            <ToDoListItem {...itemProps} />
        </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            { elems }
        </ul>
    )
}

export default ToDoList;