import React, { useState } from "react";
import { Navigate }  from "react-router-dom";
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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import UserService from "../../services/userService";


function ErrorHandler(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {props.error}
    </Typography>
  );
}

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  const defaultTheme = createTheme();

  if (redirectToLogin) return <Navigate to={{ pathname: "/login" }} />;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await UserService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (err) {
      setError(true);
    }
  };

  const useStyle = {
    Button: {
      mt: 3, 
      mb: 2, 
      bgcolor: '#3DCCC7 !important',
      '&:hover': {
        backgroundColor: '#68D8D6 !important'
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#3DCCC7" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              onChange={(e) => setName(e.target.value)}
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
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
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={useStyle.Button}
              >
                Sign Up
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
                <Link onClick={(e) => setRedirectToLogin(true)} variant="body2">
                  {"Already have an account?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterForm;
