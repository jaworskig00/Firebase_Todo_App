import { useState } from "react"

const useTodos = (initialTodos = [], initialDone = []) => {
  const [todos, setTodos] = useState(initialTodos)
  const [doneTodos, setDoneTodos] = useState(initialDone)

  return {
    todos,
    doneTodos,
    addTodo: (text) => {
      if (text !== "") {
        setTodos(
          todos.concat({
            text,
            checked: false,
          })
        )
      }
    },
    checkTodo: (idx) => {
      const todo = todos[idx]

      setTodos(todos.filter((_, index) => idx !== index))
      setDoneTodos(doneTodos.concat({ ...todo, checked: true }))
    },
    uncheckTodo: (idx) => {
      const todo = doneTodos[idx]

      setDoneTodos(doneTodos.filter((_, index) => idx !== index))
      setTodos(todos.concat({ ...todo, checked: false }))
    },
    removeTodo: (idx) => {
      setTodos(todos.filter((_, index) => idx !== index))
    },
    removeDone: (idx) => {
      setDoneTodos(doneTodos.filter((_, index) => idx !== index))
    },
  }
}

export default useTodos
