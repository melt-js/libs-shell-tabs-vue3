import type { ShellToolItem } from '../types';
type __VLS_Props = {
    items?: readonly ShellToolItem[];
    /** 前景色调；浅底用 light，深底用 dark */
    tone?: 'light' | 'dark';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    run: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onRun?: ((key: string) => any) | undefined;
}>, {
    items: readonly ShellToolItem[];
    tone: "light" | "dark";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
