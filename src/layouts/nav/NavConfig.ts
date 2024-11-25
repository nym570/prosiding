// routes
import Routes from '../../routes';

// ----------------------------------------------------------------------

export const FooterLink = [
  {
    order: '1',
    subheader: 'Archives',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: '> 2022', path: '/current' },
      { title: '> 2021', path: '/current' },
      { title: '> 2020', path: '/current' },
      { title: '> 2019', path: '/current' },      
    ],
  },
  {
    order: '2',
    subheader: 'Contact',
    cover: 'https://zone-assets-api.vercel.app/assets/images/menu/menu_career.jpg',
    items: [
      { title: 'Jl. Otto Iskandardinata No. 64C', path: 'mailto:semnas@stis.ac.id'  },
      { title: 'Jakarta 1330', path: 'mailto:semnas@stis.ac.id'  },
      { title: 'Telp: (021) 8191437, 8508812', path: 'mailto:semnas@stis.ac.id' },
      { title: 'Fax: (021) 8197577', path: 'mailto:semnas@stis.ac.id' },
      { title: 'Email: semnas@stis.ac.id', path: 'mailto:semnas@stis.ac.id' },
    ],
  },
];
export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'Current', path: Routes.current },
  { title: 'Archive', path: Routes.archive },
  { title: 'Submissions', path: Routes.submission },
  { title: 'Information', path: Routes.componentsUI },
  { title: 'About', path: Routes.about },
  { title: 'FAQ', path: Routes.faq },
  // {
  //   title: 'Pages',
  //   path: Routes.pages,
  //   children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
  // },
];
