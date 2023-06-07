import { memo, ReactNode, Dispatch, createContext } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { IAction, IAppContext } from "../types";

export const AppContext = createContext<IAppContext>({
  state: {
    isOpen: false
  },
  dispatch: {} as Dispatch<IAction>,
});

export const AppContextProvider = memo(
  ({ children }: { children: ReactNode }) => {
    const { dispatch, state } = useAppContext();

    return (
      <AppContext.Provider
        value={{
          dispatch,
          state,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
);
