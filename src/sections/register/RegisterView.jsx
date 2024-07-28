import React, { useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {
    Box,
    Grid,
    Stack,
    TextField,
    Typography,
    OutlinedInput,
    InputAdornment,
} from '@mui/material';

import useForm from 'src/hooks/validation';

import { client, clientGrey } from 'src/theme/palette';

import Iconify from 'src/components/iconify/iconify';
import CustomizedSteppers from 'src/components/Stepper';
import LoadingButton from 'src/components/shared/loadingButton/LoadingButton';

import { CountrySelect } from '.';
import Location from '../../../public/assets/auth/location.svg';
import AuthBGLogin from '../../../public/assets/auth/auth_bg.png';


const styles = {
    position: 'relative',
    minHeight: '100vh',
    height: '100%',
    backgroundImage: `url(${AuthBGLogin})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'auto',
    zIndex: 999,
};

const combinedStyles = {
    ...styles,
};

const initialValue = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
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

// const InputPropsStyle = {
//   sx: {
//     color: '#6B7280',
//     pl: 1
//   },
// };
const InputPropsStyle = (isAutoFilled) => ({
    sx: {
        color: clientGrey[500],
        pl: isAutoFilled ? 0 : 1,

    },
});

const RegisterView = () => {
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
                    height: '100%',
                    minHeight: '100vh',
                    margin: 'auto',
                    p: 0,
                    zIndex: 999,
                    // maxWidth: '1600px',
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
                            <CustomizedSteppers />
                            <Box
                                sx={{
                                    zIndex: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    padding: 2,
                                    width: '100%',
                                    height: '100%',
                                    maxHeight: '500px',
                                    overflow: 'auto',
                                }}
                            >
                                <Typography
                                    textAlign={{ xs: 'center', md: 'start' }}
                                    variant="h5"
                                    fontWeight={600}
                                    gutterBottom
                                    color={clientGrey[900]}
                                >
                                    Personal Details
                                </Typography>

                                <Stack>
                                    <Typography color={clientGrey[900]}>First Name</Typography>
                                    <TextField
                                        fullWidth
                                        name="firstName"
                                        value={values.firstName}
                                        error={errors.firstName}
                                        helperText={errors.firstName}
                                        onChange={handleOnChange}
                                        InputProps={InputPropsStyle(isAutoFilled.firstName)}
                                        onAnimationStart={handleAutoFill}
                                        placeholder="First Name:"
                                        type="text"
                                        size='medium'
                                    />
                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Last Name</Typography>
                                    <TextField
                                        fullWidth
                                        name="lastName"
                                        value={values.lastName}
                                        error={errors.lastName}
                                        helperText={errors.lastName}
                                        onChange={handleOnChange}
                                        InputProps={InputPropsStyle(isAutoFilled.lastName)}
                                        onAnimationStart={handleAutoFill}
                                        placeholder="Last Name:"
                                        type="text"
                                        size='medium'

                                    />
                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Date of birth</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                sx={{ width: "100%", overflowY: "auto" }}
                                            // onChange={handleTimeChange}
                                            // value={dayjs(new Date())}
                                            // label="Date"
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>

                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Nationality</Typography>
                                    <CountrySelect />

                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Address</Typography>
                                    <OutlinedInput
                                        fullWidth
                                        name="address"
                                        value={values.address}
                                        error={errors.address}
                                        helperText={errors.address}
                                        onChange={handleOnChange}
                                        InputProps={InputPropsStyle(isAutoFilled.address)}
                                        onAnimationStart={handleAutoFill}
                                        placeholder="Address:"
                                        type="text"
                                        size='medium'
                                        sx={{ pl: 0 }}
                                        startAdornment={
                                            <InputAdornment position="end">
                                                <img src={Location} alt="Mail" />
                                            </InputAdornment>
                                        }
                                    />

                                </Stack>


                                <LoadingButton isLoading={loading} type="submit" variant="primary_contained">
                                    Next
                                </LoadingButton>

                                <Typography fontSize={14} color={clientGrey[500]}>
                                    Not registered? <span style={{ color: client.primary }}>Login</span>
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
                            gap: "25px",
                            pt: 10,
                        }}
                    >
                        <CustomizedSteppers />

                        <form onSubmit={(e) => handleSubmit(e)}>
                            {/* <Box display="flex" justifyContent="flex-end">
                                <Iconify color={clientGrey[500]} icon="system-uicons:cross" />
                            </Box> */}
                            <Box
                                sx={{
                                    zIndex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                    padding: 2,
                                    width: '100%',
                                    height: '100%',
                                    // maxHeight: '500px',
                                    overflow: 'auto',
                                }}
                            >
                                <Typography
                                    fontWeight={700}
                                    fontSize={22}
                                    gutterBottom
                                    color={clientGrey[900]}
                                >
                                    Personal Details
                                </Typography>

                                <Stack>
                                    <Typography color={clientGrey[900]}>First Name</Typography>
                                    <TextField
                                        fullWidth
                                        name="firstName"
                                        value={values.firstName}
                                        error={errors.firstName}
                                        helperText={errors.firstName}
                                        onChange={handleOnChange}
                                        InputProps={InputPropsStyle(isAutoFilled.firstName)}
                                        onAnimationStart={handleAutoFill}
                                        placeholder="First Name:"
                                        type="text"
                                        size='medium'
                                    />
                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Last Name</Typography>
                                    <TextField
                                        fullWidth
                                        name="lastName"
                                        value={values.lastName}
                                        error={errors.lastName}
                                        helperText={errors.lastName}
                                        onChange={handleOnChange}
                                        InputProps={InputPropsStyle(isAutoFilled.lastName)}
                                        onAnimationStart={handleAutoFill}
                                        placeholder="Last Name:"
                                        type="text"
                                        size='medium'

                                    />
                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Date of birth</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                sx={{ width: "100%" }}
                                            // onChange={handleTimeChange}
                                            // value={dayjs(new Date())}
                                            // label="Date"
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>

                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Nationality</Typography>
                                    <CountrySelect />

                                </Stack>
                                <Stack>
                                    <Typography color={clientGrey[900]}>Address</Typography>
                                    <OutlinedInput
                                        fullWidth
                                        name="address"
                                        value={values.address}
                                        error={errors.address}
                                        helperText={errors.address}
                                        onChange={handleOnChange}
                                        InputProps={InputPropsStyle(isAutoFilled.address)}
                                        onAnimationStart={handleAutoFill}
                                        placeholder="Address:"
                                        type="text"
                                        size='medium'
                                        sx={{ pl: 0 }}
                                        startAdornment={
                                            <InputAdornment position="end">
                                                <img src={Location} alt="Mail" />
                                            </InputAdornment>
                                        }
                                    />

                                </Stack>


                                <LoadingButton isLoading={loading} type="submit" variant="primary_contained">
                                    Next
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
                            Not registered? <span style={{ color: client.primary }}>Login</span>
                        </Typography>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default RegisterView;
