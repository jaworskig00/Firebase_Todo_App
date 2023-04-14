import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth } from "../firebase"
import { Grid, Typography, Button } from "@mui/material"
import { Google } from "@mui/icons-material"

const SignIn = () => {
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
        <Typography variant="h3" fontWeight="500">
          Hi there!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" textAlign="center">
          In order to use our awesome Todo App, please log in via Google
          Authorization service
        </Typography>
      </Grid>
      <Grid item mt={4}>
        <Button
          aria-label="Sign In"
          variant="outlined"
          startIcon={<Google />}
          size="large"
          onClick={signIn}
        >
          Sign in!
        </Button>
      </Grid>
    </Grid>
  )
}

export default SignIn
