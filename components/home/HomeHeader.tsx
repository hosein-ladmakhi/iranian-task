"use client";

import { Box, IconButton, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { MenuIcon, SearchIcon } from "@/constants";

const Header = styled(Box)(() => ({
  paddingBlock: 2,
  marginBottom: 1,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

export default function HomeHeader() {
  return (
    <Header>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Typography variant="body1" component="h1" fontWeight="bold">
        پیام های سازمانی
      </Typography>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Header>
  );
}
