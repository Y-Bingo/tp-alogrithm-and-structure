import { IQueue, INode } from "./Interface";

/**
 * 链表队列
 */
export default class LinkedQueue<E> implements IQueue<E> {

    private _head: Node<E>;
    private _tail: Node<E>;
    private _size: number;

    constructor () {
        this._head = this._tail = null;
        this._size = 0;
    }

    get size () {
        return this._size;
    }

    get isEmpty () {
        return this._size === 0;
    }

    enqueue ( ele: E ): void {
        if ( this._tail === null ) {
            this._tail = new Node( ele );
            this._head = this._tail;
        }
        else {
            this._tail.next = new Node( ele );
            this._tail = this._tail.next;
        }
        this._size++;
    }

    getFront (): E {
        return this._head.e;
    }

    dequeue (): E {
        if ( this.isEmpty ) return null;
        let resNode = this._head;
        this._head = this._head.next;
        if ( this._head === null )
            this._tail = this._head;
        this._size--;
        return resNode.e;
    }

    toString (): string {
        let curNode: Node<E> = this._head;
        let result = "LinkedQueue:  front ";
        while ( curNode ) {
            result += curNode.e + "  -> ";
            curNode = curNode.next;
        }
        result += "Null tail";
        return result;
    }
}

class Node<E> implements INode<E> {
    e: E;
    next: Node<E>;

    constructor ( e: E, next: Node<E> = null ) {
        this.e = e;
        this.next = next;
    }

    toString (): string {
        return this.e.toString();
    }
}
