import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  Link,
  Stack,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";
function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid
        xs={12}
        container
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item sm={6} xs={12} lg={6} justifyContent="space-around">
          <Card sx={{minHeight:580,maxWidth:375,m:2,borderRadius:'13px'}}>
           <Stack elevation={5}
            direction={'column'} 
            justifyContent={'flex-start'} 
            alignItems={"flex-start"} 
            mt={2}>
           <Link href="#" >
            <img src="./logoa.svg" height={30} width={150}/>
           </Link>
           <Typography sx={{fontSize:25,fontWeight:600,margin:3,mt:0.5}}>Hi, Welcome to<br/>Subscription App</Typography>
           <img src="./illustration_login.png" height={430} width={350}/>
           </Stack>
          </Card>
        </Grid>
        <Grid item sm={6} xs={12} lg={6}>
           <Stack variant='form' direction={'column'} justifyContent={'flex-start'} alignItems={"flex-start"} mt={2} sx={{minHeight:580,maxWidth:395,m:2}}>
          <br /><br /><br /><br />
          <Typography variant="h5" fontWeight={600} >Sign in</Typography>
          <Typography variant="span" color={'gray'} fontSize={13} marginTop={1}>Enter your details below.</Typography>
          <TextField
          color="warning"
          id="text-filled"
          variant="outlined"
          size="small"
          className="form-control"
          label="Email Address"
          fullWidth
          sx={{mt:4}}
        /><br />
        
         <FormControl variant="outlined" color="warning" fullWidth size="small">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Link href="#" mt={1} fontSize={13} sx={{color:'orangered'
}}>Forget Password</Link>
        <Button variant="contained" fullWidth color="warning" sx={{mt:1.5}}>Sign in</Button>
        <Link mt={1} fontSize={13} sx={{color:'green'}}>Don’t have an account?</Link>
        <Button variant="contained" fullWidth color="success" sx={{mt:1.5}}>Get Started</Button>
           </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;
