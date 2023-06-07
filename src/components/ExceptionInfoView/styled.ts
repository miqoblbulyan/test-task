import { styled } from "@mui/material/styles";
import { ExceptionType } from "../../types";

export const InfoDataViewContainer = styled("div")(() => ({
  display: "inline-grid",
  gridTemplateColumns: "repeat(3, 2fr)",
  gridGap: "36px 26px",
}));

export const ExceptionInfoType = styled("div")<{ type: ExceptionType }>(
  ({ type }) => {
    let color = "black";

    switch (type) {
      case ExceptionType.critical:
        color = "#EB5757";
        break;
      case ExceptionType.high:
        color = "#F2994A";
        break;
      case ExceptionType.medium:
        color = "#88C00D";
        break;

      default:
        break;
    }

    return {
      color,
    };
  }
);

export const ExceptionInfoWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));

export const ExceptionInfoElement = styled("div")(() => ({
  display: "flex",
  gap: "8px",
}));

export const ExceptionIndex = styled("strong")(() => ({
  color: "#EB5757",
  fontSize: "14px",
  lineHeight: "20px",
}));

export const ExceptionValue = styled("span")(() => ({
  width: "100%",
  fontSize: "14px",
  lineHeight: "20px",
}));
