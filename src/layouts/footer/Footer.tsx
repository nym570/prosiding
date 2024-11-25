import { useState } from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// @mui
import { styled } from '@mui/material/styles';
import Masonry from '@mui/lab/Masonry';
import {
  Box,
  Grid,
  Link,
  Stack,
  Button,
  Divider,
  Collapse,
  Container,
  LinkProps,
  Typography,
  FilledInput,
  InputAdornment,
} from '@mui/material';
// hooks
import { useResponsive } from '../../hooks';
// components
import { Logo, Iconify, Image, SocialsButton, AppStoreButton } from '../../components';
//
import { FooterLink } from '../nav/NavConfig';
// utils
import cssStyles from '../../utils/cssStyles';

// ----------------------------------------------------------------------

const LinkStyle = styled((props: LinkProps) => <Link target="_blank" rel="noopener" {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body3,
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  })
);

const RootStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  // padding: theme.spacing(10, 0),
  // ...cssStyles(theme).bgImage(),
  // [theme.breakpoints.up('md')]: {
  //   position: 'relative',
  //   padding: theme.spacing(1, 0),
  // },
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const isDesktop = useResponsive('up', 'md');

  const lists = FooterLink.filter((list) => list.subheader !== 'Coming Soon');

  const renderLists = isDesktop
    ? lists
    : lists.sort((listA, listB) => Number(listA.order) - Number(listB.order));

  return (
    <RootStyle>
      <Divider />
      <Container sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
          <Grid item xs={12} md={4}>
            <Stack spacing={{ xs: 3, md: 5 }}>
              <Stack alignItems="flex-start" spacing={3}>
                <Typography variant="h6">Prosiding</Typography>
                <Typography variant="body3" sx={{ color: 'text.secondary' }}>
                Prosiding diterbitkan setelah pelaksanaan kegiatan Seminar Nasional Official Statistics yang diselenggarakan oleh Politeknik Statistika STIS secara rutin setiap tahun dalam rangkaian kegiatan hari Statistik Nasional. 
                </Typography>
              </Stack>

              <Stack spacing={2}>
                {/* <SocialsButton /> */}
                <Stack direction="row" flexWrap="wrap" alignItems="center">
                    <Image alt="cover" src="/favicon/bps_small.png.png" sx={{ width: 50, mr:2 }} />
                    <Image alt="cover" src="/favicon/stis_small.png.png" sx={{ width: 50, mr:2 }} />
                    <Image alt="cover" src="/favicon/isi_small1.png.png" sx={{ width: 50, mr:2 }} />
                    <Image alt="cover" src="/favicon/forstat_small3.png.png" sx={{ width: 50 }} />
                </Stack>
              </Stack>

              {/* <Stack alignItems="flex-start">
                <Typography variant="h6">Documentation</Typography>
                <LinkStyle href="#">Documentation</LinkStyle>
                <LinkStyle href="#">Changelog</LinkStyle>
                <LinkStyle href="#">Contributing</LinkStyle>
              </Stack>

              <Stack spacing={2}>
                <Stack spacing={1}>
                  <Typography variant="h6">Let’s stay in touch</Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Ubscribe to our newsletter to receive latest articles to your inbox weekly.
                  </Typography>
                </Stack>
                <FilledInput
                  placeholder="Email address"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button variant="contained" size="small" sx={{ py: '9px' }}>
                        Subscribe
                      </Button>
                    </InputAdornment>
                  }
                  sx={{
                    pr: 0.5,
                    '& .MuiFilledInput-input': { py: '14px' },
                  }}
                />
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h6">Apps</Typography>
                <AppStoreButton />
              </Stack> */}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            {isDesktop ? (
              <Masonry columns={2} >
                {renderLists.map((list) => (
                  <ListDesktop key={list.subheader} list={list} />
                ))}
              </Masonry>
            ) : (
              <Stack spacing={1.5}>
                {renderLists.map((list) => (
                  <ListMobile key={list.subheader} list={list} />
                ))}
              </Stack>
            )}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2.5}
          justifyContent="space-between"
          sx={{ py: 3, textAlign: 'center' }}
        >
          <Typography variant="body3" sx={{ color: 'text.secondary' }}>
            © 2023. All rights reserved
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            <Link href='mailto:helpdesk.semnas@stis.ac.id' variant="body3" sx={{ color: 'text.secondary' }}>
              Help Center
            </Link>
            {/* <Link variant="body3" sx={{ color: 'text.secondary' }}>
              Terms of Service
            </Link> */}
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

type ListProps = {
  list: {
    subheader: string;
    items?: {
      title: string;
      path: string;
    }[];
  };
};

function ListDesktop({ list }: ListProps) {
  const { subheader, items } = list;

  return (
    <Stack alignItems="flex-start" sx={{ pb: { md: 1 } }}>
      <Typography variant="h6">{subheader}</Typography>
      {items?.map((link) => (
        <LinkStyle key={link.title} href={link.path}>
          {link.title}
        </LinkStyle>
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function ListMobile({ list }: ListProps) {
  const { subheader, items } = list;

  const [expand, setExpand] = useState(false);

  const onExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack spacing={1.5} alignItems="flex-start">
      <Typography
        variant="h6"
        onClick={onExpand}
        sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
      >
        {subheader}
        <Iconify
          icon={expand ? chevronDown : chevronRight}
          sx={{ width: 20, height: 20, ml: 0.5 }}
        />
      </Typography>

      <Collapse in={expand} sx={{ width: 1 }}>
        <Box
          sx={{
            display: 'grid',
            rowGap: 1,
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
            },
          }}
        >
          {items?.map((link) => (
            <LinkStyle key={link.title} href={link.path}>
              {link.title}
            </LinkStyle>
          ))}
        </Box>
      </Collapse>
    </Stack>
  );
}
