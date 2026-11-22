import { type ShellSkinEntry, type ShellSkinLoader } from '../skin-registry';
import type { ShellCapabilities, ShellCloseScope, ShellMenuNode, ShellTab, ShellTabId } from '../types';
import { type ShellToolActions } from '../shell-toolbar';
type __VLS_Props = {
    /** 宿主投影的菜单树 */
    menus?: readonly ShellMenuNode[];
    /** 当前选中菜单 key（宿主从激活页签或路由推导） */
    activeKey?: string;
    /**
     * 宿主投影的页签（只读）。给了它就透传给皮肤，皮肤想自绘 tabbar 时读；
     * 不给则皮肤只能用 `#tabbar` 插槽。
     */
    tabs?: readonly ShellTab[];
    /** 当前激活页签 id */
    activeTabId?: ShellTabId;
    /** 皮肤可用的页签操作，缺省视为只支持「单关自身」 */
    capabilities?: ShellCapabilities;
    logoText?: string;
    logoSrc?: string;
    /** 皮肤表；host 缺省的项会直接判为未配置，不参与切换 */
    skins?: readonly ShellSkinEntry[];
    /** 怎么加载远程皮肤包，由宿主注入（libs-core 的 loadHelLib / hel-micro 的 preFetchLib） */
    loader?: ShellSkinLoader;
    /** 首屏皮肤，默认第一项 */
    initialKey?: string;
    /** 是否显示右下角切换按钮，默认显示 */
    switcher?: boolean;
    switchTitle?: string;
    loadingText?: string;
    /**
     * 右上角工具条：只给能力，不给外观。
     * refresh / search / locale / logout 不注入就不显示；theme / fullscreen 有内置实现。
     */
    toolActions?: ShellToolActions;
    /** 只显示这些 key，缺省按 DEFAULT_TOOL_ORDER */
    tools?: readonly string[];
    toolLabels?: Readonly<Record<string, string>>;
    /** 主题切换后的回调（宿主想同步自己的偏好时用） */
    onThemeChange?: (dark: boolean) => void;
    /** 皮肤选择的 localStorage 键，默认 hel-shell-skin */
    persistKey?: string;
    /**
     * 换肤是否用「写持久化 + 重载页面」落地，默认是。
     *
     * 重载的意义：入口可以按持久化值**只加载选中的那套皮肤**，
     * 多套皮肤的全局样式不会同时存在（热切换时它们会互相污染）。
     * 传 false 则退回运行时热切换，适合只在一套皮肤里换配色之类的场景。
     */
    reloadOnSwitch?: boolean;
    /** 是否提供齿轮（打开设置抽屉），默认提供 */
    settings?: boolean;
};
declare var __VLS_16: {}, __VLS_18: {};
type __VLS_Slots = {} & {
    tabbar?: (props: typeof __VLS_16) => any;
} & {
    content?: (props: typeof __VLS_18) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {
    registry: {
        entries: readonly ShellSkinEntry[];
        current: import("vue").ShallowRef<import("../skin-registry").ShellSkinBundle | null, import("../skin-registry").ShellSkinBundle | null>;
        loading: import("vue").Ref<boolean, boolean>;
        error: import("vue").Ref<string, string>;
        load: (key: string) => Promise<import("../skin-registry").ShellSkinBundle>;
        switchTo: (key: string, options?: {
            persist?: boolean;
        }) => Promise<import("../skin-registry").ShellSkinBundle | null>;
        start: (key?: string) => Promise<import("../skin-registry").ShellSkinBundle | null>;
        cache: Map<string, import("../skin-registry").ShellSkinBundle>;
        storageKey: string;
    };
    switchTo: (key: string, options?: {
        persist?: boolean;
    }) => Promise<import("../skin-registry").ShellSkinBundle | null>;
    settings: {
        state: import("vue").Ref<{
            themeMode: import("../shell-settings").ShellThemeMode;
            grayscale: boolean;
        }, import("../shell-settings").ShellSettingsState | {
            themeMode: import("../shell-settings").ShellThemeMode;
            grayscale: boolean;
        }>;
        dark: import("vue").ComputedRef<boolean>;
        setThemeMode: (mode: import("../shell-settings").ShellThemeMode) => void;
        setGrayscale: (on: boolean) => void;
        toggleTheme: () => boolean;
        reset: () => void;
        apply: () => void;
    } | null;
    openSettings: () => boolean;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "menu-select": (key: string) => any;
    "click-logo": () => any;
    "skin-change": (key: string) => any;
    "skin-error": (error: Error, key: string) => any;
    "tool-action": (key: string) => any;
    "tab-select": (id: string) => any;
    "tab-close": (id: string, scope?: ShellCloseScope | undefined) => any;
    "tab-refresh": (id: string) => any;
    "tab-pin": (id: string, pinned: boolean) => any;
    "tab-move": (id: string, anchorId: string, position?: "before" | "after" | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onMenu-select"?: ((key: string) => any) | undefined;
    "onClick-logo"?: (() => any) | undefined;
    "onSkin-change"?: ((key: string) => any) | undefined;
    "onSkin-error"?: ((error: Error, key: string) => any) | undefined;
    "onTool-action"?: ((key: string) => any) | undefined;
    "onTab-select"?: ((id: string) => any) | undefined;
    "onTab-close"?: ((id: string, scope?: ShellCloseScope | undefined) => any) | undefined;
    "onTab-refresh"?: ((id: string) => any) | undefined;
    "onTab-pin"?: ((id: string, pinned: boolean) => any) | undefined;
    "onTab-move"?: ((id: string, anchorId: string, position?: "before" | "after" | undefined) => any) | undefined;
}>, {
    skins: readonly ShellSkinEntry[];
    settings: boolean;
    menus: readonly ShellMenuNode[];
    activeKey: string;
    logoText: string;
    logoSrc: string;
    initialKey: string;
    switcher: boolean;
    switchTitle: string;
    loadingText: string;
    toolActions: ShellToolActions;
    tools: readonly string[];
    toolLabels: Readonly<Record<string, string>>;
    persistKey: string;
    reloadOnSwitch: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
