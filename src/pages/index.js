import DeleteButton from "@/components/button/delete-button";
import StatusBadge from "@/components/badge/status-badge";
import TodoNavbar from "@/components/todo/todo-navbar";
import {useState} from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const handleClick = () => {

    const newTodo = {
      title: todo,
      id: Date.now(),
      createdTime: new Date(Date.now()).toLocaleString('tr-TR')
    }

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodo('');
  }


  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="bg-gray-900 shadow sm:rounded-md max-w-3xl w-full relative">
        <TodoNavbar todo={todo} setTodo={setTodo} handleClick={handleClick}/>
        <ul className={`divide-y divide-gray-700 ${todos.length > 0 && 'border-t border-gray-500'}`}>
          {todos.map((todo) => (
              <li key={todo.id}>
                <div className="flex flex-row w-full justify-between">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                      <p className="truncate text-sm font-medium text-white">{todo.title}</p>
                      <div className="ml-2 flex flex-shrink-0">
                       <StatusBadge status={todo.status} className="sm:block hidden"/>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap hidden sm:flex sm:max-w-md md:max-w-xl text-xs">
                         <span className="font-semibold mr-1">Created Time:</span>
                          {todo.createdTime}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center px-4 py-4 sm:px-6">
                    <DeleteButton onClick={() => handleDelete(todo.id)}/>
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
