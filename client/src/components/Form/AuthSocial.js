// material
import { Stack, Button, Divider, Typography } from '@mui/material';
// component
import Iconify from './Iconify';

// ----------------------------------------------------------------------

export default function AuthSocial() {
  return (
    <>
      <Stack direction="row" sx={{my:2}} spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined" sx={{height:'50px'}}>
          <Iconify icon="eva:google-fill" color="#DF3E30" />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" />
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          OR
        </Typography>
      </Divider>
    </>
  );
}
