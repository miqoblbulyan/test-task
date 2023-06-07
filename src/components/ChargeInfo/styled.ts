import { styled } from "@mui/material/styles";
import { Chip, ChipProps, Stack, StackProps } from "@mui/material";

export const StyledStack = styled(Stack)<StackProps>(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
}));

export const StyledChip = styled(Chip)<ChipProps>(() => ({
  background: "#ECC631",
  fontWeight: 600,
  fontSize: "11px",
  border: "none",
  color: "white",
}));

export const ChargeInfoWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
