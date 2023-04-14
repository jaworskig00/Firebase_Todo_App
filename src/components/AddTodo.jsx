import {
  TextField,
  Paper,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { useAppSizeContext } from "../contexts"

const AddTodo = ({
  inputValue,
  onInputChange,
  onInputKeyPress,
  onButtonClick,
}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const { isLarge } = useAppSizeContext()

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid direction={matches ? "row" : "column"} container spacing={2}>
        <Grid xs={10} md={11} item>
          <TextField
            placeholder="Add Todo here"
            variant="standard"
            value={inputValue}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
            inputProps={{ style: { fontSize: isLarge ? 18 : "" } }}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={onButtonClick}
            style={{ fontSize: isLarge ? 18 : "" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AddTodo
