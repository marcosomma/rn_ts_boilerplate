import { DispatchArgs } from "../providers/initialState";

/**
 * Dispatches an event and logs it if the environment variable REACT_APP_DISPATCH_LOGGED is set.
 * @param dispatch - The dispatch function from React's useReducer hook.
 * @param args - An object containing the type and payload of the event to be dispatched.
 */
export const dispatchAndLogEvent = (dispatch: React.Dispatch<DispatchArgs>, { type, payload }:DispatchArgs) => {
  if (process.env.REACT_APP_DISPATCH_LOGGED) console.log("DISPATCH", { type, payload });
  dispatch({ type, payload });
};

/**
 * Logs a message to the console based on the provided type.
 * @param type - The type of log message (error, warn, or default).
 * @param message - The message to be logged.
 */
export const logger = (type: string, message: string) => {
  if (process.env.REACT_APP_DISPATCH_LOGGED) {
    switch (type) {
      case "error":
        console.error("_logger >", message);
        break;
      case "warn":
        console.warn("_logger >", message);
        break;
      default:
        console.log("_logger >", message);
        break;
    }
  }
};
