import {
  createContext,
  type ReactNode,
  type Dispatch,
  useReducer,
  useMemo,
} from "react";
import {
  type PortafolioState,
  type PortafolioActions,
  portafolioReducer,
  initialState,
} from "../reducers/portafolio-reducer";

type PortafolioProviderProps = {
  children: ReactNode;
};

type PortafolioContextProps = {
  state: PortafolioState;
  dispatch: Dispatch<PortafolioActions>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const PortafolioContext = createContext<PortafolioContextProps>(null!);

export const PortafolioProvider = ({ children }: PortafolioProviderProps) => {
  const [state, dispatch] = useReducer(portafolioReducer, initialState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <PortafolioContext.Provider value={value}>
      {children}
    </PortafolioContext.Provider>
  );
};
