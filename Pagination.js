import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Pagination = () => {
    const [todos, setTodos] = useState([]);
    const [todosPerPage, setTodosPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        axios.get('url').then((res) => setTodos(res.data))
    }, [])

    const numOfTotalPages = Math.ceil(todos.length / todosPerPage);
    const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const indexOfLastTodo = currentPage * todosPerPage;

    const visibaleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const prevHandler = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    const nextHandler = () => {
        if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1)
    }
  
    return (
        <>
           <h2>Pagination</h2>
           <select onChange={(e) => setTodosPerPage(e.target.value)}>
                {[10, 20, 30, 40, 50].map((opt) => (
                <option>{opt}</option>
                ))}
            </select>
           {visibaleTodos.map((todo) => {
             <p>
                {todo.id}. {todo.title}
             </p>
           })}
           
             <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <button onClick={prevHandler}>Prev</button>
                <p>
                    {pages.map((page) => {
                        <span
                            onClick={() => setCurrentPage(page)}
                            // style={{color: currentPage === page ? 'active': ''}}
                            className={currentPage === page ? 'active': ''}
                        >{`${page} | `}</span>
                    })}
                </p>
                <button onClick={nextHandler}>Next</button>
             </div>
           

        </>
    )


}