import ReactDOM from 'react-dom/client';
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () =>
{
    const todoData = [
        {label: "Drink coffee", important: false, id:1},
        {label: "Make awesome App", important: true, id:2},
        {label: "Have a lunch", important: false, id:3}
    ];

    return (
        <div>
        <AppHeader/>
        <SearchPanel/>
        <ToDoList todos={todoData}/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);