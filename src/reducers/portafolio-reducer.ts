export type PortafolioActions =
  | { type: "is-open-option" }
  | { type: "is-open-option-project" }
  | { type: "is-open-modal-about" }
  | { type: "is-open-modal-expertise" }
  | { type: "is-open-modal-skills" };

export type PortafolioState = {
  isOpenOption: boolean;
  isOpenOptionProject: boolean;
  isOpenModalAbout: boolean;
  isOpenModalExpertise: boolean;
  isOpenModalSkills: boolean;
};

export const initialState: PortafolioState = {
  isOpenOption: false,
  isOpenOptionProject: false,
  isOpenModalAbout: false,
  isOpenModalExpertise: false,
  isOpenModalSkills: false,
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
  if (action.type === "is-open-modal-expertise") {
    return {
      ...state,
      isOpenModalExpertise: !state.isOpenModalExpertise,
    };
  }
  if (action.type === "is-open-modal-skills") {
    return {
      ...state,
      isOpenModalSkills: !state.isOpenModalSkills,
    };
  }

  return state;
};
