/** 皮肤选择的持久化键；宿主换成自己的键即可与别的应用隔离 */
export declare const SHELL_SKIN_STORAGE_KEY = "hel-shell-skin";
export interface ShellSkinStorageOptions {
    storageKey?: string;
}
export declare function readStoredSkinKey(storageKey?: string): string;
export declare function writeStoredSkinKey(key: string, storageKey?: string): void;
/**
 * 从皮肤表里挑出这次该用的一项：持久化值命中优先，其次 initialKey，最后第一项。
 *
 * 宿主的入口可以直接调它，从而**只加载选中的那一套**皮肤——
 * 这是避免多套皮肤 CSS 同存互相污染的关键（而不是先全加载再切）。
 */
export declare function pickSkinEntry<T extends {
    key: string;
}>(entries: readonly T[], options?: {
    storageKey?: string;
    initialKey?: string;
}): T | undefined;
export interface ShellSkinEntry {
    /** 稳定的皮肤标识，宿主用它记录当前选择 */
    key: string;
    /** 展示名 */
    label: string;
    /** 远程包名，同 lib.shellUi.ShellLayout 所在包 */
    lib: string;
    /** 远程入口（hel-meta.json 或包地址），缺省视为未配置 */
    host?: string;
    /**
     * 皮肤自带完整 header（含搜索/主题/语言/锁屏/用户菜单，比如 vben 那套）。
     * 为真时 ShellHost 不下发工具条、也不接管主题与外观偏好，避免两套 header 打架。
     */
    hasOwnHeader?: boolean;
}
export interface ShellSkinBundle {
    key: string;
    label: string;
    lib: string;
    ShellLayout: unknown;
    ShellTabs?: unknown;
    hasOwnHeader: boolean;
}
export type ShellSkinLoader = (entry: ShellSkinEntry) => Promise<unknown>;
interface RegistryOptions {
    entries: readonly ShellSkinEntry[];
    loader: ShellSkinLoader;
    onError?: (error: Error, key: string) => void;
    /** 换肤后写哪个 localStorage 键；传空串则不持久化 */
    storageKey?: string;
    /** 换肤后是否立刻写持久化（默认写） */
    persist?: boolean;
}
export declare function createShellSkinRegistry({ entries, loader, onError, storageKey, persist, }: RegistryOptions): {
    entries: readonly ShellSkinEntry[];
    current: import("vue").ShallowRef<ShellSkinBundle | null, ShellSkinBundle | null>;
    loading: import("vue").Ref<boolean, boolean>;
    error: import("vue").Ref<string, string>;
    load: (key: string) => Promise<ShellSkinBundle>;
    switchTo: (key: string, options?: {
        persist?: boolean;
    }) => Promise<ShellSkinBundle | null>;
    start: (key?: string) => Promise<ShellSkinBundle | null>;
    cache: Map<string, ShellSkinBundle>;
    storageKey: string;
};
export type ShellSkinRegistry = ReturnType<typeof createShellSkinRegistry>;
export {};
