import { styled } from "@mui/material/styles";
import { IMainProps, drawerWidth } from "../../types";

export const StyledMain = styled("main")<IMainProps>(({ theme, isOpen }) => ({
  color: "white",
  backgroundColor: "#2F4F57",
  width: "100vw",
  height: "100vh",
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isOpen && {
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
