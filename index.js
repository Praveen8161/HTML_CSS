const getTotalExecutionTime = function (n, logs) {
  const ans = new Array(n).fill(0); // Initialize an array to store exclusive times
  const stack = []; // Stack to track function execution

  for (const log of logs) {
    const [funcId, dir, timestamp] = log.split(":");

    if (dir === "start") {
      stack.push([timestamp, 0]); // Push start timestamp and initial time taken by others
    } else if (dir === "end") {
      const [startTime, timeTakenByOthers] = stack.pop();

      const funcRunTime = timestamp - startTime + 1; // Calculate function run time

      ans[funcId] += funcRunTime - timeTakenByOthers; // Update exclusive time for current function

      // If stack is not empty, update time taken by other functions (nested calls)
      if (stack.length) {
        stack[stack.length - 1][1] += funcRunTime;
        console.log(stack);
      }
    }
    // console.log(stack);
  }

  return ans;
};

// Example usage with provided input
const n = 2;
const logs = ["0:start:0", "1:start:3", "1:end:6", "0:end:10"];
const result = getTotalExecutionTime(n, logs);
console.log(result); // Output: [6, 4]
