"use client";

import type { ReactNode } from "react";
import styled from "@emotion/styled";
import { useDimension } from "@/hooks/useDimension";

// define props
interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const { height } = useDimension();

  return <Container height={height}>{children}</Container>;
}

// custom style
const Container = styled("div")<{ height: number }>(({ height }) => ({
  maxWidth: "400px",
  marginInline: "auto",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  overflow: "hidden",
  height,
}));
