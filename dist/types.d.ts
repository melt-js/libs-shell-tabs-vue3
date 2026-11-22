import type { Component, ComputedRef } from "vue";
/**
 * 外部布局接管页签时的公共契约（引擎中立）。
 *
 * 只描述「只读快照 + 操作意图」，不暴露 qiankun/wujie 的 manager 实例或各家
 * store：皮肤（Vben / Art / Pure / Fan / 自定义 tabbar）读 snapshot 渲染，
 * 需要改状态时 dispatch 意图，由适配器经 ShellManagerPort 落到引擎 manager。
 */
/** 宿主投影给皮肤的菜单节点；key 与 ShellMenuKey 同源 */
export interface ShellMenuNode {
    key: string;
    title: string;
    icon?: string;
    badge?: string;
    /** 菜单项自带 query（如 /about?id=1）；有 router 的皮肤用它还原完整地址 */
    query?: Readonly<Record<string, string>>;
    children?: readonly ShellMenuNode[];
}
export interface ShellLayoutProps {
    /** 完整菜单树，皮肤只负责渲染 */
    menus?: readonly ShellMenuNode[];
    /** 当前选中菜单 key（宿主从激活页签推导） */
    activeKey?: string;
    logoText?: string;
    logoSrc?: string;
    /**
     * 右上角工具条。宿主（或 ShellHost 内置的 createShellToolbar）算出「显示哪些按钮」，
     * 皮肤只负责用自己的视觉画出来；带 router 自带 header 的皮肤（vben）可以直接忽略。
     */
    toolbar?: readonly ShellToolItem[];
    /**
     * 宿主投影的页签（只读）。皮肤想用自己的 tabbar 实现（如 fan 真壳的 Tabbar +
     * tabbarStore 形状）就读它自己画；不吃这个字段的皮肤继续用 `#tabbar` 插槽。
     *
     * 用数据而不是插槽的原因：fan / art 这类真壳的 tabbar 是内置组件，靠 store 驱动，
     * 没法被插槽替换；给它数据让它自己的组件渲染，观感与行为才和原生一致。
     */
    tabs?: readonly ShellTab[];
    /** 当前激活页签 id；`tabs` 里也带 active 标记，这里给个直接值省得皮肤再找一遍 */
    activeTabId?: ShellTabId;
    /** 皮肤能提供哪些页签操作（关闭范围 / 刷新 / 固定 / 拖动）；缺项请隐藏或禁用 */
    capabilities?: ShellCapabilities;
}
/** 工具条上的一个按钮；能力缺失的项宿主不会下传，皮肤不用自己判断可见性 */
export interface ShellToolItem {
    /** refresh / search / theme / locale / fullscreen / logout 或宿主自定义 key */
    key: string;
    /** tooltip 与 aria-label */
    label: string;
    /** 开关型能力的当前状态（如暗色主题已开启） */
    active?: boolean;
    disabled?: boolean;
}
/**
 * 布局对外的交互口。
 * 自有 router 的皮肤（vben）可以直接忽略 menu-select，由路由驱动高亮；
 * 没有 router 的皮肤（pure/art/fan 的静态壳）必须发它，宿主再交给 openPath。
 */
export interface ShellLayoutEmits {
    "menu-select": [key: string];
    "click-logo": [];
    /** 右上角工具条被点击，key 即 ShellToolItem.key */
    "tool-action": [key: string];
    /** 皮肤自绘 tabbar 时：点了某个页签 */
    "tab-select": [id: ShellTabId];
    /** 皮肤自绘 tabbar 时：点了关闭；不给 scope 即单关自身 */
    "tab-close": [id: ShellTabId, scope?: ShellCloseScope];
    /** 皮肤自绘 tabbar 时：点了刷新 */
    "tab-refresh": [id: ShellTabId];
    /** 皮肤自绘 tabbar 时：切换固定状态 */
    "tab-pin": [id: ShellTabId, pinned: boolean];
    /** 皮肤自绘 tabbar 时：拖动换位 */
    "tab-move": [id: ShellTabId, anchorId: ShellTabId, position?: "before" | "after"];
}
/** 皮肤包必须导出的两件套；Tabs 缺省时宿主退回 src/components/ShellTabBar.vue */
export interface ShellSkin {
    ShellLayout: Component;
    ShellTabs?: Component;
}
/**
 * 皮肤内部 runtime 工厂的**统一入参**（接入协议的核心）。
 *
 * 为什么不是直接把 ShellLayoutProps 交给工厂：props 是 Vue 的响应式对象，
 * 而各套 admin 的 store 需要的是「读取即取当前值」的 getter，还要能 watch 到变化。
 * 这里一律用函数，皮肤侧用 computed / watch(() => host.x()) 直接包，
 * 不需要去理解对方的响应式实现，也不需要 import vue。
 *
 * `createShellRuntimeHost(props, emit)`（见 references 的参考实现）负责把
 * 宿主投影的 props + 皮肤 emit 翻成这个形状；四套皮肤因此共用同一份壳入口协议。
 */
