import * as React from 'react';

import { useState } from 'react';
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
  Grid,
  Divider,
  Tab,
  Tabs,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import documentIcon from '@iconify/icons-carbon/document';
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
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

export default function ComponentsUIPage() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [tab, setTab] = useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Page title="Current">
      <RootStyle>
        <Container sx={{ overflow: 'hidden' }}>
          <Breadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Archive', href: '/archive' },
              { name: 'VOL 2022' },
            ]}
          />
          <Paper
            variant="outlined"
            elevation={3}
            sx={{
              p: 3,
              my: 5,
              borderRadius: 1.5,
              boxShadow: 5,
              overflowX: 'hidden',
            }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent={{ xs: 'center', lg: 'space-between' }}
              columnSpacing={3}
            >
              <Grid item xs={12} md={4}>
                <m.div variants={varFade().inUp}>
                  <Image
                    alt="cover"
                    src="/favicon/Frame 63.png"
                    sx={{ maxWidth: { xs: '100%', lg: 260 }, mx: 'auto', mb: { xs: 2, md: 0 } }}
                  />
                </m.div>
              </Grid>
              <Grid item xs={12} md={8}>
                <Stack spacing={3} sx={{ mb: { xs: 1, md: 5 } }}>
                  <m.div variants={varFade().inUp}>
                    <Typography variant="h4">Seminar Nasional Official Statistics 2022</Typography>
                  </m.div>
                  <m.div variants={varFade().inUp}>
                    <Typography variant="h6">
                      Era Baru Official Statistics: Implementasi Big Data, Small Area Estimation,
                      dan Geospatial dalam mendukung SDG’s
                    </Typography>
                  </m.div>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '12px', md: '14px', lg: '16px' },
                      }}
                    >
                      <strong>DOI:</strong> https://doi.org/10.34123/semnasoffstat.v2022i1
                    </Typography>
                  </m.div>
                  <m.div variants={varFade().inUp}>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '12px', md: '14px', lg: '16px' },
                      }}
                    >
                      <strong>Published:</strong> 17 September 2022
                    </Typography>
                  </m.div>
                  <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap' }}>
                    <NextLink href={'/archive/article'} passHref>
                      <m.div variants={varFade().inUp}>
                        <Button
                          startIcon={<Iconify icon={documentIcon} />}
                          size="medium"
                          variant="contained"
                          sx={{ mr: 2, mb: 2 }}
                        >
                          Baca Arsip
                        </Button>
                      </m.div>
                    </NextLink>
                    <NextLink href={'/archive/article'} passHref>
                      <m.div variants={varFade().inUp}>
                        <Button
                          startIcon={<Iconify icon={documentIcon} />}
                          size="medium"
                          variant="contained"
                          sx={{ mr: 2, mb: 2 }}
                        >
                          Daftar Isi
                        </Button>
                      </m.div>
                    </NextLink>
                    <NextLink href={'/archive/article'} passHref>
                      <m.div variants={varFade().inUp}>
                        <Button
                          startIcon={<Iconify icon={documentIcon} />}
                          size="medium"
                          variant="contained"
                        >
                          Komite, Editorial, dan Reviewer
                        </Button>
                      </m.div>
                    </NextLink>
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            <Stack sx={{ mx: { xs: 0, md: 5 } }}>
              <Stack spacing={2} sx={{ my: 5 }}>
                <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                  Tema Seminar Nasional Official StatisticsTahun 2022 adalah “Era Baru Official
                  Statistics: Implementasi Big Data, Small Area Estimation, dan Geospatial dalam
                  Mendukung SDGs”.Seminar ini bertujuan untuk menghasilkan berbagai pemikiran
                  solutif, inovatif, dan adaptif terkait isu, strategi, dan metode yang memanfaatkan
                  official statistics guna mendukung SDGs.Seminar Nasional Official StatisticsTahun
                  2022 menerima 362 submission artikel. Setelah melalui proses review secara
                  seksama, dengan acceptance rate sebesar 37,01%, diperoleh sejumlah 134 artikel
                  yang lolos untuk dipublikasikan pada prosiding SEMNAS Official Statistics2022
                  sekaligus telah dipresentasikan secara oral di sesi seminar paralel Semnas 2022.
                  Dari 134 artikel tersebut terdiri dari 69 artikel dengan subtema Aplikasi
                  Statistika, 46 artikel dengan subtema Official Statistics, dan 19 artikel dengan
                  subtema Sains Data
                </Typography>
              </Stack>

              <Typography sx={{ mb: 2 }} variant="h4">
                Artikel
              </Typography>

              <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={tab} onChange={handleChangeTab}>
                    <Tab label="Official Statistics" value="1" key="1" />
                    <Tab label="Sains Data" value="2" key="2" />
                    <Tab label="Aplikasi Statistik" value="3" key="3" />
                  </Tabs>
                </Box>

                <TabPanel value="1">
                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Inequality Of Education And Determines of It In Indonesia
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Determinan Kemiskinan Multidimensi Perempuan Berusia Produktif di Pulau
                        Papua Tahun 2020
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Pengembangan Search Engine Konten Statistik pada Website Badan Pusat
                        Statistik untuk Mendukung Diseminasi Statistik Resmi
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Determinan Pengangguran Usia Muda Terdidik di Provinsi Banten Tahun 2020
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />
                </TabPanel>

                <TabPanel value="2">
                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Inequality Of Education And Determines of It In Indonesia Sains Data
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Determinan Kemiskinan Multidimensi Perempuan Berusia Produktif di Pulau
                        Papua Tahun 2020 Sains Data
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Pengembangan Search Engine Konten Statistik pada Website Badan Pusat
                        Statistik untuk Mendukung Diseminasi Statistik Resmi Sains Data
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Determinan Pengangguran Usia Muda Terdidik di Provinsi Banten Tahun 2020
                        Sains Data
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />
                </TabPanel>

                <TabPanel value="3">
                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Inequality Of Education And Determines of It In Indonesia Aplikasi Statistik
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Determinan Kemiskinan Multidimensi Perempuan Berusia Produktif di Pulau
                        Papua Tahun 2020 Aplikasi Statistik
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Pengembangan Search Engine Konten Statistik pada Website Badan Pusat
                        Statistik untuk Mendukung Diseminasi Statistik Resmi Aplikasi Statistik
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />

                  <Stack spacing={1} sx={{ mt: 5, mb: 3 }}>
                    <NextLink href={'/archive/article'} passHref>
                      <Link variant="h5" sx={{ color: 'primary.main' }}>
                        Determinan Pengangguran Usia Muda Terdidik di Provinsi Banten Tahun 2020
                        Aplikasi Statistik
                      </Link>
                    </NextLink>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Dwi Ari Suryawan. S, Teguh Sugiyarto
                    </Typography>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <NextLink href={'/archive/article'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={documentIcon} />}
                            size="medium"
                            variant="contained"
                          >
                            Baca Artikel
                          </Button>
                        </m.div>
                      </NextLink>
                    </Box>
                  </Stack>
                  <Divider />
                </TabPanel>
              </TabContext>

              {/* <Box
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
              ok
            </Box> */}
            </Stack>
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
