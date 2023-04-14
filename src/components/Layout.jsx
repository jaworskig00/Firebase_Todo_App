import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Switch,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Logout } from "@mui/icons-material"
import { useAppSizeContext } from "../contexts"

const Layout = ({ children }) => {
  const [user] = useAuthState(auth)
  const { isLarge, setIsLarge } = useAppSizeContext()
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const toggleSizes = () => {
    localStorage.setItem("USER_PREFERENCE_IS_LARGE", JSON.stringify(!isLarge))
    setIsLarge((prev) => !prev)
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const signOut = () => {
    auth.signOut()
    handleClose()
  }

  return (
    <Paper
      elevation={0}
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "#fafafa",
        height: "100vh",
      }}
    >
      <AppBar color="primary" position="static">
        <Toolbar>
          <Stack
            direction={isMobile ? "column" : "row"}
            sx={{ width: "100%" }}
            pt={isMobile && 2}
            alignItems="center"
          >
            <Typography
              color="inherit"
              component="div"
              style={{ flexGrow: 1 }}
              fontSize={isLarge && 24}
            >
              TODO APP
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography fontSize={isLarge && 18}>Sizes:</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography
                  style={{ textDecoration: "underline" }}
                  fontSize={isLarge && 18}
                >
                  Normal
                </Typography>
                <Switch
                  color="default"
                  onChange={toggleSizes}
                  checked={isLarge}
                />
                <Typography
                  style={{ textDecoration: "underline" }}
                  fontSize={isLarge && 18}
                >
                  Large
                </Typography>
              </Stack>
              {user && (
                <>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <img
                      src={user.photoURL}
                      alt={user.displayName}
                      style={{
                        borderRadius: "50%",
                        ...{
                          width: isLarge ? 40 : 32,
                          height: isLarge ? 40 : 32,
                        },
                      }}
                    />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Typography
                      px={2}
                      mb={1}
                      fontSize={isLarge && 18}
                      style={{ textDecoration: isLarge ? "underline" : "none" }}
                    >
                      {user.displayName}
                    </Typography>
                    <MenuItem
                      onClick={signOut}
                      sx={{ justifyContent: "center" }}
                    >
                      {isLarge ? (
                        <Typography fontSize={18}>Logout</Typography>
                      ) : (
                        <Logout />
                      )}
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </Paper>
  )
}

export default Layout
