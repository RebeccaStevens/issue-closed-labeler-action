import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  // const input_1 = core.getInput("input_1");

  core.debug("Test debug message.");

  // core.setOutput("output_1", value);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error instanceof Error ? error.message : String(error));
}
