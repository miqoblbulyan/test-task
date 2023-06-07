import { Dispatch, ReactNode, ComponentType } from "react";
import { SvgIconProps } from "@mui/material";

export const drawerWidth = "47.5vw";

export enum ActionType {
  TOGGLE_SIDE_PANEL = 1,
}

export enum ExceptionType {
  critical = "Critical",
  high = "High",
  medium = "Medium",
}

export interface IMainProps {
  isOpen?: boolean;
}

export interface IState extends Pick<IMainProps, "isOpen"> {}

export interface IAction {
  type: ActionType;
  payload?: IState;
}

export interface IAppContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}

export interface ISidePanelProps {
  children?: ReactNode;
}

export interface ITitleProps {
  title: string;
  color: string;
  Icon: ComponentType<SvgIconProps>;
}

export interface IInfoDataView {
  title: string;
  value: string;
  isItalic?: boolean;
}

export interface IInfoDataViewValueProps {
  isItalic?: boolean;
}

export interface IExceptionElement {
  title: string;
  value: string;
  type: ExceptionType;
}
