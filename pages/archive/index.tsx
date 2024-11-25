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
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog,
} from '@mui/material';
//icon
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
    <Page title="Archive">
      <RootStyle>
        <Container>
          <Breadcrumbs links={[{ name: 'Home', href: '/' }, { name: 'Archive' }]} />
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
                my: 5,
                boxShadow: 5,
                borderRadius: 1.5,
              }}
            >
              <Container>
                <Link href="/current">
                  <Image
                    alt="cover"
                    src="/favicon/Frame 63.png"
                    sx={{ maxWidth: '100%', mx: 'auto', mb:{xs:2, md:0} }}
                  />
                </Link>
                <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                  17 September 2022
                </Typography>

                <Stack spacing={2} sx={{ my: 2 }}>
                  <NextLink href={'/current'} passHref>
                    <Link color="inherit" variant="h6">
                      Seminar Nasional Official Statistics 2022
                    </Link>
                  </NextLink>
                  <Typography sx={{ color: 'text.secondary' }}>Vol 2022 No 1 (2022)</Typography>
                </Stack>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                  <NextLink href={'#'} passHref>
                    <m.div variants={varFade().inUp}>
                      <Button
                        startIcon={<Iconify icon={documentIcon} />}
                        size="medium"
                        variant="contained"
                        onClick={handleClickOpen}
                      >
                        Unduh
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
                my: 5,
                boxShadow: 5,
                borderRadius: 1.5,
              }}
            >
              <Container>
                <Link href="/current">
                  <Image
                    alt="cover"
                    src="/favicon/cover_issue_5_en_US.jpg.png"
                    sx={{ maxWidth: '100%', mx: 'auto', mb:{xs:2, md:0} }}
                  />
                </Link>
                <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                  15 September 2022
                </Typography>

                <Stack spacing={2} sx={{ my: 2 }}>
                  <NextLink href={'/current'} passHref>
                    <Link color="inherit" variant="h6">
                      Seminar Nasional Official Statistics 2021
                    </Link>
                  </NextLink>
                  <Typography sx={{ color: 'text.secondary' }}>Vol 2021 No 1 (2021)</Typography>
                </Stack>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                  <NextLink href={'#'} passHref>
                    <m.div variants={varFade().inUp}>
                      <Button
                        startIcon={<Iconify icon={documentIcon} />}
                        size="medium"
                        variant="contained"
                        onClick={handleClickOpen}
                      >
                        Unduh
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
                my: 5,
                boxShadow: 5,
                borderRadius: 1.5,
              }}
            >
              <Container>
                <Link href="/current">
                  <Image
                    alt="cover"
                    src="/favicon/cover_issue_3_en_US.png.png"
                    sx={{ maxWidth: '100%', mx: 'auto', mb:{xs:2, md:0} }}
                  />
                </Link>
                <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                  24 September 2022
                </Typography>

                <Stack spacing={2} sx={{ my: 2 }}>
                  <NextLink href={'/current'} passHref>
                    <Link color="inherit" variant="h6">
                      Seminar Nasional Official Statistics 2020
                    </Link>
                  </NextLink>
                  <Typography sx={{ color: 'text.secondary' }}>Vol 2020 No 1 (2020)</Typography>
                </Stack>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                  <NextLink href={'#'} passHref>
                    <m.div variants={varFade().inUp}>
                      <Button
                        startIcon={<Iconify icon={documentIcon} />}
                        size="medium"
                        variant="contained"
                        onClick={handleClickOpen}
                      >
                        Unduh
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
                my: 5,
                boxShadow: 5,
                borderRadius: 1.5,
              }}
            >
              <Container>
                <Link href="/current">
                  <Image
                    alt="cover"
                    src="/favicon/image 1.png"
                    sx={{ maxWidth: '100%', mx: 'auto', mb:{xs:2, md:0} }}
                  />
                </Link>
                <Typography sx={{ color: 'text.secondary', fontSize: '12px' }}>
                  24 September 2022
                </Typography>

                <Stack spacing={2} sx={{ my: 2 }}>
                  <NextLink href={'/current'} passHref>
                    <Link color="inherit" variant="h6">
                      Seminar Nasional Official Statistics 2019
                    </Link>
                  </NextLink>
                  <Typography sx={{ color: 'text.secondary' }}>Vol 2019 No 1 (2019)</Typography>
                </Stack>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                  <NextLink href={'#'} passHref>
                    <m.div variants={varFade().inUp}>
                      <Button
                        startIcon={<Iconify icon={documentIcon} />}
                        size="medium"
                        variant="contained"
                        onClick={handleClickOpen}
                      >
                        Unduh
                      </Button>
                    </m.div>
                  </NextLink>
                </Box>
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
              </Container>
            </Paper>
          </Box>
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
