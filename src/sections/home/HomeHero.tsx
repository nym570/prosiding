import { useRef } from 'react';
import { m } from 'framer-motion';
// icons
import launchIcon from '@iconify/icons-carbon/launch';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Container, Typography, Grid } from '@mui/material';
// hooks
import { useBoundingClientRect } from '../../hooks';
// routes
import Routes from '../../routes';
// components
import { Image, Iconify, varFade, MotionViewport } from '../../components';
// next
import NextLink from 'next/link';
//Icon
import searchIcon from '@iconify/icons-carbon/search-advanced';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  padding: theme.spacing(0, 0),
  [theme.breakpoints.up('md')]: {
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <RootStyle>
      <Container sx={{ height: 1 }} component={MotionViewport}>
        <Grid container columnSpacing={2} alignItems="center" sx={{ height: 1 }}>
          <Grid item xs={12} md={5} lg={7}>
            <Stack
              spacing={3}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              justifyContent="center"
              sx={{
                py: 15,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography variant="h3">
                  SEMINAR NASIONAL <br /> OFFICIAL STATISTICS
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'text.secondary' }}>
                  Politeknik Statistika STIS kembali menyelenggarakan kegiatan tahunan yaitu Seminar
                  Nasional Official Statistics 2023. Tema Seminar nasional keenam tahun ini adalah
                  <strong>
                    {' '}
                    “Peran Official Statistics dan Sains Data dalam Mewujudkan Ketahanan Pangan
                    Nasional”
                  </strong>{' '}
                  dengan membuka <i>Call For Papers</i> untuk subtema <i>official statistics</i>,
                  sains data, dan aplikasi statistika yang masih terkait dengan tema. Seminar ini
                  dilaksanakan dengan tujuan untuk menghasilkan pemikiran yang solutif terhadap
                  berbagai tantangan di bidang <i>official statistics</i> dan isu-isu strategis
                  nasional, serta karya-karya inovatif dan adaptif sebagai respons terhadap
                  perkembangan teknologi informasi dan sains data. 
                </Typography>
              </m.div>

              {/* <Button
                  color="inherit"
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon={launchIcon} />}
                  target="_blank"
                  rel="noopener"
                  href={Routes.figmaPreview}
                >
                  figma workspace
                </Button> */}
              <NextLink href={'/search'} passHref>
                <m.div variants={varFade().inUp}>
                  <Button
                    startIcon={<Iconify icon={searchIcon} />}
                    size="medium"
                    variant="contained"
                    sx={{ width: '100%'}}
                  >
                    Cari Artikel
                  </Button>
                </m.div>
              </NextLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7} lg={5} display={{ xs: 'none', md: 'grid', lg: 'grid' }}>
            <m.div variants={varFade().inUp}>
              <Image
                alt="home-hero"
                src="/favicon/Asset 3.png"
                sx={{ maxWidth: 390, mx: 'auto' }}
              />
            </m.div>
            {/* <img src='../../assets/illustrations/Asset 1 2.png'/> */}
          </Grid>
        </Grid>
      </Container>

      {/* <Box
          sx={{
            maxWidth: 700,
            position: 'absolute',
            bottom: { md: '20%', lg: -100 },
            right: { md: -110, xl: 0, lg: 0 },
            display: { xs: 'none', md: 'block' },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          <Image
            alt="home-hero"
            src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=900&t=st=1686418515~exp=1686419115~hmac=b731b108f582e1e76ea2dae2686ce6270b3bcbee9abdbe9e78de98515f205e69"
          />
        </Box> */}
    </RootStyle>
  );
}
