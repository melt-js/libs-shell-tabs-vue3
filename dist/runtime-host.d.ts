import type { ShellLayoutEmits, ShellLayoutProps, ShellRuntimeHost } from "./types";
/**
 * 把「宿主投影的 props + 皮肤声明的 emit」翻成皮肤内部工厂用的统一入参。
 *
 * 这是接入协议的**唯一实现**，四套皮肤各自持有一份同内容的
 * `shell-ui/protocol.ts`（由 `scripts/sync-shell-protocol.mjs` 从本文件生成并校验），
 * 不直接在运行时 import 本包，原因见 references 的"为什么协议走生成而不是 import"：
 * `@melt-js/libs-shell-tabs-vue3` 不在皮肤包的 externals 里，值导入会被打进产物，
 * 变成第二份组件实例。
 *
 * 约定：
 * - 所有数据字段都是 getter，皮肤侧用 `computed` / `watch(() => host.x())` 直接包；
 * - 所有动作字段都是意图，未提供时由宿主（而不是皮肤）决定兜底；
 * - 这里不做任何判空或兜底业务，只做形状转换。
 */
export declare function createShellRuntimeHost(props: Readonly<ShellLayoutProps>, emit: <K extends keyof ShellLayoutEmits>(event: K, ...args: ShellLayoutEmits[K]) => void): ShellRuntimeHost;
