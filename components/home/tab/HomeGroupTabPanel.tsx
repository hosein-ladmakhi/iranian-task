import SummarizedCaption from '@/shared/SummarizedCaption';
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
  colors,
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
              primary={
                <Typography component="h2" variant="body2" fontWeight="bold">
                  حسین لادمخی نژاد
                </Typography>
              }
              secondary={
                <SummarizedCaption text="حسین لادمخی نژاد برنامه نویس فرانت برای چندین سال, حسین لادمخی نژاد برنامه نویس فرانت برای چندین سال, حسین لادمخی نژاد برنامه نویس فرانت برای چندین سال" />
              }
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Chip label="1" color="secondary" size="small" />
              <Typography
                color={colors.grey[600]}
                mt={1}
                variant="caption"
                component="span"
              >
                11:45
              </Typography>
            </Box>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