export interface ShellRuntimeHost {
    menus: () => readonly ShellMenuNode[];
    activeKey: () => ShellMenuKey | "";
    tabs: () => readonly ShellTab[];
    activeTabId: () => ShellTabId | undefined;
    /** 顶栏 / 侧栏标题，等价于 props.logoText */
    title: () => string;
    logoSrc: () => string;
    toolbar: () => readonly ShellToolItem[];
    capabilities: () => ShellCapabilities;
    onMenu: (key: ShellMenuKey) => void;
    onTabSelect: (id: ShellTabId) => void;
    onTabClose: (id: ShellTabId, scope?: ShellCloseScope) => void;
    onTabRefresh: (id: ShellTabId) => void;
    onTabPin: (id: ShellTabId, pinned: boolean) => void;
    /** 可选：皮肤不支持拖动换位时可以不调 */
    onTabMove?: (id: ShellTabId, anchorId: ShellTabId, position?: "before" | "after") => void;
    onToolAction?: (key: string) => void;
    onLogoClick?: () => void;
}
export type ShellTabId = string;
export type ShellMenuKey = string;
/** 微应用页签目标：身份是 appName + path，query 走旁路 */
export interface ShellMicroTarget {
    kind: "micro";
    appName: string;
    /** 路径身份，不含 query */
    path: string;
    /** 含 query 的完整路径 */
    fullPath: string;
    /** 打开页签时的显示名 */
    title?: string;
}
/** 宿主本地页签目标 */
export interface ShellLocalTarget {
    kind: "local";
    viewUrl: string;
    fullPath?: string;
    title?: string;
    /**
     * 宿主需要透传进引擎 manager 的额外视图参数（menuId / query /
     * _viewNoCache 等）。必须与宿主原生菜单打开页签时的 viewProps 同源，
     * 否则同一页面从不同皮肤打开会算出不同去重键，拆成两个页签。
     */
    viewProps?: Record<string, unknown>;
}
/** 链接 / 跨域 iframe 页签目标 */
export interface ShellExternalTarget {
    kind: "external";
    viewUrl: string;
}
export type ShellTabTarget = ShellMicroTarget | ShellLocalTarget | ShellExternalTarget;
/** 投影给皮肤的只读页签 */
export interface ShellTab {
    /** 引擎 manager 的不透明 id，不能从路径推导 */
    id: ShellTabId;
    title: string;
    icon?: string;
    target: ShellTabTarget;
    /** 微应用应用名，宿主菜单高亮可直接用 */
    appName?: string;
    /** 宿主菜单 id（viewProps.menuId） */
    menuId?: string;
    pinned: boolean;
    closable: boolean;
    draggable: boolean;
    /** 首页固定页签 */
    first: boolean;
    active: boolean;
    cache: "keep" | "none";
}
export interface ShellSnapshot {
    tabs: readonly ShellTab[];
    activeId?: ShellTabId;
    /** 当前激活页签对应的菜单 key */
    selectedMenuKey?: ShellMenuKey;
    /** 选中菜单的祖先链（含自身），用于展开父级 */
    activeMenuPath: readonly ShellMenuKey[];
}
/** 关闭范围；self 单关，其余按点击时的 tabId 为锚计算 */
export type ShellCloseScope = "self" | "others" | "left" | "right" | "all";
export type ShellIntent = {
    type: "menu:select";
    key: ShellMenuKey;
} | {
    type: "tab:activate";
    id: ShellTabId;
} | {
    type: "tab:close";
    id?: ShellTabId;
    scope?: ShellCloseScope;
} | {
    type: "tab:refresh";
    id?: ShellTabId;
} | {
    type: "tab:pin";
    id: ShellTabId;
    pinned: boolean;
} | {
    type: "tab:move";
    id: ShellTabId;
    anchorId: ShellTabId;
    position?: "before" | "after";
};
export type ShellIntentSource = "menu" | "tabbar" | "shortcut" | "router" | "api";
export type ShellResult = {
    status: "applied";
    activeId?: ShellTabId;
    closedIds?: readonly ShellTabId[];
} | {
    status: "noop";
    activeId?: ShellTabId;
} | {
    status: "blocked";
    reason: "policy" | "guard" | "not-closable" | "cannot-move";
} | {
    status: "delegate";
} | {
    status: "unsupported";
} | {
    status: "not-found";
} | {
    status: "failed";
    error: unknown;
};
/** 皮肤能提供哪些操作；缺失项在 UI 里隐藏或禁用 */
export interface ShellCapabilities {
    /** 单关自身始终允许；这里列批量关闭范围 */
    closeScopes?: readonly Exclude<ShellCloseScope, "self">[];
    /** 刷新（一期只允许当前页签） */
    refresh?: boolean;
    pin?: boolean;
    move?: boolean;
}
/** 菜单解析结果：可打开的目标、交给宿主原生行为、或未匹配 */
export type ShellMenuResolution = ShellMicroTarget | ShellLocalTarget | "native" | undefined;
export interface ShellMenuOptions {
    /** 菜单 key -> 页签目标 */
    resolve?: (key: ShellMenuKey) => ShellMenuResolution;
    /** 页签 -> 菜单 key；默认微应用用 appName::path，本地用 menuId ?? viewUrl */
    keyOfTab?: (tab: ShellTab) => ShellMenuKey | undefined;
    /** 菜单 key -> 祖先链（含自身）；默认 [key] */
    pathOf?: (key: ShellMenuKey) => readonly ShellMenuKey[];
}
/** 微应用页签打开器，通常直接传引擎的 micro tab controller */
export interface ShellMicroOpener {
    open(input: {
        appName: string;
        path?: string;
        fullPath?: string;
        title?: string;
    }): Promise<string>;
    /** 读取含 query 的完整路径；不传时用 target.fullPath */
    getFullPath?(appName: string, path: string): string;
}
/** 引擎 manager 投影后的响应式状态 */
export interface ShellManagerState {
    tabs: readonly ShellTab[];
    activeId?: ShellTabId;
}
/**
 * 引擎端口：各引擎（qiankun / wujie）写一个薄绑定实现这个接口，
 * 中立适配器只依赖它，不 import 任何引擎包。
 */
