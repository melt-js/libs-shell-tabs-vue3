import type { ShellAdapter, ShellAdapterOptions } from "./types";
/**
 * 创建「外部布局接管页签」中立适配器。
 *
 * 皮肤只读 `snapshot`，只通过 `dispatch` 提交意图；所有落点都经
 * ShellManagerPort 收敛到引擎 manager，避免各布局自己维护一套页签状态。
 *
 * 用法见 `libs-shell-tabs-vue3/src/components/ShellTabBar.vue`
 * 与 `.agents/plans/micro-tabs-shell-adapter.md`。
 */
export declare function createShellAdapter(options: ShellAdapterOptions): ShellAdapter;
