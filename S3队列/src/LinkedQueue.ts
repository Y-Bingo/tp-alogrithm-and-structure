import { IQueue, INode } from "./Interface";


export default class LinkedQueue<E> implements IQueue<E> {

    private _head: Node<E>;
    private _taile: Node<E>;
    private _size: number;

    constructor ()
    {
        this._head = this._taile = null;
        this._size = 0;
    }

    get size ()
    {
        return this._size;
    }

    get isEmpty ()
    {
        return this._size === 0;
    }

    enqueue ( ele: E ): void
    {
        if ( this._taile === null ) {
            this._taile = new Node( ele );
            this._head = this._taile;
        }
        else {
            this._taile.next = new Node( ele );
            this._taile = this._taile.next;
        }
        this._size++;
    }

    getFront (): E
    {
        return this._head.e;
    }

    dequeue (): E
    {
        if ( this.isEmpty ) return null;
        let resNode = this._head;
        this._head = this._head.next;
        if ( this._head === null )
            this._taile = this._head;
        this._size--;
        return resNode.e;
    }

    toString (): string
    {
        let curNode: Node<E> = this._head;
        let resutl = "LinkedQueue:  front ";
        while ( curNode ) {
            resutl += curNode.e + "  -> ";
            curNode = curNode.next;
        }
        resutl += "Null tail";
        return resutl;
    }

}

class Node<E> implements INode<E> {
    e: E;
    next: Node<E>;

    constructor ( e: E, next: Node<E> = null )
    {
        this.e = e;
        this.next = next;
    }

    toString (): string
    {
        return this.e.toString();
    }
}
