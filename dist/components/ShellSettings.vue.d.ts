import type { ShellSkinEntry } from '../skin-registry';
import type { ShellThemeMode } from '../shell-settings';
type __VLS_Props = {
    open?: boolean;
    title?: string;
    skins?: readonly ShellSkinEntry[];
    currentKey?: string;
    themeMode?: ShellThemeMode;
    grayscale?: boolean;
    /** 皮肤自带 header 时传 false，隐藏外观分组 */
    showAppearance?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => any;
    grayscale: (on: boolean) => any;
    "select-skin": (key: string) => any;
    "theme-mode": (mode: ShellThemeMode) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onGrayscale?: ((on: boolean) => any) | undefined;
    "onSelect-skin"?: ((key: string) => any) | undefined;
    "onTheme-mode"?: ((mode: ShellThemeMode) => any) | undefined;
}>, {
    title: string;
    skins: readonly ShellSkinEntry[];
    currentKey: string;
    open: boolean;
    themeMode: ShellThemeMode;
    grayscale: boolean;
    showAppearance: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
