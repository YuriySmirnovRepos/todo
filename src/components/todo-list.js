import React from "react";
import ToDoListItem from "./todo-list-item";

const ToDoList = ({ todos=[] }) =>
{
    //Преобразование массива объектов в массив JSX-элементов
    const elems = todos.map((item) => {
        // return  (<li>
        //         <ToDoListItem 
        //         label = {item.label}
        //         important = {item.important}/></li>)
        const { id, ...itemProps } = item;
        return  (<li key={item.id}>
            <ToDoListItem {...itemProps} />
            </li>)
    })
    return (
        <ul>
            { elems }
        </ul>
    )
}

export default ToDoList;