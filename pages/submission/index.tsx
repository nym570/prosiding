import * as React from 'react';
import { ReactElement } from 'react';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import {
  Container,
  Typography,
  Stack,
  Box,
  Link,
  Button,
  Paper,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog,
} from '@mui/material';
//icon
import listIcon from '@iconify/icons-carbon/document';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllComponents } from '../../src/utils/get-mardown/components-ui';
// routes
import Routes from '../../src/routes';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, Iconify, Image, TextIconLabel, Breadcrumbs } from '../../src/components';

// aos
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../../src/components/animate';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT * 1.5,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT * 1.5,
    paddingBottom: theme.spacing(12),
  },
}));

// ----------------------------------------------------------------------

export default function ComponentsUIPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Page title="Submission">
      <RootStyle>
        <Container>
          <Breadcrumbs links={[{ name: 'Home', href: '/' }, { name: 'Submission' }]} />
          <Paper
            variant="outlined"
            elevation={3}
            sx={{
              p: 3,
              my: 5,
              borderRadius: 1.5,
              borderStyle: 'dashed',
              boxShadow: 5,
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                p: 2,
                my: 3,
                borderRadius: 1.5,
                borderStyle: 'dashed',
                bgcolor: 'background.neutral',
              }}
            >
              <m.div variants={varFade().inUp}>
                <NextLink href={'/auth/login-cover'} passHref>
                  <Link underline="always" color="inherit">
                    Login
                  </Link>
                </NextLink>{' '}
                or{' '}
                <NextLink href={'/auth/register-cover'} passHref>
                  <Link underline="always" color="inherit">
                    Register
                  </Link>
                </NextLink>{' '}
                to make a submission.
              </m.div>
            </Paper>
            <Stack spacing={2} sx={{ my: 6 }}>
              <m.div variants={varFade().inUp}>
                <Typography variant="h4">Ketentuan Penyerahan Naskah</Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'text.primary', textAlign: 'justify' }}>
                  Sebelum melakukan penyerahan naskah, penulis harap untuk memeriksa naskah dengan
                  semua item berikut, naskah dapat dikembalikan kepada penulis yang tidak mematuhi
                  ketentuan yang tertera.
                </Typography>
              </m.div>
            </Stack>

            {/* Ketentuan */}
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(2, 1fr)',
                },
              }}
            >
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderStyle: 'dashed',
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Makalah/artikel ditulis dalam Bahasa Indonesia. Harap pastikan bahwa artikel
                    sudah benar secara tata bahasa dan tidak terdapat kesalahan ketik sebelum
                    dikirimkan.
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Penulis wajib menyiapkan artikel dalam format Microsoft Word dan mengikuti
                    instruksi seperti yang tertera pada template.
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Kertas ukuran A4.
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Margins 2 cm (atas), 2.01 cm (kiri), 1.5 cm (kanan), 2.01 cm (bawah), dan 0.51
                    cm (gutter).
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Jumlah halaman maksimal sepuluh 10 halaman.
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Paper tidak perlu mencantumkan nama penulis dan afiliasi.
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Teks dibuat dalam spasi tunggal, bukan spasi ganda.
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Semua halaman berorientasi portrait (halaman yang landscape wajib dirotasi
                    terlebih dahulu).
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Daftar referensi dituliskan dalam format American Physiological Association
                    (APA).
                  </Typography>
                </m.div>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                  borderLeft: '4px solid #6F42C1',
                }}
              >
                <m.div variants={varFade().inUp}>
                  <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    Gambar diletakkan di dalam teks, tidak ditempatkan di akhir dokumen.
                  </Typography>
                </m.div>
              </Paper>
            </Box>

            <Stack spacing={2} sx={{ mt: 10, mb: 8 }}>
              <Typography variant="h4">Panduan Penulisan</Typography>
            </Stack>

            {/* Panduan Penulisan */}
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mt: 3 }}>
                <Image
                  alt="cover"
                  src="/favicon/fxemoji_document.png"
                  sx={{ maxWidth: 200, mx: 'auto' }}
                />
                <Typography sx={{ color: 'text.secondary', mt: 3 }}>
                  Hasil Penelitian yang dikumpulkan belum pernah dipublikasikan serta diikutsertakan
                  pada seminar ilmiah atau jurnal manapun.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mt: 3 }}>
                <Image alt="cover" src="/favicon/Vector.png" sx={{ maxWidth: 200, mx: 'auto' }} />
                <Typography sx={{ color: 'text.secondary', mt: 3 }}>
                  Artikel ditulis menggunakan Bahasa Indonesia.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mt: 3 }}>
                <Image
                  alt="cover"
                  src="/favicon/file-icons_microsoft-word.png"
                  sx={{ maxWidth: 200, mx: 'auto' }}
                />
                <Typography sx={{ color: 'text.secondary', mt: 3 }}>
                  Berkas dikumpulkan dalam format Microsoft Word mengikuti petunjuk penulisan yang
                  tertulis pada Pedoman Penulisan
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mt: 3 }}>
                <Image
                  alt="cover"
                  src="/favicon/Vector (1).png"
                  sx={{ maxWidth: 200, mx: 'auto' }}
                />
                <Typography sx={{ color: 'text.secondary', mt: 3, mb: 2 }}>
                  Panduan PenulisanPastikan berkas yang dikumpulkan telah mengikuti ketentuan “Blind
                  Review”.
                </Typography>
              </Box>
            </Box>

            <Stack spacing={2} sx={{ mt: 10, mb: 8 }}>
              <Typography variant="h4">Dokumen Penting</Typography>
            </Stack>

            {/* Dokumen Penting*/}
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
              }}
            >
              <Paper
                variant="outlined"
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                }}
              >
                <Container>
                  <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">
                    Template Makalah
                  </Typography>
                  <Image
                    alt="cover"
                    src="/favicon/Asset 12 1.png"
                    sx={{ maxWidth: 200, mx: 'auto' }}
                  />

                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <NextLink href={'#'} passHref>
                      <m.div variants={varFade().inUp}>
                        <Button size="medium" onClick={handleClickOpen} variant="contained">
                          Lebih Lanjut
                        </Button>
                      </m.div>
                    </NextLink>
                  </Box>
                </Container>
              </Paper>

              <Paper
                variant="outlined"
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                }}
              >
                <Container>
                  <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">
                    Blind Review
                  </Typography>
                  <Image
                    alt="cover"
                    src="/favicon/Asset 12 1.png"
                    sx={{ maxWidth: 200, mx: 'auto' }}
                  />

                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <NextLink href={'#'} passHref>
                      <m.div variants={varFade().inUp}>
                        <Button size="medium" onClick={handleClickOpen} variant="contained">
                          Lebih Lanjut
                        </Button>
                      </m.div>
                    </NextLink>
                  </Box>
                </Container>
              </Paper>

              <Paper
                variant="outlined"
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                }}
              >
                <Container>
                  <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">
                    Dokumen Tutorial
                  </Typography>
                  <Image
                    alt="cover"
                    src="/favicon/Asset 12 1.png"
                    sx={{ maxWidth: 200, mx: 'auto' }}
                  />

                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <NextLink href={'#'} passHref>
                      <m.div variants={varFade().inUp}>
                        <Button size="medium" onClick={handleClickOpen} variant="contained">
                          Lebih Lanjut
                        </Button>
                      </m.div>
                    </NextLink>
                  </Box>
                </Container>
              </Paper>

              <Paper
                variant="outlined"
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 1.5,
                  boxShadow: 2,
                }}
              >
                <Container>
                  <Typography sx={{ textAlign: 'center', mb: 3 }} variant="h6">
                    Video Tutorial
                  </Typography>

                  <Image
                    alt="cover"
                    src="/favicon/Asset 12 1.png"
                    sx={{ maxWidth: 200, mx: 'auto' }}
                  />

                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <NextLink href={'#'} passHref>
                      <m.div variants={varFade().inUp}>
                        <Button size="medium" onClick={handleClickOpen} variant="contained">
                          Lebih Lanjut
                        </Button>
                      </m.div>
                    </NextLink>
                  </Box>
                </Container>
              </Paper>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{'Maaf'}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    (file belum tersedia, perancangan terbatas pada antarmuka)
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
            </Box>
          </Paper>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

ComponentsUIPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      components: getAllComponents(),
    },
  };
}
