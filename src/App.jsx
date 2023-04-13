import { AddTodo, Layout, TodoList } from "./components"
import DoneList from "./components/DoneList"
import { useInputValue, useTodos } from "./hooks"

function App() {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const {
    todos,
    doneTodos,
    addTodo,
    checkTodo,
    uncheckTodo,
    removeTodo,
    removeDone,
  } = useTodos()

  const clearInputAndAddTodo = (_) => {
    clearInput()
    addTodo(inputValue)
  }
  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={(idx) => checkTodo(idx)}
        onItemRemove={(idx) => removeTodo(idx)}
      />
      <DoneList
        items={doneTodos}
        onItemUncheck={(idx) => uncheckTodo(idx)}
        onItemRemove={(idx) => removeDone(idx)}
      />
    </Layout>
  )
}

export default App
