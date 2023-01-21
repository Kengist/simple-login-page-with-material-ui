import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPas: false,
  });
  const handlePass = () => {
    setValues({
      ...values,
      showPas: !values.showPas,
    });
  };
  // const [showPassword, setshowPassword] = useState(false);
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Paper elevation={4} sx={{ padding: 5 }}>
            <Grid container spacing={2} direction="column">
              <Grid item>
                <TextField
                  type={"email"}
                  fullWidth
                  label="Enter your email"
                  placeholder="Enter Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item>
                <TextField
                  type={values.showPas ? "text" : "password"}
                  fullWidth
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePass}
                          aria-label="toggle password"
                          edge="end"
                        >
                          {values.showPas ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" fullWidth>
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
