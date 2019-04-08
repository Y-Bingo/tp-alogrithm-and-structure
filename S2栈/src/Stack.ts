import { IStack } from "./Interface";
import MyArray from "./MyArray";

class Stack<E> implements IStack<E> {

    private _stacks: MyArray<E>;

    constructor ( capacity: number = 10 ) {
        this._stacks = new MyArray<E>( capacity );
    }

    get size () {
        return this._stacks.size;
    }

    get isEmpty () {
        return this._stacks.isEmpty;
    }

    get capacity () {
        return this._stacks.capacity;
    }

    push ( ele: E ): void {
        this._stacks.push( ele );
    }

    pop (): E {
        return this._stacks.pop();
    }

    peek (): E {
        return this._stacks.getIndex( this.size - 1 );
    }

    toString (): string {
        let result: string = " Stack: [";
        for ( let i = 0; i < this._stacks.size; i++ ) {
            result += this._stacks.getIndex( i );
            if ( i != this._stacks.size - 1 )
                result += ",";
        }
        result += "] top ";
        return result;
    }

}

export default Stack;
