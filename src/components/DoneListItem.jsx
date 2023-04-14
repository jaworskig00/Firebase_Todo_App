import { ListItem, IconButton, ListItemText } from "@mui/material"
import { Clear, DeleteOutlined } from "@mui/icons-material"
import { red } from "@mui/material/colors"
import { useAppSizeContext } from "../contexts"

const DoneListItem = ({ divider, text, onItemRemove, onUndoneClick }) => {
  const { isLarge } = useAppSizeContext()

  return (
    <ListItem divider={divider}>
      <ListItemText
        primary={text}
        primaryTypographyProps={{ fontSize: isLarge ? 20 : "" }}
      />
      <IconButton aria-label="Mark Done" onClick={onItemRemove}>
        <DeleteOutlined fontSize={isLarge ? "large" : ""} />
      </IconButton>
      <IconButton aria-label="Mark Done" onClick={onUndoneClick}>
        <Clear sx={{ color: red[500] }} fontSize={isLarge ? "large" : ""} />
      </IconButton>
    </ListItem>
  )
}

export default DoneListItem
