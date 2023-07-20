import { Box, styled } from "@ignite-ui/react";

export const ConnectBox = styled(Box, {
  marginTop: "$6",

  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const ConnectBoxContent = styled("div", {
  border: "1px solid $gray600",
  borderRadius: "$md",
  padding: "$4 $6",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
