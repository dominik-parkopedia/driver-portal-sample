import { SSTConfig } from "sst";
import { Default } from "./stacks/Default";

export default {
  config(_input) {
    return {
      name: "driver-portal",
      region: "eu-central-1",
      profile: "pse-interviewing",
    };
  },
  stacks(app) {
    app.stack(Default);
  },
} satisfies SSTConfig;
