import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth } from "../firebase"
import { Grid, Typography, Button } from "@mui/material"
import { Google } from "@mui/icons-material"
import { useAppSizeContext } from "../contexts"

const SignIn = () => {
  const { isLarge } = useAppSizeContext()

  const signIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      mt={8}
      px={8}
      spacing={2}
    >
      <Grid item>
        <Typography variant={isLarge ? "h2" : "h3"} fontWeight="500">
          Hi there!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant={isLarge ? "h6" : "body1"} textAlign="center">
          In order to use our awesome Todo App, please log in via Google
          Authorization service
        </Typography>
      </Grid>
      <Grid item mt={4}>
        <Button
          aria-label="Sign In"
          variant="outlined"
          startIcon={<Google fontSize={isLarge ? "large" : ""} />}
          size="large"
          onClick={signIn}
          style={{ fontSize: isLarge ? 18 : "" }}
        >
          Sign in!
        </Button>
      </Grid>
    </Grid>
  )
}

export default SignIn
