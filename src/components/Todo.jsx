import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase"
import { useInputValue } from "../hooks"
import { AddTodo, TodoList, DoneList } from "./"

const Todo = ({ todosData = [], doneData = [] }) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const [user] = useAuthState(auth)

  const addTodo = (text) => {
    addDoc(collection(db, "todos"), {
      id: Date.now(),
      userId: user.uid,
      text,
      checked: false,
    })
  }

  const deleteTodo = (idx) => {
    const todo = todosData.find(({ id }) => id === idx)
    deleteDoc(doc(db, "todos", todo.uid))
  }

  const checkTodo = (idx) => {
    const todo = todosData.find(({ id }) => id === idx)

    deleteDoc(doc(db, "todos", todo.uid))

    addDoc(collection(db, "done"), {
      userId: todo.userId,
      id: todo.id,
      text: todo.text,
      checked: true,
    })
  }

  const deleteDone = (idx) => {
    const done = doneData.find(({ id }) => id === idx)
    deleteDoc(doc(db, "done", done.uid))
  }

  const uncheckTodo = (idx) => {
    const done = doneData.find(({ id }) => id === idx)

    deleteDoc(doc(db, "done", done.uid))

    addDoc(collection(db, "todos"), {
      userId: done.userId,
      id: done.id,
      text: done.text,
      checked: false,
    })
  }

  const clearInputAndAddTodo = (_) => {
    const trimmedInputValue = inputValue.trim()
    if (!trimmedInputValue || trimmedInputValue.length < 1) return

    clearInput()
    addTodo(trimmedInputValue)
  }

  return (
    <>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todosData}
        onItemCheck={(idx) => checkTodo(idx)}
        onItemRemove={(idx) => deleteTodo(idx)}
      />
      <DoneList
        items={doneData}
        onItemUncheck={(idx) => uncheckTodo(idx)}
        onItemRemove={(idx) => deleteDone(idx)}
      />
    </>
  )
}

export default Todo
