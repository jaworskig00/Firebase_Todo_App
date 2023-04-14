import { ListItem, IconButton, ListItemText } from "@mui/material"
import { DeleteOutlined, Done } from "@mui/icons-material"
import { green } from "@mui/material/colors"

const TodoListItem = ({ divider, text, onRemoveClick, onDoneClick }) => (
  <ListItem divider={divider}>
    <ListItemText primary={text} />
    <IconButton aria-label="Mark Done" onClick={onRemoveClick}>
      <DeleteOutlined />
    </IconButton>
    <IconButton aria-label="Delete Todo" onClick={onDoneClick}>
      <Done sx={{ color: green[500] }} />
    </IconButton>
  </ListItem>
)

export default TodoListItem
