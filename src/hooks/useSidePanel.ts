import { useContext, useCallback } from "react";
import { AppContext } from "../context";
import { ActionType } from "../types";

export const useSidePanel = () => {
  const { state, dispatch } = useContext(AppContext);

  const toggleSidePanel = useCallback(
    () =>
      dispatch({
        type: ActionType.TOGGLE_SIDE_PANEL,
      }),
    [dispatch]
  );

  return { isOpen: state?.isOpen, toggleSidePanel };
};
