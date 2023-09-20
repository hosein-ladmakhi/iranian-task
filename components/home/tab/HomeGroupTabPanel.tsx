import { Users } from "@/@types";
import { GREY_COLOR } from "@/constants";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

// define props type

interface Props {
  users: Users;
}

export default function HomeGroupTabPanel({ users }: Props) {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} disablePadding divider>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="h2" variant="body2" fontWeight="bold">
                  {user.first_name} {user.last_name}
                </Typography>
              }
              secondary={
                <Typography
                  component="h2"
                  variant="caption"
                  color={GREY_COLOR[500]}
                >
                  {user.email}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
      {users.map((user) => (
        <ListItem disablePadding divider>
          <ListItemButton>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography component="h2" variant="body2" fontWeight="bold">
                  {user.first_name} {user.last_name}
                </Typography>
              }
              secondary={
                <Typography
                  component="h2"
                  variant="caption"
                  color={GREY_COLOR[500]}
                >
                  {user.email}
                </Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
