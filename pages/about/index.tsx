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
  Stack,
  Box,
  Link,
  Button,
  Paper,
  Grid,
  Accordion,
  Container,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Tab,
  Tabs,
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT * 1.5,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT * 1.5,
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function ComponentsUIPage() {
  return (
    <Page title="About Prosiding">
      <RootStyle>
        <Container component={MotionViewport}>
          <Breadcrumbs links={[{ name: 'Home', href: '/' }, { name: 'About' }]} />
          <Paper
            variant="outlined"
            elevation={3}
            sx={{
              p: 3,
              my: 6,
              borderRadius: 1.5,
              borderStyle: 'dashed',
              boxShadow: 5,
            }}
          >
            <Grid container columnSpacing={2} alignItems="center" sx={{ height: 1 }}>
              <Grid item xs={12} md={5} lg={7} sx={{order:{lg:1, md:1, xs:2}}}>
                <Stack
                  spacing={3}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  justifyContent="center"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <m.div variants={varFade().inUp}>
                    <Typography variant="h3">ABOUT THE PROSIDING</Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography sx={{ color: 'text.secondary' }}>
                      Prosiding diterbitkan setelah pelaksanaan kegiatan Seminar Nasional Official
                      Statistics yang diselenggarakan oleh Politeknik Statistika STIS secara rutin
                      setiap tahun dalam rangkaian kegiatan hari Statistik Nasional. Tema yang
                      diangkat akan berbeda, namun tetap dengan mengusung topik-topik terkait
                      Official Statistics. Kumpulan artikel yang dipublikasikan dalam laman
                      prosiding merupakan artikel-artikel yang telah lolos proses review dan setiap
                      artikel diberikan Digital Object Identifier (DOI) dengan publisher Politeknik
                      Statistika STIS. 
                    </Typography>
                  </m.div>

                  <m.div variants={varFade().inUp}>
                    <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                      Principal & Support Contact :{' '}
                      <Link href="mailto:helpdesk.semnas@stis.ac.id" color="primary.main">
                        helpdesk.semnas@stis.ac.id
                      </Link>
                    </Typography>
                  </m.div>
                </Stack>
              </Grid>

              <Grid item xs={12} md={7} lg={5} display={{ xs: 'grid', md: 'grid', lg: 'grid' }} sx={{order:{lg:2, md:2, xs:1}}}>
                <m.div variants={varFade().inUp}>
                  <Image
                    alt="home-hero"
                    src="/favicon/Asset 1 3.png"
                    sx={{ maxWidth: 300, mx: 'auto' }}
                  />
                </m.div>
              </Grid>
            </Grid>
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
