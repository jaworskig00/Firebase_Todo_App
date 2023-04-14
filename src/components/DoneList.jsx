import { List, Paper, Typography } from "@mui/material"
import DoneListItem from "./DoneListItem"
import { useAppSizeContext } from "../contexts"

const DoneList = ({ items, onItemRemove, onItemUncheck }) => {
  const { isLarge } = useAppSizeContext()

  return (
    <>
      {items.length > 0 && (
        <Paper style={{ margin: 16 }}>
          <Typography variant={isLarge ? "h4" : "h5"} p={2}>
            Done
          </Typography>
          <List>
            {items.map((todo, idx) => (
              <DoneListItem
                {...todo}
                key={`TodoItem.${idx}`}
                divider={idx !== items.length - 1}
                onItemRemove={() => onItemRemove(todo.id)}
                onUndoneClick={() => onItemUncheck(todo.id)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  )
}

export default DoneList
