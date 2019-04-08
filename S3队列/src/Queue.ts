import MyArray from "./MyArray";
import { IQueue } from "./Interface";

/**
 * 数组队列
 */
class ArrayQueue<E> implements IQueue<E> {

    private _queue: MyArray<E>

    constructor ( capacity: number = 10 ) {
        this._queue = new MyArray<E>( capacity );
    }

    get size () {
        return this._queue.size;
    }

    get isEmpty () {
        return this._queue.isEmpty;
    }

    get capacity () {
        return this._queue.capacity;
    }

    enqueue ( ele: E ): void {
        this._queue.push( ele );
    }

    dequeue (): E {
        return this._queue.shift();
    }

    getFront () {
        return this._queue.getIndex( 0 );
    }

    toString () {
        let str = "Queue: front [ ";
        for ( let i = 0; i < this._queue.size; i++ ) {
            str += this._queue.getIndex( i );
            if ( i !== this._queue.size - 1 )
                str += ",";
        }
        str += " ] tail ";
        return str;
    }

}

export default ArrayQueue;
