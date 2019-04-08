/**
 * 数组接口
 */
export default interface IArray<E> {
    /*************** 基础属性 ***************/
    size: number;                           // 数组长度
    capacity: number;                       // 数组容量
    isEmpty: boolean;                       // 是否为空
    /*************** 操作接口 ***************/
    getData (): E[];                        // 获取数组数据
    // 增
    add ( index: number, ele: E ): void;    // 在指定的位置添加元素
    push ( ele: E );                        // 在数组尾部添加元素
    unshift ( ele: E ): void;               // 在数组头部添加元素
    // 删
    remove ( index: number ): E;            // 移除目标位置的元素
    pop (): E;                              // 移除数组尾部元素
    shift (): E;                            // 移除数组头部的元素
    removeEle ( ele: any ): E;              // 移除特定元素
    // 查
    getIndex ( index: number ): E;          // 根据索引获取指定位置的元素
    contians ( ele: E ): boolean;           // 是否包含了某个元素
    find ( ele: E ): number;                // 寻找某个元素在数组中的索引位置
    // 改
    set?( index: number, ele: E ): void;    // 修改目标索引位置上的元素
}
