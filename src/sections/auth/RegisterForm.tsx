import * as Yup from 'yup';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// @mui
import { LoadingButton } from '@mui/lab';
import { Typography, Stack, TextField, IconButton, InputAdornment, Box, Grid, Select, InputLabel, MenuItem, SelectChangeEvent, FormControl, Checkbox, FormControlLabel, FormGroup, Modal, Button, DialogTitle, DialogActions, DialogContent, DialogContentText, Dialog  } from '@mui/material';
// components
import { Iconify } from '../../components';
import { email } from '../../../_data/mock/email';
import { redirect } from 'next/dist/server/api-utils';
//navigate

// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('Nama depan tidak boleh kosong'),
  middleName: Yup.string(),
  lastName: Yup.string(),
  instansi: Yup.string()
    .required('Instansi tidak boleh kosong'),
  negara: Yup.string(),
  email: Yup.string()
    .required('Email tidak boleh kosong').email('Format email salah!'),
  password: Yup.string()
    .required('Password tidak boleh kosong')
    .min(6, 'Password harus terdiri dari minimal 6 karakter'),
  confirmPassword: Yup.string()
    .required('Konfirmasi Password tidak boleh kosong')
    .oneOf([Yup.ref('password')], "Password tidak sama"),
  checkbox: Yup.string(),
});

type FormValuesProps = {
  firstName: string;
  middleName: string;
  lastName: string;
  instansi: string;
  negara: string;
  email: string;
  password: string;
  confirmPassword: string;
  checkbox: boolean;
};

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValuesProps>({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      instansi: '',
      negara: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const countries = [
    'Indonesia',
    'Malaysia',
    'Jepang',
    'Singapura',
  ];

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => window.location.href = '/auth/login-cover';

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    handleClickOpen();
  };
  
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          {/* Data Diri */}
          <Typography>
            <Box sx={{ textAlign: 'left', mx: 0, my: 2, mb: { xs: 0, md: 2 } }}>Data Diri</Box>
          </Typography>
          <Grid container rowSpacing={4} columnSpacing={8}>
            <Grid item md={4} xs={12}>
              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nama Depan *"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <Controller
                name="middleName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nama Tengah"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <Controller
                name="lastName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Nama Belakang"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <Controller
                name="instansi"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Instansi *"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <FormControl variant="filled" sx={{ m: 0, minWidth: 120 }} fullWidth>
                <InputLabel id="demo-simple-select-filled-label">Negara *</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  onChange={handleChange}
                  fullWidth
                  name="negara"
                  required
                >
                  {countries.map((country) => (
                    <MenuItem key={country} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Informasi Akun */}
          <Typography>
            <Box sx={{ textAlign: 'left', mx: 0, my: { md: 2 }, mt: { xs: 4 } }}>
              Informasi Akun
            </Box>
          </Typography>
          <Grid container rowSpacing={3} columnSpacing={8}>
            <Grid item md={4} xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email *"
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Password *"
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Iconify icon={showPassword ? viewIcon : viewOff} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Konfirmasi Password *"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Iconify icon={showPassword ? viewIcon : viewOff} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={Boolean(error)}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>
          </Grid>

          <FormGroup>
            <FormControlLabel
              sx={{ textAlign: 'left', mx: 0, mt: 5 }}
              name="checkbox"
              required
              control={<Checkbox size="small" color="primary" name="checkbox" />}
              label="Ya, Saya setuju data saya dikumpulkan dan disimpan sesuai dengan pernyataan privasi."
            />
            <FormControlLabel
              sx={{ textAlign: 'left', mx: 0, mt: 1 }}
              control={<Checkbox size="small" color="primary" />}
              label="Ya, Informasikan saya terkait publikasi dan pengumuman baru."
            />
          </FormGroup>

          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ my: '30px', width: '40%', margin: '30px auto' }}
          >
            Register
          </LoadingButton>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{'Sukses'}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Registrasi Berhasil -- Kembali ke halaman login
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                autoFocus
                variant="contained"
                disableRipple
                size="small"
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </form>
    </>
  );
}
