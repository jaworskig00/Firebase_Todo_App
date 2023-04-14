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
} from "@mui/material"
import { Logout } from "@mui/icons-material"

const Layout = ({ children }) => {
  const [user] = useAuthState(auth)
  const [anchorEl, setAnchorEl] = useState(null)

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
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
          <Typography color="inherit" component="div" sx={{ flexGrow: 1 }}>
            TODO APP
          </Typography>
          {user && (
            <div>
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
                  style={{ width: 32, height: 32, borderRadius: 16 }}
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
                <Typography px={2} mb={1}>
                  {user.displayName}
                </Typography>
                <MenuItem onClick={signOut} sx={{ justifyContent: "center" }}>
                  <Logout />
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </Paper>
  )
}

export default Layout
