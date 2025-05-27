import projects from "../data/projects";
import type { Project } from "../types";

export type PortafolioActions =
  | { type: "is-open-option" }
  | { type: "is-open-option-project" }
  | { type: "is-open-modal-about" }
  | { type: "is-open-modal-expertise" }
  | { type: "is-open-modal-skills" }
  | { type: "show-project"; payload: { id: Project["id"] } }
  | { type: "hidden-project" };

export type PortafolioState = {
  isOpenOption: boolean;
  isOpenOptionProject: boolean;
  isOpenModalAbout: boolean;
  isOpenModalExpertise: boolean;
  isOpenModalSkills: boolean;
  projects: Project[];
  projectActive: Project;
  activeId: Project["id"];
};

export const initialState: PortafolioState = {
  isOpenOption: false,
  isOpenOptionProject: false,
  isOpenModalAbout: false,
  isOpenModalExpertise: false,
  isOpenModalSkills: false,
  projects: projects,
  projectActive: {
    id: 0,
    title: "",
    description: "",
    imageUrl: "",
    pageUrl: "",
    codeUrl: "",
  },
  activeId: 0,
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
  if (action.type === "show-project") {
    return {
      ...state,
      activeId: action.payload.id,
      projectActive: state.projects.filter(
        (project) => project.id === action.payload.id
      )[0],
    };
  }
  if (action.type === "hidden-project") {
    return {
      ...state,
      activeId: 0,
    };
  }

  return state;
};
