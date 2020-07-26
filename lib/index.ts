/**
 * Delay the function call by the specified timeout length.
 * @param func
 * @param timeout
 * @param args
 */
export const asyncFunctionDelay = async (
  func: any,
  timeout: number,
  ...args: any
) => {
  // Wrap the timeout and function call in a Promise.
  try {
    await new Promise((resolve: TimerHandler) => setTimeout(resolve, timeout));
    // Call the valid function with the supplied arguments.
    if (func && typeof func === "function") {
      return func(...args);
    }
  } catch (error) {
    throw new Error(error);
  }
};
