import * as React from "react";
import Button from "../../components/Button";
import {
  Grid,
  Box,
  Link,
  Paper,
  TextField,
  CssBaseline,
  Avatar,
  Typography,
  useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { store } from "../../store";
import { loginWithEmail, ICreateUserProps } from "../../store/services/Auth";
import * as Yup from "yup";
import Logo from "../../assets/bookcar.png";
import sideImage from "../../assets/Images/sideImage2.webp";

const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function Register() {
  const history = useHistory();
  const theme = useTheme();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        sx={{
          backgroundImage: `url(${sideImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "60%",
            margin: "auto",
            height: "100%",
          }}
        >
          <Box pb={2}>
            <img src={Logo} width="100px" />
          </Box>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              store.dispatch(loginWithEmail({ ...values, history }));
            }}
          >
            {({ errors, touched, values, setFieldValue, handleChange }) => (
              <Form style={{ width: "100%" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  size="full"
                  variant="contained"
                  bgColor="primary"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      onClick={() => history.push("/register")}
                      variant="body2"
                      sx={{ cursor: "pointer" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  );
}
