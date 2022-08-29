import * as React from "react";
import Button from "../../components/Button";
import Image from '../../assets/Images/g6.png'
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
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { store } from "../../store";
import { createUserWithEmail,ICreateUserProps } from "../../store/services/Auth";

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(10, "Too Short!")
    .max(13, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  gender: Yup.string().required("Required"),
});

export default function Signup() {
  const history = useHistory();
  const theme = useTheme();

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
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
              name: "",
              email: "",
              password: "",
              gender: "male",
              phoneNumber: 123,
            }}
            validationSchema={SignupSchema}
            onSubmit={(values: ICreateUserProps) => {
              store.dispatch(createUserWithEmail(values));

              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched, values, setFieldValue, handleChange }) => (
              <Form style={{ width: "100%" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={handleChange}
                  value={values.name}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
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
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  autoFocus
                  onChange={handleChange}
                  value={values.phoneNumber}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />
                <FormControl sx={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    defaultValue={values.gender}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => setFieldValue("gender", e.target.value)}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                  {touched.gender && Boolean(errors.gender) && (
                    <FormHelperText sx={{ color: theme.palette.error.main }}>
                      {errors.gender}
                    </FormHelperText>
                  )}
                </FormControl>
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
                      onClick={() => history.push("/login")}
                      variant="body2"
                    >
                      {"Already have an account? Login"}
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
