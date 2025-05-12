export type PortafolioActions = { type: "is-open-option" };

export type PortafolioState = {
  isOpenOption: boolean;
};

export const initialState: PortafolioState = {
  isOpenOption: false,
};

export const portafolioReducer = (
  state: PortafolioState = initialState,
  action: PortafolioActions
) => {
  if (action.type === "is-open-option") {
    return {
      isOpenOption: !state.isOpenOption,
    };
  }

  return state;
};
