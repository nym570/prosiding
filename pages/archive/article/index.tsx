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
  Card,
  CardHeader,
  CardContent,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog,
} from '@mui/material';
//Icon
import pdfIcon from '@iconify/icons-carbon/document-pdf';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// utils
import { getAllComponents } from '../../../src/utils/get-mardown/components-ui';
// routes
import Routes from '../../../src/routes';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, Iconify, Image, TextIconLabel, Breadcrumbs } from '../../../src/components';

// aos
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../../../src/components/animate';
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page title="Article">
      <RootStyle>
        <Container>
          <Breadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Archive', href: '/archive' },
              { name: 'VOL 2022', href: '/current' },
              { name: 'Official Statistics' },
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
              borderStyle: 'dashed',
              overflow:'hidden'
            }}
          >
            <Container>
              <Grid container justifyContent="space-between" gap={1} columnSpacing={2}>
                <Grid item xs={12} md={7} lg={7}>
                  <Stack spacing={1} sx={{ mb: 5 }}>
                    <Typography variant="h4">
                      Inequality Of Education And Determines of It In Indonesia
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                      23 Oktober 2022 
                    </Typography>
                  </Stack>

                  <Stack spacing={0} sx={{ mb: 2 }}>
                    <Typography variant="h5">Dwi Ari Suryawan</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Badan Pusat Statistik Barito Selatan
                    </Typography>
                  </Stack>

                  <Stack spacing={0} sx={{ mb: 5 }}>
                    <Typography variant="h5">Teguh Sugiyarto</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Badan Pusat Statistik</Typography>
                  </Stack>

                  <Typography sx={{ color: 'text.prmary', fontSize:{xs:'12px', md:'14px', lg:'16px'}  }}>
                    <strong>DOI: </strong>https://doi.org/10.34123/semnasoffstat.v2022i1
                  </Typography>
                  <Typography sx={{ color: 'text.prmary', fontSize:{xs:'12px', md:'14px', lg:'16px'}  }}>
                    <strong>Keyword: </strong>Education, Determined, Inequality
                  </Typography>

                  <Stack spacing={2} sx={{ my: 5 }}>
                    <Typography variant="h5">Abstrak</Typography>
                    <Typography sx={{ color: 'text.primary', textAlign:'justify' }}>
                      The Covid-19 has had an impact not only on the world of health, but also other
                      sectors including the food and agriculture sectors. Food and Agriculture
                      Organization (FAO) regarding the potential of world food scarcity, president
                      Joko Widodo instructed to ensure the availibility of food accurately based on
                      valid data. This is a challenge for BPS to make methodological adjustments so
                      that it can still provide food data, which is crop cutting survey. The purpose
                      of this study is to explain the mitigation and adaptation of the methodology
                      of crop cutting survey, and to provide an evaluation of the impact of these
                      changes. Data used were the subround 1 2019 and Subround 1 2020 of crop
                      cutting survvey collected by BPS and then analyzed using the descriptive
                      method and further analyzed using paired samples t-test analysis. The results
                      showed that the data entry (response rate) for paddy commodities in subround 1
                      2020 only reached 65,10%, as many as 70,49% of officers still used the
                      measurement and interview method and ther was no difference inthe results of
                      crop cutting survey before the covid-19 pandemic (Subround 1 2019) with the
                      time covid-19 pandemic (subround 1 2020). So it can be concluded that the
                      interview method without measurement can be an alternative because there is no
                      significant difference between the paddy productivity of the measurement
                      method and interviews with the interview without measurement.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Stack
                    spacing={2}
                    sx={{
                      mb: 5,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Stack sx={{mx:{xs:0, md:5}}}>
                      <Image
                        alt="cover"
                        src="/favicon/Frame 63.png"
                        sx={{ width: '100%', mx: 'auto' }}
                      />
                      <NextLink href={'#'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button
                            startIcon={<Iconify icon={pdfIcon} />}
                            onClick={handleClickOpen}
                            size="large"
                            variant="contained"
                            sx={{ width: '100%', my: 5 }}
                          >
                            Baca Arsip
                          </Button>
                        </m.div>
                      </NextLink>
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
                      <Card>
                        <CardHeader
                          sx={{ backgroundColor: '#AA90DA', py: 1, textAlign: 'start' }}
                          title="Issue"
                        />
                        <CardContent sx={{ backgroundColor: '#E5DDF4' }}>
                          <Stack spacing={2}>
                            <Link href="/current">
                              <Typography variant="h6">
                                Vol 2022 No 1 (2022): Seminar Nasional Official Statistics 2022
                              </Typography>
                            </Link>
                            <Typography sx={{ color: 'text.secondary' }}>Kategori:</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                              Official Statistic
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Stack>
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
