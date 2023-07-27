import { Box, styled } from "@ignite-ui/react";

export const IntervalBox = styled(Box, {
  marginTop: "$6",

  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const IntervalContentBox = styled("div", {
  border: "1px solid $gray600",
  borderRadius: "$md",
});

export const IntervalItem = styled("div", {
  padding: "$3 $4",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& + &": {
    borderTop: "1px solid $gray600",
  },
});

export const IntervalDay = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  flex: 1,
});

export const IntervalInputs = styled(IntervalDay, {
  gap: "$2",
  width: "max-content",

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(30%)'
  }
});
