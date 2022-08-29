import * as React from "react";
import Button from "../../components/Button";
import Image from '../../assets/car.jpeg'
import logo from '../../assets/bookcar.png'
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
import {
  loginWithEmail,
  ICreateUserProps,
} from "../../store/services/Auth";
import * as Yup from "yup";

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
    <Box sx={{ height: "100vh" }} my='auto'>
    <Grid container component="main" sx={{background:"black",height:"100%"}}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "right",
          backgroundPosition: "100% 71%",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{display:"grid"}}>
        <Box
          sx={{
            my: 'auto',
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <img src={logo} alt='logo' width="150px" height='auto'/>
          </Box>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              store.dispatch(loginWithEmail(values));
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
                  Register
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                    sx={{cursor:"pointer"}}
                      onClick={() => history.push("/register")}
                      variant="body2"
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
    </Box>
  );
}
