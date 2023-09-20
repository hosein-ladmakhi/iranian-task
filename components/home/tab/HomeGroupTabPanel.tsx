import {
  Avatar,
  Box,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';

export default function HomeGroupTabPanel() {
  return (
    <List>
      {new Array(20).fill(0).map(() => (
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText
              primary="حسین لادمخی نژاد"
              secondary={
                <Typography variant="caption" component="p">
                  حسین لادمخی نژاد برنامه نویس فرانت برای چندین سال
                </Typography>
              }
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Chip label="1" color="secondary" size="small" />
              <Typography variant="caption" component="span">
                11:45
              </Typography>
            </Box>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