export interface ShellManagerPort {
    /** 引擎响应式状态，tab 已投影成契约 ShellTab */
    readonly state: ComputedRef<ShellManagerState>;
    /** 契约 id 是否存在 */
    has(id: ShellTabId): boolean;
    /** 打开宿主本地页签，返回引擎生成的不透明 id */
    openLocal(input: {
        viewUrl: string;
        viewProps?: Record<string, unknown>;
    }): Promise<ShellTabId>;
    activate(id: ShellTabId): Promise<unknown>;
    close(id?: ShellTabId): Promise<unknown>;
    closeLeft(id?: ShellTabId): Promise<unknown>;
    closeRight(id?: ShellTabId): Promise<unknown>;
    closeOthers(id?: ShellTabId): Promise<unknown>;
    closeAll(): Promise<unknown>;
    refresh(id?: ShellTabId): Promise<unknown>;
    setPinned(id: ShellTabId, pinned: boolean): Promise<unknown>;
    canMove(id: ShellTabId, anchorId: ShellTabId, position: "before" | "after"): boolean;
    move(id: ShellTabId, anchorId: ShellTabId, position: "before" | "after"): Promise<boolean> | boolean;
}
export interface ShellAdapterOptions {
    manager: ShellManagerPort;
    /** 缺省时 micro 目标返回 unsupported */
    controller?: ShellMicroOpener;
    menu?: ShellMenuOptions;
    capabilities?: ShellCapabilities;
    /** 入口策略预检：返回 false 拒绝 */
    beforeIntent?: (intent: ShellIntent, snapshot: ShellSnapshot) => boolean | void | Promise<boolean | void>;
    /** 提交后观察，不能否决已提交状态 */
    afterIntent?: (intent: ShellIntent, result: ShellResult, source: ShellIntentSource) => void;
    onError?: (error: unknown, intent: ShellIntent) => void;
}
export interface ShellAdapter {
    readonly snapshot: ComputedRef<ShellSnapshot>;
    dispatch(intent: ShellIntent, source?: ShellIntentSource): Promise<ShellResult>;
    can(intent: ShellIntent): boolean;
    dispose(): void;
}
