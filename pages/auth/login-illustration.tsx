// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Stack, Divider, Typography, Card, Button, Box, AppBar, Toolbar, IconButton } from '@mui/material';
// routes
import Routes from '../../src/routes';
// components
import { Page, Logo } from '../../src/components';
// sections
import { LoginForm } from '../../src/sections/auth';
import { FormatSize } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { RegisterForm } from '../../src/sections/auth';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    overflow: 'hidden',
    height: '100vh',
  },
  [theme.breakpoints.up('xs')]: {
    height: '100vh',
    margin:'30px auto',
  },
  [theme.breakpoints.up('lg')]: {
    height: '100vh',
    margin:'30px auto',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(5, 2.5),
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
    maxHeight : '90%',
    padding: theme.spacing(2, 10),
  },
  height : '90%',
}));

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '0.875rem',
  padding: '6px 12px',
  lineHeight: 1.5,
});
// ----------------------------------------------------------------------

export default function LoginCoverPage() {
  return (
    <Page title="Login" sx={{ bgcolor: 'primary.lighter'}}>
      <Box sx={{ flexGrow: 1, bgcolor: 'primary.lighter', boxShadow : 0, border: '0px'}}>
        <AppBar position="static" sx={{ flexGrow: 1 , bgcolor: 'primary.lighter', pt : 1, boxShadow : 0, border: '0px'}}>
          <Toolbar>
            <BootstrapButton variant="contained" disableRipple size='small' href='/'>
              Back
            </BootstrapButton>
          </Toolbar>
        </AppBar>
      </Box>
      <RootStyle sx={{bgcolor: 'primary.lighter', flex:'column'}}>
        <Card sx={{ minWidth: '35%', margin : 'auto', height : '90', boxShadow: 20, width: { xs: '87%', md: '35%' } }}>
          <ContentStyle>
            {/* <Logo sx={{ display: { xs: 'block', md: 'inline-block'} }} /> */}

            <Stack
              sx={{
                pb: 0,
                pt: { xs: 1, md: 0 },
                textAlign: { xs: 'center', md: 'center' },
              }}
            >
              <Typography variant="h3" paragraph color='primary' sx = {{pt:'0px', mt:0, my:3}}>
                LOGIN
              </Typography>
            </Stack>

            {/* <AuthWithSocial /> */}

            <LoginForm />
            <Divider sx={{ py: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.disabled'}}>
                ATAU
              </Typography>
            </Divider>

            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign : 'center' }}>
                Belum memiliki akun?
                <NextLink href={Routes.registerCover} passHref>
                  <Link variant="subtitle2" color="primary">
                    {''} Daftar
                  </Link>
                </NextLink>
            </Typography>
            
          </ContentStyle>
        </Card>
        {/* <AuthCarousel title="Hi, Welcome Back" /> */}
      </RootStyle>
      <Box sx={{ flexGrow: 1, bgcolor: 'primary.lighter', boxShadow : 0, border: '0px', p:4 }}>
        {/* <AppBar position="static" sx={{ flexGrow: 1 , bgcolor: 'primary.lighter', pt : 1, boxShadow : 0, border: '0px'}}>
          
        </AppBar> */}
      </Box>
    </Page>
  );
}
