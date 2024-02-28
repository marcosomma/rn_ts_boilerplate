import example from "./example";
import { State } from "../providers/initialState";

type Action = {
  type: string;
  payload: any;
};

/**
 * Combines multiple reducers into a single reducer function.
 * @param reducers - An array of reducer functions.
 * @param state - The current state.
 * @param action - The action being dispatched.
 * @returns The new state after applying all the reducers.
 */
const combineReducers =
  (...reducers: any[]) =>
  (state: State, action: Action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state);

const reducers = combineReducers(
  example
);
export default reducers;
