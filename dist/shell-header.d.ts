/**
 * 公共 header 的纯逻辑部分：面包屑推导。
 *
 * 为什么单独拆出来：fan 真壳有自己的 Header（走 store），vben 有内置 header，
 * 这两套不该被替换；pure / art 是「自绘壳」，顶栏由我们画，所以给它们一个公共件。
 * 但面包屑的算法不该绑在组件里——别处（比如页签右键菜单、文档标题）也可能要算，
 * 所以抽成不依赖 Vue 的纯函数。
 */
import type { ShellMenuNode } from './types';
export interface ShellBreadcrumbItem {
    /** 菜单 key，点击时原样发 menu-select */
    key: string;
    title: string;
    /** 非叶子节点：面包屑上点击它只是展开父级，不跳转 */
    group?: boolean;
}
/**
 * 在菜单树里找 activeKey，返回从根到自身的链。
 *
 * 匹配规则与宿主投影的 key 同源（`ShellMenuNode.key`），不做路径规整——
 * key 是宿主的身份，皮肤不能二次解释。
 * 找不到（activeKey 为空、或指向不存在的节点）返回空数组，由调用方决定兜底。
 */
export declare function resolveBreadcrumb(menus: readonly ShellMenuNode[] | undefined, activeKey: string | undefined): ShellBreadcrumbItem[];
