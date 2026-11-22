/**
 * 壳层右上角工具条：能力内核。
 *
 * 皮肤只能画按钮，不能自己决定「刷新页签怎么刷、主题怎么切」——那些是宿主或浏览器的事。
 * 所以把能力收成一份 `ShellToolActions`，由宿主任意子集注入；
 * 这里负责：按注入结果算出该显示哪些按钮（`items`）、点击时路由到对应实现（`run`）。
 *
 * 内置默认实现只有两个，它们不依赖宿主：
 *   - theme：切 `documentElement.dark`（vben / Element Plus / shadcn 都用这个 class 驱动）
 *   - fullscreen：浏览器 Fullscreen API
 * refresh / search / locale / logout 必须宿主注入，没注入就不显示，避免点出假按钮。
 */
import { type ComputedRef } from 'vue';
import type { ShellToolItem } from './types';
export type ShellToolKey = 'refresh' | 'search' | 'settings' | 'theme' | 'locale' | 'fullscreen' | 'lock' | 'logout' | (string & {});
export interface ShellToolActions {
    /** 刷新当前页签（宿主接 adapter.dispatch({ type: 'tab:refresh' })） */
    refresh?: () => unknown;
    /** 打开全局搜索 */
    search?: () => unknown;
    /** 打开设置面板；ShellHost 有内置实现，单独用工具栏时才需要注入 */
    settings?: () => unknown;
    /** 切换主题；不注入则用内置实现 */
    theme?: () => unknown;
    /** 切换语言 */
    locale?: () => unknown;
    /** 全屏；不注入则用内置实现 */
    fullscreen?: () => unknown;
    /** 锁定屏幕（要密码校验，只能宿主实现） */
    lock?: () => unknown;
    /** 退出登录 */
    logout?: () => unknown;
}
export interface ShellToolbarOptions {
    actions?: ShellToolActions;
    /** 只显示这些 key；缺省按 DEFAULT_TOOL_ORDER 全量尝试 */
    keys?: readonly string[];
    /** 自定义 label */
    labels?: Readonly<Record<string, string>>;
    /** 是否已经有暗色主题（用于 theme 按钮的 active 态）；缺省读 documentElement */
    isDark?: () => boolean;
    /** 主题切换后的回调（宿主想同步自己的偏好时用） */
    onThemeChange?: (dark: boolean) => void;
    /** 设置面板的打开动作；ShellHost 会传，给了齿轮才出现 */
    onSettings?: () => void;
}
/** 从左到右的默认顺序，对齐 vben header 右侧那一排 */
export declare const DEFAULT_TOOL_ORDER: readonly string[];
export declare const THEME_STORAGE_KEY = "shell-toolbar-theme";
/**
 * 内置主题实现：
 * 既切 DOM 上的 `.dark`（vben / Element Plus / shadcn 的样式都挂在这个 class 上），
 * 也顺手把 vben 的偏好桥同步一次（宿主用 libs-vben 时两者必须一致，否则刷新后回弹）。
 */
export declare function toggleBuiltinTheme(): boolean;
export declare function toggleBuiltinFullscreen(): void;
export interface ShellToolbar {
    items: ComputedRef<ShellToolItem[]>;
    dark: ComputedRef<boolean>;
    run: (key: string) => Promise<void>;
    has: (key: string) => boolean;
}
export declare function createShellToolbar(options?: ShellToolbarOptions): ShellToolbar;
