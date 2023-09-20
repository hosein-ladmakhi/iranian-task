import { Box, IconButton, Typography } from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';

export default function HomeHeader() {
  return (
    <Box
      py={2}
      borderBottom="1px solid red"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Typography variant="body1" component="h1" fontWeight="bold">
        پیام های سازمانی
      </Typography>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Box>
  );
}
