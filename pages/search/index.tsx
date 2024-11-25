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
import documentIcon from '@iconify/icons-carbon/document'
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
import { TextField, FormControl, Select, InputLabel, MenuItem, FormHelperText, FormLabel, Input } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
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
  const [age, setAge] = React.useState('');
  const [tahun, setTahun] = React.useState('');
  const [bulan, setBulan] = React.useState('');
  const [tanggal, setTanggal] = React.useState('');

  const listTahun = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  const listBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const listTanggal = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleChangeTahun = (event: SelectChangeEvent) => {
    setTahun(event.target.value as string);
  };

  const handleChangeBulan = (event: SelectChangeEvent) => {
    setBulan(event.target.value as string);
  };

  const handleChangeTanggal = (event: SelectChangeEvent) => {
    setTanggal(event.target.value as string);
  };

  return (
    <Page title="Search">
      <RootStyle>
        <Container>
          <Breadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Search', href: '/search' },
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
            }}
          >
            <Container>
              <Typography variant='h3'>SEARCH</Typography>
              <Box sx={{ py:3 }}>
                <TextField id="outlined-search" label="Search..." type="search" variant='outlined' fullWidth/>
              </Box>
              <Paper variant="outlined" sx={{ borderRadius:0, pb:4, px:2, pt:1}}>
                <Typography sx={{ py:2 }}>
                  FILTER FOR ADVANCE SEARCH
                </Typography>
                <Grid container spacing={2} sx={{ py:1 }}>
                  <Grid item md={8} xs={12} sx={{ pr: { md:4 } }}>
                    <Typography sx={{mb:1}}>
                      Published After
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <FormControl sx={{ }} fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">Tahun</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={tahun}
                            label="Tahun"
                            onChange={handleChangeTahun}
                            sx={{ bgColor:'primary' }}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {listTahun.map((t) => (
                              <MenuItem key={t} value={t}>
                                {t}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={4}  xs={12} >
                        <FormControl sx={{ }} fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">Bulan</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={bulan}
                            label="Bulan"
                            onChange={handleChangeBulan}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {listBulan.map((b) => (
                              <MenuItem key={b} value={b}>
                                {b}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={4}  xs={12} >
                        <FormControl sx={{ }} fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">Tanggal</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={tanggal}
                            label="Tanggal"
                            onChange={handleChangeTanggal}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {listTanggal.map((tg) => (
                              <MenuItem key={tg} value={tg}>
                                {tg}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Typography sx={{mb:1}}>
                      By Author
                    </Typography>
                    <TextField id="outlined-search" label="Search..." type="search" variant='outlined' fullWidth/>
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ py:1 }}>
                  <Grid item md={8} xs={12} sx={{ pr: { md:4 } }}>
                    <Typography sx={{mb:1}}>
                      Published Before
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <FormControl sx={{ }} fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">Tahun</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={tahun}
                            label="Tahun"
                            onChange={handleChangeTahun}
                            sx={{ bgColor:'primary' }}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {listTahun.map((t) => (
                              <MenuItem key={t} value={t}>
                                {t}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={4}  xs={12} >
                        <FormControl sx={{ }} fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">Bulan</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={bulan}
                            label="Bulan"
                            onChange={handleChangeBulan}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {listBulan.map((b) => (
                              <MenuItem key={b} value={b}>
                                {b}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={4}  xs={12} >
                        <FormControl sx={{ }} fullWidth>
                          <InputLabel id="demo-simple-select-helper-label">Tanggal</InputLabel>
                          <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={tanggal}
                            label="Tanggal"
                            onChange={handleChangeTanggal}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {listTanggal.map((tg) => (
                              <MenuItem key={tg} value={tg}>
                                {tg}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={4} xs={12}>
                    <Typography sx={{mb:1}}>
                      By Categories
                    </Typography>
                    <FormControl sx={{ }} fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Cat 1</MenuItem>
                        <MenuItem value={20}>Cat 2</MenuItem>
                        <MenuItem value={30}>Cat 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
              <Stack alignItems="flex-end" sx={{py:4}}>
                <Button variant="contained" href="/search/hasil">
                  SEARCH
                </Button>
              </Stack>
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
