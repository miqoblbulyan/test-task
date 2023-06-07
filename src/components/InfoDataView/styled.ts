import { styled } from "@mui/material/styles";
import { IInfoDataViewValueProps } from "../../types";

export const InfoDataViewWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "120px",
}));

export const InfoDataViewTitle = styled("p")(() => ({
  margin: 0,
  letterSpacing: "0.1px",
  fontSize: "11px",
  color: "#8B9092",
}));

export const InfoDataViewValue = styled("p")<IInfoDataViewValueProps>(
  ({ isItalic }) => ({
    margin: 0,
    fontStyle: isItalic ? "italic" : "inherit",
    color: isItalic ? "#568793" : "#172326",
  })
);
