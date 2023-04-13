import { ListItem, IconButton, ListItemText } from "@mui/material"
import { Clear, DeleteOutlined } from "@mui/icons-material"
import { red } from "@mui/material/colors"

const DoneListItem = ({ divider, text, onItemRemove, onUndoneClick }) => (
  <ListItem divider={divider}>
    <ListItemText primary={text} />
    <IconButton aria-label="Mark Done" onClick={onItemRemove}>
      <DeleteOutlined />
    </IconButton>
    <IconButton aria-label="Mark Done" onClick={onUndoneClick}>
      <Clear sx={{ color: red[500] }} />
    </IconButton>
  </ListItem>
)

export default DoneListItem
