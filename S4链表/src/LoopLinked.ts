import { ILinkedList, INode } from './Interface';

/**
 * 节点
 */
class Node<E> implements INode<E> {

    e: E;
    pre: Node<E>;
    next: Node<E>;

    constructor ( e: E, pre: Node<E> = null, next: Node<E> = null ) {
        this.e = e;
        this.next = next;
        this.pre = pre;
        if ( pre !== null )
            pre.next = this;
        if ( next !== null )
            next.pre = this;
    }

    toString (): string {
        return this.e.toString();
    }
}


/**
 * 双向循环链表
 */
export default class LoopLinked<E> implements ILinkedList<E> {

    dummyHead: Node<E>;
    private _size: number;

    constructor () {
        this._size = 0;
        this.dummyHead = new Node( null );
        this.dummyHead.pre = this.dummyHead;
        this.dummyHead.next = this.dummyHead;
    }

    get size () {
        return this._size;
    }

    get isEmpty () {
        return this._size === 0;
    }

    // 指定位置添加节点
    add ( index: number, ele: E ): void {
        if ( index < 0 || index > this.size )
            throw new Error( `Add Faile. 0 <= index <= ${ this._size }` );
        let cur = this.dummyHead;
        for ( let i = 0; i < index; i++ ) {
            cur = cur.next;
        }
        let newNode = new Node( ele, cur, cur.next );
        this._size++;
        // cur.next.pre = newNode;
        // cur.next = newNode;
    }
    // 在头部添加节点
    addFirst ( ele: E ): void {
        this.add( 0, ele );
        return;
    }
    // 在尾部添加节点
    addLast ( ele: E ): void {
        this.add( this.size, ele );
        return;
    }
    // 获取具体索引位置的节点数据
    get ( index: number ): E {
        if ( index < 0 || index > this._size )
            throw new Error( `Get failed. Illegal index. index > 0 && index < ${ this._size }` );
        let cur = this.dummyHead.next;
        for ( let i = 0; i < index; i++ ) {
            cur = cur.next;
        }
        return cur.e;
    }
    // 获取头部的数据
    getFirst (): E {
        return this.get( 0 );
    }
    // 获取尾部
    getLast (): E {
        return this.get( this._size - 1 );
    }
    // 移除
    remove ( index: number ): E {
        if ( index < 0 || index > this.size )
            throw new Error( `Add Fail. 0 <= ${ index } <= ${ this._size }` );
        let cur = this.dummyHead;
        for ( let i = 0; i <= index; i++ ) {
            cur = cur.next;
        }
        cur.pre.next = cur.next;
        cur.next.pre = cur.pre;
        this._size--;
        return cur.e;
    }
    // 移除首个节点
    removeFirst (): E {
        return this.remove( 0 );
    }
    // 移除末尾节点
    removeLast (): E {
        return this.remove( this.size - 1 );
    }

    toString (): string {
        let str = "";
        let cur = this.dummyHead.next;
        while ( cur.e !== null ) {
            str += `${ cur.e } -> `;
            cur = cur.next;
        }
        str += "NUll";
        cur = cur.pre;
        while ( cur.e !== null ) {
            str += ` -> ${ cur.e }`;
            cur = cur.pre;
        }
        return str;
    }
}

