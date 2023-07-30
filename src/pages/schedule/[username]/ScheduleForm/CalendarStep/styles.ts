import { Box, Text, styled } from "@ignite-ui/react";

export const Container = styled(Box, {
  maxWidth: "100%",
  margin: "$6 auto 0",
  padding: 0,
  position: "relative",

  display: "grid",

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: "1fr 280px",

        "@media (max-width:900px)": {
          gridTemplateColumns: "1fr",
        },
      },

      false: {
        width: 548,
        gridTemplateColumns: "1fr",
      },
    },
  },
});

export const TimePicker = styled("div", {
  width: 280,
  padding: "$6 $6 0",
  borderLeft: "1px solid $gray600",
  overflowY: "scroll",

  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
});

export const TimePickerHeader = styled(Text, {
  color: "$white",
  fontWeight: "$md",

  span: {
    color: "$gray200",
  },
});

export const TimePickerList = styled("div", {
  width: "100%",
  marginTop: "$3",

  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$2",
});

export const TimePickerItem = styled("button", {
  all: "unset",
  width: "100%",
  padding: "$2 0",
  textAlign: "center",
  borderRadius: "$sm",
  fontSize: "$sm",
  lineHeight: "$base",
  cursor: "pointer",
  color: "$gray100",
  background: "$gray600",

  "&:last-child": {
    marginBottom: "$6",
  },

  "&:disabled": {
    background: "none",
    cursor: "default",
    opacity: "0.4",
  },

  "&:not(:disabled):hover": {
    background: "$gray500",
  },

  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray100",
  },
});
