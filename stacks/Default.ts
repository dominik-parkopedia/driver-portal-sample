import { StackContext, NextjsSite, Api, Config } from "sst/constructs";

export function Default({ stack }: StackContext) {
  const STRIPE_KEY = new Config.Secret(stack, "STRIPE_KEY");

  const site = new NextjsSite(stack, "site", {
    path: "packages/web",
  });

  const api = new Api(stack, "api", {
    defaults: {
      function: {
        bind: [STRIPE_KEY],
      },
    },
    routes: {
      "GET /drivers/{driverId}/get-customer-portal-url":
        "packages/functions/src/get-customer-portal-url.handler",
    },
  });

  stack.addOutputs({
    SiteUrl: site.url,
    APIUrl: api.url,
  });
}
