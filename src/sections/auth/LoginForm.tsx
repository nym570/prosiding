import * as Yup from 'yup';
import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
// icons
import viewIcon from '@iconify/icons-carbon/view';
import viewOff from '@iconify/icons-carbon/view-off';
// next
import NextLink from 'next/link';
// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Link, TextField, IconButton, InputAdornment, Typography, FormControlLabel, Checkbox, Button, DialogTitle, DialogActions, DialogContent, DialogContentText, Dialog } from '@mui/material';
// routes
import Routes from '../../routes';
// components
import { Iconify } from '../../components';
import Box from '@mui/material/Box';
import { ColorSchema } from '../../theme/palette';


// ----------------------------------------------------------------------

const FormSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
  email: Yup.string(),
});

type FormValuesProps = {
  username: string;
  password: string;
  email: string;
};

export default function LoginForm() {
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
      username: '',
      password: '',
    },
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: FormValuesProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    handleClickOpen();
  };

  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => window.location.href = '/';

  const [openPass, setOpenPass] = React.useState(false);
  
  const handleClosePass = () => {
    setOpenPass(false);
    handleClickOpenResetPass();
  }

  const handleClickOpenPass = () => {
    setOpenPass(true);
  };

  const [openResetPass, setOpenResetPass] = React.useState(false);
  
  const handleClickOpenResetPass = () => {
    setOpenResetPass(true);
  };

  const handleCloseResetPass = () => {
    setOpenResetPass(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} alignItems="flex-start">
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Username"
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Password"
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
      </Stack>

      <Stack alignItems="flex-start">

        <FormControlLabel
          sx={{ textAlign: 'left', mt: 1.5, mb: 2, ml: -0.5 }}
          control={<Checkbox size="small" color="primary" />}
          label="Ingat Saya"
        />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
        <Link
          variant="body3"
          underline="always"
          color="text.secondary"
          sx={{ textAlign: 'end', mt: 3, mb:0, ml: 1, display: 'inline' }}
          onClick={handleClickOpenPass}
        >
          Lupa Password?
        </Link>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Sukses'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Login Berhasil -- Masuk ke halaman utama
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
              (Dikarenakan pengembangan UI hanya sampai sini, anda akan diarahkan kembali ke halaman awal)
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

        <Dialog
          open={openPass}
          onClose={handleClosePass}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">{'Lupa Password?'}</DialogTitle>
          <DialogContent sx={{ mt:'3vh' }}>
            <DialogContentText id="alert-dialog-description">
              Masukkan Email anda
            </DialogContentText>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="email"
                  error={Boolean(error)}
                  helperText={error?.message}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClosePass}
              autoFocus
              variant="contained"
              disableRipple
              size="small"
            >
              Kirim email reset password
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={openResetPass}
          onClose={handleCloseResetPass}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Sukses'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Email berhasil dikirim! -- Silahkan cek email anda
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseResetPass}
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
  );
}
