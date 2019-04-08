export interface ILinkedList<E> {
    /*************** 基础属性 ***************/
    size: number;                           // 大小
    isEmpty: boolean;                       // 是否为空
    dummyHead: INode<E>;                    // 虚拟头节点（统一链表的操作逻辑）
    /*************** 操作接口 ***************/
    // 增
    add ( index: number, ele: E ): void;    // 指定位置添加节点
    addFirst ( ele: E ): void;              // 在头部添加节点
    addLast ( ele: E ): void;               // 在尾部添加节点
    // 删
    remove ( index: number ): E;            // 移除节点
    removeFirst (): E;                      // 移除首个节点
    removeLast (): E;                       // 移除末尾节点
    // 查
    get ( index: number ): E;               // 获取具体索引位置的节点数据
    getFirst (): E;                         // 获取头部的数据
    getLast (): E;                          // 获取尾部
    contains?( ele: E ): boolean            // 是否包含某个节点
    // 改
    set?( index: number, ele: E ): void     // 修改某个节点
}

export interface INode<E> {
    e: E;               // 当前元素
    next: INode<E>;     // 指向下一个节点
    pre?: INode<E>      // 指向上一个节点
}

export interface IStack<E> {
    /*************** 基础属性 ***************/
    capacity: number;      // 容量
    size: number;          // 栈容器当前大小
    isEmpty: boolean;      // 是否为空
    /*************** 操作接口 ***************/
    push ( ele: E ): void; // 入栈
    pop (): E;             // 出栈
    peek (): E;            // 查看栈顶
}
