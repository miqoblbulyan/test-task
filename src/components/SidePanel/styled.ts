import { styled } from "@mui/material/styles";
import { Drawer, DrawerProps } from "@mui/material";
import { drawerWidth } from "../../types";

export const StyledDrawer = styled(Drawer)<DrawerProps>(({ theme, open }) => ({
  color: "black",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
  },
  width: open ? drawerWidth : 0,
  height: "100vh",
  flexShrink: 0,
  transition: theme.transitions.create(["width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: drawerWidth,
    transition: theme.transitions.create(["width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const SidePanelCloseButton = styled("div")(() => ({
  width: "32px",
  height: "32px",
  border: "1px solid #568793",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ChargeTitle = styled("h4")(() => ({
  fontSize: "25px",
  lineHeight: "40px",
  color: "#172326",
}));

export const InfoDataViewContainer = styled("div")(() => ({
  display: "inline-grid",
  gridTemplateColumns: "repeat(3, 2fr)",
  gridGap: "36px 26px",
}));

export const InfoWrapper = styled("div")(() => ({
  display: "flex",
  gap: "50px",
  flexDirection: "column",
}));
