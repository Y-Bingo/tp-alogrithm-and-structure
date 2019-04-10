export interface IHeap<E> {
    /*************** 基础属性 ***************/
    size: number;               // 获取堆的大小
    isEmpty: boolean;           // 是否为空
    capacity?: number;           // 堆容量
    /*************** 操作接口 ***************/
    // 辅助方法
    _getLeft ( index: number ): number;         // 获取左孩子的索引
    _getRight ( index: number ): number;        // 获取右孩子的索引
    _getParent ( index: number ): number;       // 获取父亲节点索引
    // 调用方法
    push ( ele: E ): void;                  // 添加元素
    getTop (): E;                           // 查看顶部元素
    extraTop (): E;                         // 排出堆顶元素
    _shiftUP ( index: number ): void;       // 上浮 插入数据的时候使用
    _shiftDown ( index: number ): void;     // 下沉 取出数据的时候使用
    heapify ( arr: E[] ): void;             // 堆化
}
