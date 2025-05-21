export type PortafolioActions =
  | { type: "is-open-option" }
  | { type: "is-open-option-project" }
  | { type: "is-open-modal-about" };

export type PortafolioState = {
  isOpenOption: boolean;
  isOpenOptionProject: boolean;
  isOpenModalAbout: boolean;
};

export const initialState: PortafolioState = {
  isOpenOption: false,
  isOpenOptionProject: false,
  isOpenModalAbout: false,
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

  if (action.type === "is-open-modal-about") {
    return {
      ...state,
      isOpenModalAbout: !state.isOpenModalAbout,
    };
  }

  return state;
};
