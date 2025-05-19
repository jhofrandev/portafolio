export type PortafolioActions =
  | { type: "is-open-option" }
  | { type: "is-open-option-project" };

export type PortafolioState = {
  isOpenOption: boolean;
  isOpenOptionProject: boolean;
};

export const initialState: PortafolioState = {
  isOpenOption: false,
  isOpenOptionProject: false,
};

export const portafolioReducer = (
  state: PortafolioState = initialState,
  action: PortafolioActions
) => {
  if (action.type === "is-open-option") {
    return {
      ...state,
      isOpenOption: !state.isOpenOption,
    };
  }

  if (action.type === "is-open-option-project") {
    return {
      ...state,
      isOpenOptionProject: !state.isOpenOptionProject,
    };
  }

  return state;
};
