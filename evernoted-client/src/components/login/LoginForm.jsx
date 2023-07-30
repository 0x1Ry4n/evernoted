import  React, { useState } from "react"
import { Navigate } from "react-router-dom";
import {
  Avatar, 
  Button, 
  CssBaseline, 
  TextField, 
  Link, 
  Grid, 
  Box, 
  Typography, 
  Container
} from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserService from "../../services/userService";

const ErrorForm = (props) => {
  return (
    <Typography {...props}>
      {props.error}
    </Typography>
  );
}

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RedirectToRegister, setRedirectToRegister] = useState(false);
  const [RedirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);
  const defaultTheme = createTheme()

  if (RedirectToRegister) return <Navigate to={{ pathname: "/register" }} />;
  else if (RedirectToNotes) return <Navigate to={{ pathname: "/notes" }} />;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await UserService.login({ email: email, password: password });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  const useStyle = {
    Button: {
      mt: 3, 
      mb: 2, 
      bgcolor: '#3DCCC7 !important',
      '&:hover': {
        bgcolor: '#68D8D6 !important'
      }
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 4, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#3DCCC7"}}>
            <LoginIcon />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1}}>
            <TextField 
              margin="normal"
              required
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField 
              type="password"
              margin="normal"
              required
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />

            <Box
               sx={{
                display: 'flex', 
                alignItems: 'center',
                gap: 2
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={useStyle.Button}
              >
                Sign In
              </Button>

              <Button
                type="reset"
                fullWidth
                variant="contained"
                sx={useStyle.Button}
              >
                Clear
              </Button>
            </Box>
            <Grid container>
              <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
              </Grid>
              <Grid item>
                <Link onClick={(e) => setRedirectToRegister(true)} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {error && <ErrorForm variant="body2" align="center" error="Email or password invalid!" />}
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
