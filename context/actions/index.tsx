import { State, DispatchArgs } from "../providers/initialState";
import example, { ExampleActions } from "./example";
export interface ActionsCollections {
  example?: ExampleActions
}

/**
 * Creates a collection of actions.
 * @param dispatch - The dispatch function from the React context.
 * @param state - The current state of the context.
 * @param props - Additional props for the actions.
 * @returns An object containing the actions.
 */
const actionsCollection = (dispatch: React.Dispatch<DispatchArgs>, state: State, props: any) => {
  return {
    example: example(dispatch, state, props),
  };
};

export default actionsCollection;
