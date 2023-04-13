import {
  TextField,
  Paper,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material"

const AddTodo = ({
  inputValue,
  onInputChange,
  onInputKeyPress,
  onButtonClick,
}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))

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
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default AddTodo
