import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p>You don't have anything to do!</p>
    )
    return (
        <div className='todos'>
            {todoList}
        </div>
    )
}

export default Todos