import IArray from "./Interface";

/**
 * 动态数组的实现
 */
export default class MyArray<E> implements IArray<E> {

    private _data: E[];
    private _size: number;

    /**
     * 构造函数，传入数组的容量capacity构造Array
     * @param capacity 容量
     */
    constructor ( capacity: number = 10 ) {
        this._data = new Array<E>( capacity );
        this._size = 0;
    }
    // 获取数组数据
    getData (): E[] {
        return this._data;
    }
    // 获取索引
    getIndex ( index: number ): E {
        // 索引校验
        if ( index < 0 || index >= this._size )
            throw new Error( "Get index data faile. Require index >=0 && index < size" );

        return this._data[ index ];
    }
    // 获取数组的长度
    get size () {
        return this._size;
    }
    // 获取数组的容量
    get capacity () {
        return this._data.length;
    }
    // 是否为空
    get isEmpty () {
        return this._size === 0;
    }

    // 扩容数组
    private _resize ( capacity: number ) {
        let newArr = new Array<E>( capacity );
        for ( let i = 0; i < this._size; i++ ) {
            newArr[ i ] = this._data[ i ];
        }
        this._data = newArr;
    }

    // 指定位置添加元素
    add ( index: number, ele: E ): void {
        // 是否需要扩容
        if ( this._size === this._data.length )
            this._resize( this._size * 2 );

        // 索引校验
        if ( index < 0 || index > this._size )
            throw new Error( "push failed. Require index >=0 && index <= size " );

        // 添加元素
        for ( let i = this._size - 1; i >= index; i-- ) {
            this._data[ i + 1 ] = this._data[ i ];
        }

        // 维护属性
        this._data[ index ] = ele;
        this._size++;
    }

    // 尾部添加
    push ( ele: E ): void {
        this.add( this._size, ele );
    }

    // 头部添加
    unshift ( ele: E ): void {
        this.add( 0, ele );
    }
    // 是否包含某个元素
    contians ( ele: E ): boolean {
        for ( let i = 0; i < this._size; i++ ) {
            if ( this._data[ i ] === ele )
                return true;
        }
        return false;
    }
    // 寻找某个元素在数组中的位置
    find ( ele: E ): number {
        for ( let i = 0; i < this._size; i++ ) {
            if ( this._data[ i ] === ele )
                return i;
        }
        return -1;
    }
    // 移除特定位置的元素
    remove ( index: number ): E {
        // 是否需要缩容
        if ( this._size <= this._data.length / 4 && this._data.length / 2 !== 0 )
            this._resize( this._data.length / 2 );

        // 索引校验
        if ( index < 0 || index >= this._size )
            throw new Error( "Get index data faile. Require index >=0 && index < size" );

        // 删除元素
        let ret = this._data[ index ];
        for ( let i = index + 1; i < this._size; i++ ) {
            this._data[ i - 1 ] = this._data[ i ];
        }

        // 维护属性
        this._size--;

        return ret;
    }
    // 从头部删除元素
    shift (): E {
        return this.remove( 0 );
    }
    // 从尾部删除元素
    pop (): E {
        return this.remove( this._size - 1 );
    }
    // 移除特定元素
    removeEle ( ele: any ): E {
        let index = this.find( ele );
        if ( index !== 1 )
            return this.remove( index );
    }

    // 重写toString方法
    toString (): string {
        let str: string = `Array: size: ${ this._size }, capacity: ${ this.capacity }`;
        let dataStr: string = "[";
        for ( let i = 0; i < this._size; ++i ) {
            dataStr += this._data[ i ];
            if ( i !== this._size - 1 ) {
                dataStr += ", ";
            }
        }
        dataStr += "]";
        return str + '\n' + dataStr;
    }
}
