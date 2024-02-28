import { ACTION_TEST } from "../_const";
import { State, DispatchArgs } from "../providers/initialState";

const reducer = (state: State, action: DispatchArgs) => {
  let newState: State = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ACTION_TEST:
      switch (action.payload.screen) {
        case "home":
          newState.home++;
          break;
        case "test":
          newState.test++;
          break;
        default:
          break;
      }
      return newState;
    default:
      return state;
  }
};

export default reducer;
