import React from "react";
import { useForm,  Controller } from "react-hook-form";
import { Container, Typography, TextField, Checkbox, Button, Stack, Grid, FormLabel, FormControl } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import "./App.css";

function LoginPage() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ height: "100vh" }}>
        <Grid item xs={12} md={6}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Log in
            </Typography>
            
            <FormControl size="medium" fullWidth error={!!errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required.',
              pattern: {
                value: /^$|.+@.+..+/,
                message: 'Email is not valid.'
              }
            }}
            render={({ field }) => (
              <TextField {...field} id="email" variant="outlined" placeholder="Enter your email" size="small" type="email" helperText={errors.email?.message} />
            )}
          />
        </FormControl>
            
        <FormControl size="medium" fullWidth error={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long.'
              }
            }}
            render={({ field }) => (
              <TextField {...field} id="password" variant="outlined" size="small" type="password" helperText={errors.password?.message} />
            )}
          />
        </FormControl> 
            
            <Stack direction="row" alignItems="center" spacing="auto">
              <Stack direction="row" alignItems="center" spacing={1}>
                <Checkbox />
                <Typography variant="body2" style={{ color:"GrayText" }}>Remember for 30 days</Typography>
               </Stack>
               <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
                  Forgot password?
                </Typography>
            </Stack>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign in
            </Button>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Or
            </Typography>

            <Stack direction="column" spacing={1}>
              <Button variant="outlined" color="info" fullWidth>
                <FacebookRoundedIcon sx={{ mr: 2}} /> <h5 style={{  fontFamily:"inherit" ,color:"black" , margin:"0px", padding:"1px" }}> Continue with Facebook</h5>
              </Button><br/>
              <Button variant="outlined" color="info" fullWidth>
                <GoogleIcon sx={{ mr: 2}}/> <h5 style={{  fontFamily:"inherit" ,color:"black" , margin:"0px", padding:"1px" }}> Continue with Google</h5>
              </Button>
            </Stack>

            <Stack direction="row" alignItems="center" style={{ display: "flex", justifyContent:"center", columnGap: "5px" }}>
            <Typography variant="body2" color="primary" sx={{ mt: 2 }} >
              Sign up as Student 
            </Typography>
            <Typography variant="body2" align="center"  sx={{ mt: 2 }} >
              or
            </Typography> 
            <Typography variant="body2" align="center"color="primary" sx={{ mt: 2 }}>
              Sign up as Tutor
            </Typography>
            </Stack>


            <Typography variant="caption" align="center"  sx={{ mt: 2 ,color:"GrayText"}}>
              By clicking Login to Continue you agree to 
            </Typography>
            <Typography variant="caption" align="center" sx={{ mt: 2, color:"darkgrey" }}>
              Terms & Use and Privacy Policy
            </Typography>

            
          </Stack>
        </form>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <img src="./image/1loginpage.jpg"  alt="Loginimage" style={{ height: "740px"}} sx={{ objectFit: "cover", width: "100%", height: "100%" }} />
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default LoginPage;
