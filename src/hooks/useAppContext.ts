import { useReducer } from "react";
import { ActionType, IAction, IState } from "../types";

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case ActionType.TOGGLE_SIDE_PANEL:
      return {
        isOpen: !state?.isOpen,
      };

    default:
      return state;
  }
}

export const useAppContext = () => {
  const [state, dispatch] = useReducer<any>(reducer, { isOpen: false });

  return {
    state: state as IState,
    dispatch,
  };
};
