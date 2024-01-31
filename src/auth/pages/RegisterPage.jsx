import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  displayName: [(value) => value.length > 1, 'The Name must have more than 1 letters.'],
  email: [(value) => value.includes('@'), 'The email must have an @.'],
  password: [(value) => value.length >= 6, 'The password must have more than 5 letters.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (

    <AuthLayout title="Register">

      <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>

          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={(displayNameValid && formSubmitted) && displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={(emailValid && formSubmitted) && emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={(passwordValid && formSubmitted) && passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item sm={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item sm={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Create Account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>Already you have an account?</Typography>
            <Link component={RouterLink} color='inherit' to="/auth/login">
              Login
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}