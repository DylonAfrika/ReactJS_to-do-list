import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  let todos = [
    'Go to the gym',
    'Eat more fruits and veg',
    'Do LeetCode questions'
  ]

  return (
    <>
      <>
        <TodoInput />
        <TodoList todos={todos} />
      </>
    </>
  )
}

export default App
