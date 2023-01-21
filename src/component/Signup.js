import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    showPass: false,
  });

  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography sx={{ margin: 3 }} variant="h3">
            Create Your Account
          </Typography>
          <Paper elelvation={2} sx={{ padding: 5 }}>
            <form>
              <Grid container direction="column" spacing={2}>
                <Grid
                  container
                  direction="row"
                  spacing={2}
                  style={{ paddingLeft: "15px" }}
                >
                  <Grid item>
                    <TextField
                      type="text"
                      //   label="Enter your firstname"
                      placeholder="Enter your firstname"
                      variant="outlined"
                      required
                    />
                  </Grid>

                  <Grid item>
                    <TextField
                      type="text"
                      //   fullWidth
                      //   label="Enter your email"
                      placeholder="Enter your Lastname"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>

                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    // label="Enter your email"
                    placeholder="Email Address"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    // label="Password"
                    placeholder="Password"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid item>
                  <Button
                    type="submit"
                    style={{ padding: "15px" }}
                    fullWidth
                    variant="outlined"
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Signup;
