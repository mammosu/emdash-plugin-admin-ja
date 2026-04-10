import type { PluginDescriptor, ResolvedPlugin } from "emdash";

import { createPlugin } from "./plugin";

export interface AdminJapanesePluginOptions {
  enabled?: boolean;
}

export function adminJapanesePlugin(
  options: AdminJapanesePluginOptions = {},
): PluginDescriptor<AdminJapanesePluginOptions> {
  return {
    id: "admin-ja",
    version: "0.1.0",
    format: "native",
    entrypoint: "@mammosu/emdash-plugin-admin-ja",
    adminEntry: "@mammosu/emdash-plugin-admin-ja/admin",
    options,
  };
}

export { createPlugin };
export default function defaultCreatePlugin(options: AdminJapanesePluginOptions = {}): ResolvedPlugin {
  return createPlugin(options);
}
