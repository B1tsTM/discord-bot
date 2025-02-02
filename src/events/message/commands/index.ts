import { Command } from "./types";
export { parse as parseArguments } from "./args";

import ping from "./dev/ping";
import dump from "./dev/dump";
import introduce from "./help/introduce";
import warn from "./moderation/warn";
import link from "./help/link";

const commands: { [k: string]: Command } = {
  ping,
  dump,
  introduce,
  warn,
  link,
};
export default commands;
