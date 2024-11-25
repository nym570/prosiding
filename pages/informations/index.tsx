import { ReactElement, ChangeEvent } from 'react';
import React from 'react';
import { useState } from 'react';

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
  Paper,
  Grid,
  Tab,
  Tabs,
  Button,
} from '@mui/material';

import { TabContext, TabPanel, TabList } from '@mui/lab';

// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../src/config';
// utils
import { getAllComponents } from '../../src/utils/get-mardown/components-ui';
// routes
import Routes from '../../src/routes';
// layouts
import Layout from '../../src/layouts';
// components
import { Page, Iconify, TextIconLabel, Breadcrumbs } from '../../src/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT * 1.5,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT * 1.5,
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function ComponentsUIPage() {
  const [valueButton, setValue] = React.useState('outlined');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const untuk = ['Untuk Penulis', 'Untuk Pembaca', 'Untuk Pustakawan'];
  const keterangan = [
    'Kami mendorong pembaca untuk mendaftar ke layanan pemberitahuan penerbitan untuk jurnal. Gunakan tombol Sign Up di bagian atas untuk mendaftar. Pendaftaran ini akan mengakibatkan pembaca mendapatkan email ketika jurnal baru diterbitkan. Pendaftaran juga memungkinkan jurnal untuk mendapat informasi terkait tingkat dukungan atau jumlah pembaca tertentu. Nama dan alamat email pembaca tidak akan digunakan untuk tujuan lain. Lebih lanjut lihat Pernyataan Privasi jurnal.',
    'Tertarik mengirimkan naskah untuk jurnal? Kami menyarankan Anda meninjau halaman About untuk melihat kebijakan terkait jurnal, serta Panduan Penulis sebagai panduan. Sebelum mengirimkan naskah, penulis harus mendaftar melalui tombol Sign Up. Jika sebelumnya sudah melakukan pendaftaran, cukup masuk dengan tombol Sign In dan selanjutnya mengikuti tahapan penyerahan naskah.',
    'Kami mendorong pustakawan penelitian untuk mencantumkan jurnal ini di antara koleksi jurnal elektronik perpustakaan mereka. Jurnal ini membahas topik terkait Official Statistics dan telah melewati proses penyaringan sehingga keilmiahannya terjamin. Jurnal dapat diakses secara gratis dan terbuka. Namun, diharapkan tetap memperhatikan etika dan kebijakan terkait Hak Cipta Karya Tulis yang berlaku.',
  ];

  return (
    <Page title="Informations">
      <RootStyle>
        <Container>
          <Breadcrumbs links={[{ name: 'Home', href: '/' }, { name: 'Information' }]} />
          <Paper
            variant="outlined"
            elevation={3}
            sx={{
              p: 3,
              my: 5,
              mx: 'auto',
              borderRadius: 1.5,
              boxShadow: 5,
              width: '100%',
            }}
          >
            <Container>
              <Typography variant="h3">INFORMASI</Typography>
              <Grid container spacing={'2rem'}>
                <Grid item xs={12} md={4} sx={{ my: '2rem' }}>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{
                      boxShadow: 3,
                      mb: '2rem',
                      fontSize: '0.875rem',
                      borderRadius: 1.5,
                      bgcolor: 'primary.main',
                      color: 'white',
                    }}
                  >
                    Untuk Penulis
                  </Typography>
                  <Paper
                    variant="outlined"
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 1.5,
                      boxShadow: 5,
                      height: '90%',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.875rem', textAlign:'justify' }}>
                      Kami mendorong pembaca untuk mendaftar ke layanan pemberitahuan penerbitan
                      untuk jurnal. Gunakan tombol Sign Up di bagian atas untuk mendaftar.
                      Pendaftaran ini akan mengakibatkan pembaca mendapatkan email ketika jurnal
                      baru diterbitkan. Pendaftaran juga memungkinkan jurnal untuk mendapat
                      informasi terkait tingkat dukungan atau jumlah pembaca tertentu. Nama dan
                      alamat email pembaca tidak akan digunakan untuk tujuan lain. Lebih lanjut
                      lihat Pernyataan Privasi jurnal.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sx={{ my: '2rem' }}>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{
                      boxShadow: 3,
                      mb: '2rem',
                      fontSize: '0.875rem',
                      borderRadius: 1.5,
                      bgcolor: 'primary.main',
                      color: 'white',
                    }}
                  >
                    Untuk Pembaca
                  </Typography>
                  <Paper
                    variant="outlined"
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 1.5,
                      boxShadow: 5,
                      height: '90%',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.875rem', textAlign:'justify'  }}>
                      Tertarik mengirimkan naskah untuk jurnal? Kami menyarankan Anda meninjau
                      halaman About untuk melihat kebijakan terkait jurnal, serta Panduan Penulis
                      sebagai panduan. Sebelum mengirimkan naskah, penulis harus mendaftar melalui
                      tombol Sign Up. Jika sebelumnya sudah melakukan pendaftaran, cukup masuk
                      dengan tombol Sign In dan selanjutnya mengikuti tahapan penyerahan naskah.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} sx={{ my: '2rem' }}>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{
                      boxShadow: 3,
                      mb: '2rem',
                      fontSize: '0.875rem',
                      borderRadius: 1.5,
                      bgcolor: 'primary.main',
                      color: 'white',
                    }}
                  >
                    Untuk Pustakawan
                  </Typography>
                  <Paper
                    variant="outlined"
                    elevation={3}
                    sx={{
                      p: 3,
                      borderRadius: 1.5,
                      boxShadow: 5,
                      height: '90%',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.875rem', textAlign:'justify'  }}>
                      Kami mendorong pustakawan penelitian untuk mencantumkan jurnal ini di antara
                      koleksi jurnal elektronik perpustakaan mereka. Jurnal ini membahas topik
                      terkait Official Statistics dan telah melewati proses penyaringan sehingga
                      keilmiahannya terjamin. Jurnal dapat diakses secara gratis dan terbuka. Namun,
                      diharapkan tetap memperhatikan etika dan kebijakan terkait Hak Cipta Karya
                      Tulis yang berlaku.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
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
