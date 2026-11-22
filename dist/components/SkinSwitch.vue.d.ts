import type { ShellSkinEntry } from '../skin-registry';
type __VLS_Props = {
    skins?: readonly ShellSkinEntry[];
    currentKey?: string;
    loading?: boolean;
    error?: string;
    title?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (key: string) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onChange?: ((key: string) => any) | undefined;
}>, {
    error: string;
    title: string;
    skins: readonly ShellSkinEntry[];
    currentKey: string;
    loading: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
