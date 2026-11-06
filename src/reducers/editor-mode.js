const SET_AFTERCODE_MODE = 'scratch-gui/editor-mode/SET_AFTERCODE_MODE';
const TOGGLE_AFTERCODE_MODE = 'scratch-gui/editor-mode/TOGGLE_AFTERCODE_MODE';
const initialState = true;
const reducer = (state = initialState, action) => {
    if (action.type === SET_AFTERCODE_MODE) return action.enabled;
    if (action.type === TOGGLE_AFTERCODE_MODE) return !state;
    return state;
};
const setAftercodeMode = enabled => ({type: SET_AFTERCODE_MODE, enabled});
const toggleAftercodeMode = () => ({type: TOGGLE_AFTERCODE_MODE});
export {initialState as editorModeInitialState, setAftercodeMode, toggleAftercodeMode};
export default reducer;
