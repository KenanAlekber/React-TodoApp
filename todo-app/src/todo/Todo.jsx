import React from "react";

export function Todo() {

    const [todos, setTodos] = React.useState([]);

    const handleSetTodo = (e) => {

        let check = e.target[0].value.trim();
        if (check === "") {
            alert("Input is empty! Please, Enter the input");
            e.preventDefault();
        }

        else {
            e.preventDefault();
            const newTodo = { id: e.timeStamp.toFixed(0), Name: e.target[0].value }
            setTodos(prev => [...prev, newTodo]);
            e.target[0].value = " ";
        }
    }

    // React.useEffect(() => {
    //     console.log(todos);
    // }, [todos])

    // const done = (e) => {
    //     e.target.parentElement.parentElement.firstElementChild.className = "done"
    // }


    const removeTodo = (id) => { setTodos((t) => t.filter((item) => item.id !== id)) }

    return (
        <div className="todo">
            <h1>Todo List</h1>

            <form onSubmit={handleSetTodo}>
                <h3>Add Todo</h3>
                <input type="text" placeholder="  Add new todo" />
                <button className="add" type="submit">Add</button>
            </form>

            <ul>
                {todos.length ? (
                    <div>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <p>{todo.Name}</p>
                                <div className="btns">
                                    <button className="green btn">
                                        <i className="fa-solid fa-check"></i>
                                    </button>

                                    <button className="red btn" onClick={() => removeTodo(todo.id)}>
                                        <i className="fa-solid fa-x"></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </div>
                ) : (
                    <li style={{ justifyContent: "center", fontSize: "25px" }}> İt is empty! Please enter the input</li>
                )}
            </ul>
        </div>
    );

};