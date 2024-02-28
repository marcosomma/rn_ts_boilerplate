import { ACTION_TEST } from "../_const";
import { State, DispatchArgs } from "../providers/initialState";
import { dispatchAndLogEvent } from "./_logger";
export interface ExampleActions {
  test: GenericFunction;
}
type GenericFunction = (params?: any) => void;

const actions = (dispatch: React.Dispatch<DispatchArgs>, state: State, props: any) => {
  const test = (args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: ACTION_TEST,
      payload: { ...args },
    });
  };

  return {
    test,
  };
};

export default actions;
