import { ReactElement } from 'react';
// _data
import { _pricingHome } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page } from '../src/components';
// sections
import {
  HomeHero,
  HomeNewStart,
  HomeTanggal,
} from '../src/sections/home';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Seminar Nasional Official Statistics">
      <HomeHero />

      <HomeNewStart />

      <HomeTanggal />
    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
