import { List, Paper, Typography } from "@mui/material"
import DoneListItem from "./DoneListItem"

const DoneList = ({ items, onItemRemove, onItemUncheck }) => (
  <>
    {items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <Typography variant="h5" p={2}>
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

export default DoneList
