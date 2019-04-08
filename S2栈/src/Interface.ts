export interface IStack<E> {
    capacity: number;      // 容量
    size: number;          // 栈容器当前大小
    isEmpty: boolean;      // 是否为空

    push ( ele: E ): void; // 入栈
    pop (): E;             // 出栈
    peek (): E;            // 查看栈顶
}
