import { IQueue } from "./Interface";

// 循环队列
class LoopQueue<E> implements IQueue<E> {

    private _queue: E[];
    private _size: number;
    private _front: number;
    private _tail: number;


    constructor ( capacity: number = 10 ) {
        this._queue = new Array<E>( capacity + 1 );
        this._size = 0;
        this._front = 0;
        this._tail = 0;
    }
    // 队列的当前大小
    get size () {
        return this._size;
    }
    // 是否为空
    get isEmpty () {
        return this._tail === this._front;
    }
    // 获取队列的容量
    get capacity () {
        return this._queue.length - 1;
    }
    // 获取队列是否为满
    get isFull () {
        return ( this._tail + 1 ) % this._queue.length === this._front
    }

    // 出队
    dequeue (): E {
        if ( this.isEmpty ) {
            console.warn( "The Queue is Empty. Can't dequeue!!" );
            return;
        }
        let front = this._queue[ this._front ];
        this._front = ( this._front + 1 ) % this._queue.length;
        this._size--;
        return front;
    }
    // 入队
    enqueue ( ele: E ): void {
        if ( this.isFull ) {
            console.warn( "The Queue is Full. Can't enqueue!!" );
            return;
        }
        this._queue[ this._tail ] = ele;
        this._tail = ( this._tail + 1 ) % this._queue.length;
        this._size++;
    }
    // 获取队首
    getFront (): E {
        return this._queue[ this._front ];
    }

    toString () {
        let str = `LoopQueue size: ${ this.size }  capacity: ${ this.capacity }\n front: ${ this._front } tail: ${ this._tail } \n VData: [`;
        for ( let i = 0; i < this._size; i++ ) {
            let ele = this._queue[ ( this._front + i ) % this._queue.length ];
            str += ele;
            if ( ( this._front + i ) % this._queue.length !== this._tail )
                str += ",";
        }
        str += `] \n`;
        str += ` LData: [ ${ this._queue.join( "," ) } ]`;
        return str;
    }
}

export default LoopQueue;
