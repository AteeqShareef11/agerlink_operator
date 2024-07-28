import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Grid,
  Stack,
  Checkbox,
  TextField,
  Typography,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
} from '@mui/material';

import useForm from 'src/hooks/validation';

import { client, clientGrey } from 'src/theme/palette';

import Iconify from 'src/components/iconify/iconify';
import LoadingButton from 'src/components/shared/loadingButton/LoadingButton';

import Mail from '../../../public/assets/auth/mail.svg';
import Logo from '../../../public/assets/auth/Logo.svg';
import AuthBGLogin from '../../../public/assets/auth/auth_bg.png';

const styles = {
  position: 'relative',
  minHeight: '100vh',
  height: '100%',
  backgroundImage: `url(${AuthBGLogin})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
};

const combinedStyles = {
  ...styles,
};

const initialValue = {
  email: '',
  password: '',
};

const validationRules = {
  email: (value) => {
    if (!value) {
      return 'This field is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  },
  password: (value) => (value ? '' : 'This field is required'),
};

const InputPropsStyle = (isAutoFilled) => ({
  sx: {
    color: clientGrey[500],
    pl: isAutoFilled ? 0 : 1,
  },
});

const Login = () => {
  const navigate = useNavigate();
  const [loading] = useState(false);

  const [isAutoFilled, setIsAutoFilled] = useState({
    email: false,
    password: false,
  });

  const handleAutoFill = (event) => {
    setIsAutoFilled((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.animationName === 'mui-auto-fill',
    }));
  };
  const {
    values,
    // validateAllFields,
    errors,
    handleOnChange,
  } = useForm(initialValue, validationRules);

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    // const data = {
    //   ...values,
    // };

    // if (validateAllFields()) {
    //   setLoading(true);
    //   authServices.loginUser(data).then((res) => {
    //     setLoading(false);
    //     localStorage.setItem('token', res?.data?.data?.token);
    //     navigate('/destinations');
    //   })
    //     .catch((err) => {
    //       setLoading(false);
    //       Swal.fire({
    //         title: 'Error',
    //         text: getErrorMessage(err),
    //         icon: 'error',
    //       });
    //     });
    // }
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          margin: 'auto',
          p: 0,
          maxWidth: '1600px',
        }}
      >
        <Grid p={0} sx={combinedStyles} container alignItems="center">
          <Box
            sx={{
              width: { xs: '100%', md: '416px' },
              backgroundColor: '#fff',
              color: '#000',
              m: 'auto',
              position: 'absolute',
              right: { xs: 0, md: '15%' },
              borderRadius: '12px',
              p: 2,
            }}
          >
            <form onSubmit={(e) => handleSubmit(e)}>
              <Box display="flex" justifyContent="flex-end">
                <Iconify color={clientGrey[500]} icon="system-uicons:cross" />
              </Box>
              <Box
                sx={{
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  padding: 2,
                  width: '100%',
                }}
              >
                <Typography
                  textAlign={{ xs: 'center', md: 'start' }}
                  variant="h5"
                  fontWeight={600}
                  gutterBottom
                  color={clientGrey[900]}
                >
                  Sign in to our platform
                </Typography>
                <Stack>
                  <Typography color={clientGrey[500]}>Your email</Typography>
                  <OutlinedInput
                    fullWidth
                    name="email"
                    value={values.email}
                    error={errors.email}
                    helperText={errors.email}
                    onChange={handleOnChange}
                    inputProps={InputPropsStyle(isAutoFilled.email)}
                    onAnimationStart={handleAutoFill}
                    placeholder="Your email:"
                    type="email"
                    sx={{ pl: 0 }}
                    startAdornment={
                      <InputAdornment position="end">
                        <img src={Mail} alt="Mail" />
                      </InputAdornment>
                    }
                  />
                  {!!errors.email && (
                    <FormHelperText error id="accountId-error">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
                <Stack>
                  <Typography color={clientGrey[900]}>Password</Typography>
                  <TextField
                    fullWidth
                    name="password"
                    value={values.password}
                    error={errors.password}
                    helperText={errors.password}
                    onChange={handleOnChange}
                    InputProps={InputPropsStyle(isAutoFilled.password)}
                    onAnimationStart={handleAutoFill}
                    placeholder="Your password:"
                    type="password"
                  />
                </Stack>

                <Box alignItems="center" display="flex" justifyContent="space-between">
                  <Box alignItems="center" display="flex">
                    <Checkbox
                      disableRipple
                      checked={checked}
                      onChange={handleChange}
                      sx={{ pl: 0, border: '1px solid #fff' }}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography fontSize={14} fontWeight={600} color={clientGrey[900]}>
                      Rememeber me
                    </Typography>
                  </Box>
                  <Typography
                    onClick={() => navigate('/auth/reset')}
                    fontWeight={500}
                    color={client.primary}
                    sx={{ cursor: 'pointer', width: 'max-content' }}
                    textAlign="end"
                    fontSize={14}
                  >
                    Lost Password?
                  </Typography>
                </Box>
                <LoadingButton isLoading={loading} type="submit" variant="primary_contained">
                  Login
                </LoadingButton>

                <Typography fontSize={14} color={clientGrey[500]}>
                  Not registered? <span style={{ color: client.primary }}>Create account</span>
                </Typography>
              </Box>
            </form>
          </Box>
        </Grid>
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          margin: 'auto',
          p: 0,
          maxWidth: '1600px',
        }}
      >
        <Grid p={0} container alignItems="center">
          <Box
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              m: 'auto',
              borderRadius: '12px',
              p: 2,
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              pt: 10,
            }}
          >
            <Box display="flex" justifyContent="center">
              <img width="50%" src={Logo} alt="" />
            </Box>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Box
                sx={{
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  padding: 2,
                  width: '100%',
                }}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  fontSize={32}
                  gutterBottom
                  color={clientGrey[900]}
                >
                  Sign in to our platform
                </Typography>
                <Stack>
                  <Typography color={clientGrey[500]}>Your email</Typography>
                  <OutlinedInput
                    fullWidth
                    name="email"
                    value={values.email}
                    error={errors.email}
                    helperText={errors.email}

                    onChange={handleOnChange}
                    inputProps={InputPropsStyle(isAutoFilled.email)}
                    onAnimationStart={handleAutoFill}
                    placeholder="Your email:"
                    type="email"
                    sx={{ pl: 0 }}
                    startAdornment={
                      <InputAdornment position="end">
                        <img src={Mail} alt="Mail" />
                      </InputAdornment>
                    }
                  />
                  {!!errors.email && (
                    <FormHelperText error id="accountId-error">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
                <Stack>
                  <Typography color={clientGrey[900]}>Password</Typography>
                  <TextField
                    fullWidth
                    name="password"
                    value={values.password}
                    error={errors.password}
                    helperText={errors.password}
                    onChange={handleOnChange}
                    InputProps={InputPropsStyle(isAutoFilled.password)}
                    onAnimationStart={handleAutoFill}
                    placeholder="Your password:"
                    type="password"
                  />
                </Stack>

                <Box alignItems="center" display="flex" justifyContent="space-between">
                  <Box alignItems="center" display="flex">
                    <Checkbox
                      disableRipple
                      checked={checked}
                      onChange={handleChange}
                      sx={{ pl: 0, border: '1px solid #fff' }}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography fontSize={14} fontWeight={600} color={clientGrey[900]}>
                      Rememeber me
                    </Typography>
                  </Box>
                  <Typography
                    onClick={() => navigate('/auth/reset')}
                    fontWeight={500}
                    color={client.primary}
                    sx={{ cursor: 'pointer', width: 'max-content' }}
                    textAlign="end"
                    fontSize={14}
                  >
                    Lost Password?
                  </Typography>
                </Box>
                <LoadingButton isLoading={loading} type="submit" variant="primary_contained">
                  Login
                </LoadingButton>
              </Box>
            </form>

            <Typography
              position="absolute"
              sx={{
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
              }}
              textAlign="center"
              fontSize={14}
              color={clientGrey[500]}
            >
              Not registered? <span style={{ color: client.primary }}>Create account</span>
            </Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
