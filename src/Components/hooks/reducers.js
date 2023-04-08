const darkMode = {
  bgColor: "bg-black",
  textColor: "text-white",
};

const lightMode = {
  bgColor: "bg-white",
  textColor: "text-black",
};

export const GlobalState = {
  colors: darkMode,
};

export const Reducers = (state,action) => {
    switch (action.type) {
        case "SWITCH_COLOR_MODE":
            return { ...state, colors:action.payload? darkMode:lightMode }
    
        default:
            return state;
    }
}