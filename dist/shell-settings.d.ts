export type ShellThemeMode = 'light' | 'dark' | 'system';
export interface ShellSettingsState {
    themeMode: ShellThemeMode;
    /** 色弱模式：整页灰度 */
    grayscale: boolean;
}
export declare const SHELL_SETTINGS_STORAGE_KEY = "hel-shell-settings";
export declare const GRAYSCALE_CLASS = "shell-grayscale";
export interface ShellSettingsOptions {
    storageKey?: string;
    /** 是否同步 vben 偏好桥，默认同步 */
    syncVben?: boolean;
    /**
     * 创建时是否立刻把状态打到 `<html>` 上，默认打。
     * 皮肤自带 header 的宿主传 false：那套外观归皮肤自己的偏好系统管，这里只在用户操作后生效。
     */
    autoApply?: boolean;
}
export declare function createShellSettings(options?: ShellSettingsOptions): {
    state: import("vue").Ref<{
        themeMode: ShellThemeMode;
        grayscale: boolean;
    }, ShellSettingsState | {
        themeMode: ShellThemeMode;
        grayscale: boolean;
    }>;
    dark: import("vue").ComputedRef<boolean>;
    setThemeMode: (mode: ShellThemeMode) => void;
    setGrayscale: (on: boolean) => void;
    toggleTheme: () => boolean;
    reset: () => void;
    apply: () => void;
};
/** 注意：组件也叫 ShellSettings（components/ShellSettings.vue），类型这里加 Api 后缀区分 */
export type ShellSettingsApi = ReturnType<typeof createShellSettings>;
