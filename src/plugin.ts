import { definePlugin } from "emdash";

import type { AdminJapanesePluginOptions } from "./index";

export function createPlugin(options: AdminJapanesePluginOptions = {}) {
  return definePlugin({
    id: "admin-ja",
    version: "0.1.0",
    routes: {
      status: {
        handler: async () => ({
          enabled: options.enabled !== false,
          locale: "ja",
        }),
      },
    },
  });
}

export default createPlugin;
