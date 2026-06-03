import { z } from "zod";
import { getServerConfig } from "../config.server";
const inputValidator = z.object({ name: z.string().min(1) });
async function getGreeting({ data }) {
  const parsedData = inputValidator.parse(data);
  const config = getServerConfig();
  return {
    greeting: `Hello, ${parsedData.name}!`,
    mode: config.nodeEnv ?? "unknown",
  };
}
export { getGreeting };
