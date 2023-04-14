import { collection } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "./firebase"
import { Layout, SignIn, Todo } from "./components"

function App() {
  const [user] = useAuthState(auth)
  const [todos] = useCollection(collection(db, "todos"))
  const [done] = useCollection(collection(db, "done"))

  const todosData = todos?.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }))

  const todosFiltered = todosData?.filter((todo) => todo.userId === user?.uid)

  const doneData = done?.docs.map((doc) => ({
    uid: doc.id,
    ...doc.data(),
  }))

  const doneFiltered = doneData?.filter((done) => done.userId === user?.uid)

  return (
    <Layout>
      {user ? (
        <Todo todosData={todosFiltered} doneData={doneFiltered} />
      ) : (
        <SignIn />
      )}
    </Layout>
  )
}

export default App
