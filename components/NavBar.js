import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
export default function NavBar() {  

  return <Box sx={{ flexGrow: 1, marginBottom: 2}}>
    <AppBar position="static">
      <Toolbar sx={{justifyContent: 'space-between'}}>
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
            <Link href='/'>
              Job Board
            </Link>
          </Typography>
        <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h6" component="div" sx={{paddingRight: 2}}>
              <Link href='/saved-jobs'>
                Saved Jobs
              </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{paddingRight: 2}}>
            <Link href='/'>
              Applications
            </Link>
          </Typography>

        </Stack>
      </Toolbar>
    </AppBar>
  </Box>
}