import { ListItem, IconButton, ListItemText } from "@mui/material"
import { DeleteOutlined, Done } from "@mui/icons-material"
import { green } from "@mui/material/colors"
import { useAppSizeContext } from "../contexts"

const TodoListItem = ({ divider, text, onRemoveClick, onDoneClick }) => {
  const { isLarge } = useAppSizeContext()

  return (
    <ListItem divider={divider}>
      <ListItemText
        primary={text}
        primaryTypographyProps={{ fontSize: isLarge ? 20 : "" }}
      />
      <IconButton aria-label="Mark Done" onClick={onRemoveClick}>
        <DeleteOutlined fontSize={isLarge ? "large" : ""} />
      </IconButton>
      <IconButton aria-label="Delete Todo" onClick={onDoneClick}>
        <Done sx={{ color: green[500] }} fontSize={isLarge ? "large" : ""} />
      </IconButton>
    </ListItem>
  )
}

export default TodoListItem
