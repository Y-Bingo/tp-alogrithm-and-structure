export interface IQueue<E> {
    size: number;                   // 队列的当前大小
    isEmpty: boolean;               // 是否为空

    dequeue (): E;                  // 出队
    enqueue ( ele: E ): void;       // 入队
    getFront (): E;                 // 获取队首
}

export interface INode<E> {
    e: E;               // 当前元素
    next: INode<E>;     // 下一个元素
}
