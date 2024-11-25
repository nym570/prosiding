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
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog,
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

// icons
import addIcon from '@iconify/icons-carbon/add';
import subtractIcon from '@iconify/icons-carbon/subtract';
// ----------------------------------------------------------------------

const KEPENULISAN = [
  {
    question: 'Apakah penulis makalah yang didaftarkan pada Call For Paper harus berkelompok?',
    answer: 'Penulis makalah boleh perorangan, boleh secara berkelompok.',
  },
  {
    question: 'Berapa maksimal jumlah penulis dalam satu makalah/artikel?',
    answer: 'Tidak ada batasan jumlah penulis dalam satu makalah/artikel.',
  },
  {
    question: 'Apakah makalah boleh disadur dari skripsi?',
    answer: 'Makalah yang didaftarkan boleh disadur dari skripsi.',
  },
  {
    question: 'Apakah ada ketentuan khusus terkait sistematika penulisan makalah?',
    answer:
      'Ada. Aturan penulisan yang harus dicermati dan diikuti oleh penulis dapat dibaca pada halaman berikut: Link ke Halaman Submission (https://prosiding.stis.ac.id/index.php/semnasoffstat/about/submissions).',
  },
  {
    question: 'Apakah ada ketentuan minimum atau maksimum halaman makalah?',
    answer: 'Makalah dibatasi maksimum 10 halaman.',
  },
  {
    question: 'Makalah/artikel dikumpulkan dalam format apa?',
    answer:
      'Makalah wajib dikumpulkan dengan format docx. Makalah yang dikumpulkan tidak dalam format docx akan langsung ditolak oleh panitia.',
  },
  {
    question: 'Apakah akan ada masa perpanjangan pengumpulan makalah?',
    answer:
      'Tidak Ada. Batas akhir pengumpulan makalah adalah 10 Juni 2023 pukul 23.59 WIB. Pendaftaran makalah dapat ditutup sewaktu-waktu sebelum 10 Juni 2023, jika kuota pendaftar sudah terpenuhi yaitu sebanyak 250 pendaftar.',
  },
];

const TEKNIS = [
  {
    question: 'Bagaimana cara mengetahui apakah makalah saya telah berhasil didaftarkan?',
    answer:
      'Penulis dapat memeriksa melalui OJS apakah sudah mendapatkan id article (nomor di kolom paling kiri) atau belum. Jika sudah, artinya makalah telah terkirim dan berhasil didaftarkan. Jika belum, penulis dapat mencoba mengirimkan ulang/resubmit makalah tersebut melalui OJS.',
  },
  {
    question: 'Bagaimana cara mengirimkan ulang/resubmit makalah melalui OJS?',
    answer:
      'Sama seperti tahapan mendaftarkan makalah baru. Setelah mengirimkan ulang/resubmit, Anda harus melapor melalui email helpdesk.semnas@stis.ac.id. Submission lama akan dihapus oleh editor dan akan digunakan submission yang paling baru.',
  },
  {
    question: 'Apakah metadata makalah yang telah disubmit dapat diubah?',
    answer:
      'Metadata dapat diedit selama makalah masih pada tahapan review. Setelah makalah dipresentasikan pada seminar paralel dan/atau sudah masuk ke tahapan setelah review, metadata tidak dapat diubah dengan alasan apapun.',
  },
  {
    question: 'Apa itu afiliasi?',
    answer: 'Afiliasi bisa diisikan nama universitas atau tempat kerja atau semacamnya.',
  },
];

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [tab, setTab] = useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Page title="FAQ">
      <RootStyle>
        <Container component={MotionViewport}>
          <Breadcrumbs links={[{ name: 'Home', href: '/' }, { name: 'FAQ' }]} />
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
            <Container>
              <Stack>
                <m.div variants={varFade().in}>
                  <Typography variant="h4" sx={{ textAlign: 'start' }}>
                    FAQ
                  </Typography>
                </m.div>
              </Stack>
              <Grid container spacing={4} gap={1} justifyContent="space-between">
                <Grid item xs={12} md={8} lg={7}>
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tab}>
                      <m.div variants={varFade().inUp}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', my: { xs: 8, md: 2 } }}>
                          <Tabs value={tab} onChange={handleChangeTab}>
                            <Tab label="Kepenulisan" value="1" key="1" />
                            <Tab label="Teknis Prosiding" value="2" key="2" />
                          </Tabs>
                        </Box>
                      </m.div>
                      <TabPanel value="1">
                        <MotionViewport>
                          <Box sx={{ mb: 3 }}>
                            {KEPENULISAN.map((faq) => (
                              <m.div key={faq.question} variants={varFade().in}>
                                <Accordion
                                  expanded={expanded === faq.question}
                                  onChange={handleChangeExpanded(faq.question)}
                                >
                                  <AccordionSummary>
                                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                      {faq.question}
                                    </Typography>
                                    <Iconify
                                      icon={expanded === faq.question ? subtractIcon : addIcon}
                                      sx={{ width: 24, height: 24 }}
                                    />
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>{faq.answer}</Typography>
                                  </AccordionDetails>
                                </Accordion>
                              </m.div>
                            ))}
                          </Box>
                        </MotionViewport>
                      </TabPanel>
                      <TabPanel value="2">
                        <MotionViewport>
                          <Box sx={{ mb: 3 }}>
                            {TEKNIS.map((faq) => (
                              <m.div key={faq.question} variants={varFade().in}>
                                <Accordion
                                  expanded={expanded === faq.question}
                                  onChange={handleChangeExpanded(faq.question)}
                                >
                                  <AccordionSummary>
                                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                                      {faq.question}
                                    </Typography>
                                    <Iconify
                                      icon={expanded === faq.question ? subtractIcon : addIcon}
                                      sx={{ width: 24, height: 24 }}
                                    />
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography>{faq.answer}</Typography>
                                  </AccordionDetails>
                                </Accordion>
                              </m.div>
                            ))}
                          </Box>
                        </MotionViewport>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </Grid>
                <Grid xs={12} md={4} lg={4} sx={{ my: 14 }}>
                  <Stack textAlign="center">
                    <m.div variants={varFade().inUp}>
                      <Image
                        alt="cover"
                        src="/favicon/Asset 2 1.png"
                        sx={{ maxWidth: 250, mx: 'auto' }}
                      />
                    </m.div>
                    <m.div variants={varFade().inUp}>
                      <Typography sx={{ color: 'text.secondary', mt: 2 }}>
                        Prosiding diterbitkan setelah pelaksanaan kegiatan Seminar Nasional Official
                        Statistics yang diselenggarakan oleh Politeknik Statistika STIS secara rutin
                        setiap tahun dalam rangkaian kegiatan hari Statistik Nasional.
                      </Typography>
                    </m.div>
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                      <NextLink href={'#'} passHref>
                        <m.div variants={varFade().inUp}>
                          <Button size="medium" onClick={handleClickOpen} variant="contained">
                            Baca Lebih Lanjut
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
