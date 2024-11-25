import * as React from 'react';

import { useState } from 'react';

// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import {
  Container,
  Stack,
  Button,
  Typography,
  Box,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Dialog,
} from '@mui/material';
// routes
import Routes from '../../routes';
// aos
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../../components/animate';
//icon
import editIcon from '@iconify/icons-carbon/edit-filter';
import collectionIcon from '@iconify/icons-carbon/document-export';
import revisionIcon from '@iconify/icons-carbon/arrows-vertical';
import videoIcon from '@iconify/icons-carbon/video';
import formIcon from '@iconify/icons-carbon/document-attachment';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Iconify, Image } from '../../components';
// hooks
import useResponsive from '../../hooks/useResponsive';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  // backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(14, 0),
  },
}));

const CORE_VALUES = [
  {
    // year: '2021',
    title: '3 April 2023 s.d 10 Juni 2023',
    description:
      'Pendaftaran Makalah (Full Paper) *Pendaftaran makalah dibuka untuk 250 pendaftar pertama.',
    iconed: editIcon,
  },
  {
    // year: '2020',
    title: '4 Agustus 2023',
    description: 'Batas akhir pengumuman penerimaan makalah.',
    iconed: collectionIcon,
  },
  {
    // year: '2019',
    title: '13 Agustus 2023',
    description: 'Batas akhir pengumpulan revisi makalah.',
    iconed: revisionIcon,
  },
  {
    // year: '2018',
    title: '1 September 2023',
    description: 'Batas akhir pengumpulan bahan paparan dan video rekaman presentasi.',
    iconed: videoIcon,
  },
  {
    // year: '2018',
    title: '16 September 2023',
    description: 'Seminar Nasional Official Statistics 2023.',
    iconed: formIcon,
  },
];

const COLORS = ['#7042C1', '#F65D09', 'black', '#FFAD06', '#7042C1'] as const;

// ----------------------------------------------------------------------

export default function HomeTanggal() {
  const isDesktop = useResponsive('up', 'md');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Stack spacing={3} sx={{ textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography variant="h3">Tanggal Penting</Typography>
          </m.div>
        </Stack>

        {/* Timeline */}

        <m.div variants={varFade().inUp}>
          <Timeline position={isDesktop ? 'alternate' : 'right'} sx={{ mt: 5 }}>
            {CORE_VALUES.map((value, index) => {
              const { title, description, iconed } = value;
              return (
                <TimelineItem
                  key={title}
                  sx={{
                    '&:before': {
                      display: { xs: 'none', md: 'block' },
                    },
                  }}
                >
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: COLORS[index] }}>
                      <Iconify
                        icon={iconed}
                        sx={{ fontSize: { xs: '27px', md: '30px', lg: '40px' }, m: 1 }}
                      />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                    {/* <Typography variant="subtitle3" sx={{ color: `${COLORS[index]}.main` }}>
                      {year}
                    </Typography> */}
                    <Typography
                      variant="h4"
                      sx={{ mt: 0.5, mb: 1, color: `${COLORS[index]}.main` }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.72,
                        maxWidth: { md: 360 },
                        ...(index % 2 && {
                          ml: 'auto',
                        }),
                      }}
                    >
                      {description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </m.div>

        <Box sx={{ textAlign: 'center', mt: 9 }}>
          <m.div variants={varFade().inUp}>
            <Button onClick={handleClickOpen} size="large" variant="contained">
              Lihat Poster <i> &nbsp;Call For Papers</i>
            </Button>
          </m.div>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 3,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{mt:2}}>
            <img alt="cover" src="/favicon/poster_CFP.png" width={"100%"}/>
          </DialogContent>
        </Dialog>
      </Container>
    </RootStyle>
  );
}
