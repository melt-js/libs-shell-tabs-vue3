import type { ShellMenuNode, ShellToolItem } from '../types';
import { type ShellToolActions } from '../shell-toolbar';
type __VLS_Props = {
    /** 完整菜单树：只用于推导面包屑，不在这里渲染成菜单 */
    menus?: readonly ShellMenuNode[];
    /** 当前选中菜单 key */
    activeKey?: string;
    logoText?: string;
    logoSrc?: string;
    /** 面包屑兜底文案：菜单里找不到 activeKey 时显示它 */
    title?: string;
    /** 直接给工具条按钮（宿主已经算好可见性）；给了就忽略 toolbarActions */
    toolbar?: readonly ShellToolItem[];
    /** 不给 toolbar 时，用能力表算按钮：可见性由 createShellToolbar 决定 */
    toolbarActions?: ShellToolActions;
    /** 配合 toolbarActions：只显示这些 key */
    toolbarKeys?: readonly string[];
    /** 显示左侧折叠按钮（侧栏可折叠的皮肤用） */
    collapsible?: boolean;
    collapsed?: boolean;
    tone?: 'light' | 'dark';
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {}, __VLS_16: {};
type __VLS_Slots = {} & {
    logo?: (props: typeof __VLS_1) => any;
} & {
    breadcrumb?: (props: typeof __VLS_3) => any;
} & {
    center?: (props: typeof __VLS_5) => any;
} & {
    actions?: (props: typeof __VLS_7) => any;
} & {
    account?: (props: typeof __VLS_16) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "menu-select": (key: string) => any;
    "click-logo": () => any;
    "tool-action": (key: string) => any;
    "toggle-collapse": (collapsed: boolean) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onMenu-select"?: ((key: string) => any) | undefined;
    "onClick-logo"?: (() => any) | undefined;
    "onTool-action"?: ((key: string) => any) | undefined;
    "onToggle-collapse"?: ((collapsed: boolean) => any) | undefined;
}>, {
    title: string;
    menus: readonly ShellMenuNode[];
    activeKey: string;
    logoText: string;
    logoSrc: string;
    toolbar: readonly ShellToolItem[];
    tone: "light" | "dark";
    toolbarKeys: readonly string[];
    collapsible: boolean;
    collapsed: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
