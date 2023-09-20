'use client';

import { Typography, colors } from '@mui/material';
import styled from '@emotion/styled';

const Text = styled(Typography)(() => ({
  display: '-webkit-box',
  overflow: 'hidden',
  lineClamp: 1,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
}));

interface Props {
  text: string;
}

export default function SummarizedCaption({ text }: Props) {
  return (
    <Text color={colors.grey[500]} variant="caption">
      {text}
    </Text>
  );
}
