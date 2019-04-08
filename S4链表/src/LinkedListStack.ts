import { IStack } from './Interface';
import LinkedList from './LinkedList';

/**
 * 基于链表实现的栈
 */
export default class LinkedListStack<E> implements IStack<E> {

    private _stack: LinkedList<E>;

    constructor () {
        this._stack = new LinkedList<E>();
    }

    get capacity () {
        return this._stack.size;
    }

    get size () {
        return this._stack.size;
    }

    get isEmpty () {
        return this.isEmpty;
    }

    push ( ele: E ): void {
        this._stack.addFirst( ele );
    }

    pop (): E {
        return this._stack.removeFirst();
    }

    peek (): E {
        return this._stack.getFirst();
    };

    toString (): string {
        return `Stack: top ${ this._stack.toString() } `;
    }

}
