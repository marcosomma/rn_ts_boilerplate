/**
 * Logs messages to the console based on the specified type.
 * @param type - The type of log message ("error", "warn", or any other type).
 * @param args - The arguments to be logged.
 */
export const logger = (type: string, ...args: any[]) => {
    switch (type) {
        case "error":
            console.error("_logger >", ...args);
            break;
        case "warn":
            console.warn("_logger >", ...args);
            break;
        default:
            console.log("_logger >", ...args);
            break;
    }
};
