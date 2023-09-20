"use client";

import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { GREY_COLOR } from "@/constants";

const Text = styled(Typography)(() => ({
  display: "-webkit-box",
  overflow: "hidden",
  lineClamp: 1,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
}));

interface Props {
  text: string;
}

export default function SummarizedCaption({ text }: Props) {
  return (
    <Text color={GREY_COLOR[500]} variant="caption">
      {text}
    </Text>
  );
}
