import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, Paper, Container, Typography, Grid } from '@mui/material';
// components
import { Image } from '../../components';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(19, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(8, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeNewStart() {
  return (
    <RootStyle>
      {/* <Container sx={{ height: 1 }} component={MotionViewport}> */}
      <Grid
        component={MotionViewport}
        container
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundImage: "url('/favicon/Vector 1.png')",
          backgroundSize: 'cover',
        }}
        sx={{textAlign:{xs:"start", sm:"center", md:'start', lg:"start"} }}
      >
        <Grid item lg={6} display={{ xs: 'grid', md: 'grid', lg: 'grid' }} sx={{textAlign:{xs:"start", sm:"center", md:'start', lg:"start"} }}>
          <m.div variants={varFade().inUp}>
            <Image alt="cover" src="/favicon/Asset 2.png" sx={{ maxWidth: 420, mx: 'auto' }} />
          </m.div>
        </Grid>
        <Grid
          item
          lg={6}
          alignItems="center"
        >
          <Stack spacing={0} sx={{ my: 7, px: 3, maxWidth: 560, textAlign:{xs:"center", sm:"center", md:'start', lg:"start"} }}>
            <m.div variants={varFade().inUp}>
              <Typography variant="h5">Seminar Nasional</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                Akan dilaksanakan pada Sabtu, 16 September 2023
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="h5">Gratis</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                Biaya Pendaftaran & Publikasi tidak dipungut biaya
              </Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="h5">Fasilitas</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>Sertifikat Pemakalah</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography variant="h5">Pelaksanaan</Typography>
            </m.div>
            <m.div variants={varFade().inUp}>
              <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                Seminar Panel dan Paralel akan dilaksanakan secara daring/online melalui aplikasi
                Zoom dan disiarkan langsung melalui Youtube
              </Typography>
            </m.div>
            {/* <m.div variants={varFade().inDown}>
                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    new start
                  </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                  <Typography variant="h2" sx={{ mt: 2, mb: 3 }}>
                    The
                    <Box component="span" sx={{ color: 'primary.main' }}>
                      {''} ZONE {''}
                    </Box>
                    UI Kit
                  </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                  <Typography sx={{ color: 'text.secondary' }}>
                    Modern ui kit to save your time, boost your creativity. Neat and super stylish
                    layout ready to help with your projects
                  </Typography>
                </m.div> */}
          </Stack>
        </Grid>
      </Grid>
      {/* </Container> */}
    </RootStyle>
  );
}
