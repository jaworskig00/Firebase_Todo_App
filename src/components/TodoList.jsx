import { List, Paper, Typography } from "@mui/material"
import TodoListItem from "./TodoListItem"
import { useAppSizeContext } from "../contexts"

const TodoList = ({ items, onItemRemove, onItemCheck }) => {
  const { isLarge } = useAppSizeContext()

  return (
    <>
      {items.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <Typography variant={isLarge ? "h4" : "h5"} p={2}>
            Todo
          </Typography>
          <List>
            {items.map((todo, idx) => (
              <TodoListItem
                {...todo}
                key={`TodoItem.${idx}`}
                divider={idx !== items.length - 1}
                onRemoveClick={() => onItemRemove(todo.id)}
                onDoneClick={() => onItemCheck(todo.id)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  )
}

export default TodoList
