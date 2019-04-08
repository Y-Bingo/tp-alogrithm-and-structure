import { ILinkedList, INode } from './Interface';

/**
 * 节点
 */
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


/**
 * 单链表
 */
export default class LinkedList<E> implements ILinkedList<E> {

    private _size: number;
    public dummyHead: Node<E>;
    constructor () {
        this._size = 0;
        this.dummyHead = new Node( null );
    }

    get size () {
        return this._size;
    }

    get isEmpty () {
        return this._size === 0;
    }

    // 在链表的index位置添加新的元素e
    // 在链表中不是一个常用的操作，练习用
    add ( index: number, ele: E ): void {
        if ( index < 0 || index > this._size )
            throw new Error( `Add failed. Illegal index. index > 0 && index < ${ this._size }` );
        let pre = this.dummyHead;
        for ( let i = 0; i < index; i++ ) {
            pre = pre.next;
        }
        let newNode = new Node<E>( ele );
        newNode.next = pre.next;
        pre.next = newNode;
        this._size++;
    }

    // 在链表的头部添加一个节点
    addFirst ( ele: E ): void {
        this.add( 0, ele );
    }

    // 在链表的尾部添加一个节点
    addLast ( ele: E ): void {
        this.add( this._size, ele );
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

    // 修改index节点上的数据
    set ( index: number, ele: E ): void {
        if ( index < 0 || index > this._size )
            throw new Error( `Set failed. Illegal index. index > 0 && index < ${ this._size }` );
        let cur = this.dummyHead.next;
        for ( let i = 0; i < index; i++ ) {
            cur = cur.next;
        }
        cur.e = ele;
    }

    contains ( ele: E ): boolean {
        let cur = this.dummyHead.next;
        while ( cur !== null ) {
            if ( cur.e === ele )
                return true;
            cur = cur.next;
        }
        return false;
    }

    // 移除
    remove ( index: number ): E {
        if ( index < 0 || index > this._size )
            throw new Error( `Remove failed. Illegal index. index > 0 && index < ${ this._size }` );
        let pre = this.dummyHead;
        for ( let i = 0; i < index; i++ ) {
            pre = pre.next;
        }
        let cur = pre.next;
        pre.next = cur.next;
        cur.next = null;
        this._size--;
        return cur.e;
    }

    // 移除首个节点
    removeFirst (): E {
        return this.remove( 0 );
    }

    // 移除末尾节点
    removeLast (): E {
        return this.remove( this._size - 1 );
    }

    toString (): string {
        let str = "";
        let cur = this.dummyHead.next;
        while ( cur !== null ) {
            str += `${ cur.e } -> `;
            cur = cur.next;
        }
        str += "NUll";
        return str;
    }
}

