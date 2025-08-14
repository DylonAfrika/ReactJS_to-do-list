import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

//the array the user interacts with to store the todo items
function App() {
  const [todos, setTodos] = useState([  ])

  //this function handles the updating of items on the todolist
  function handleAddTodos (newTodo) {
    const newTodoList = [... todos, newTodo]
    setTodos (newTodoList)
  }

  //this function handles the deleting of items on the todolist
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {

  }

  return (
    <>
      <>
        <TodoInput handleAddTodos={handleAddTodos} />
        <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
      </>
    </>
  )
}

export default App
