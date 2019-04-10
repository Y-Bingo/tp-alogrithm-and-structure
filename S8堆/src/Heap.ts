import { IHeap } from "./Interface";

/**
 * 最大堆的实现
 */
export default class MaxHeap<E> implements IHeap<E> {
    // 数组的索引为1的位置为堆顶
    private _data: E[];
    constructor () {
        this._data = [];
        // 占位
        this._data.push( null );
    }
    // 基础属性
    get size () { return this._data.length - 1; }
    get isEmpty () { return this._data.length === 1; }

    // 辅助方法
    _getLeft ( index: number ): number { return index << 1; }
    _getRight ( index: number ): number { return ( index << 1 ) + 1; }
    _getParent ( index: number ): number { return index >> 1; }

    // 添加元素
    push ( ele: E ): void {
        this._data.push( ele );
        this._shiftUP( this._data.length - 1 );
    }
    // 查看顶部元素
    getTop (): E { return this._data[ 1 ]; }
    // 排出堆顶元素
    extraTop (): E {
        if ( this.isEmpty )
            console.error( "这个堆是空的！不能取出元素！！！" );

        [ this._data[ 1 ], this._data[ this.size ] ] = [ this._data[ this.size ], this._data[ 1 ] ];
        let res = this._data.pop();
        // 开始下沉
        this._shiftDown( 1 );
        return res;
    }
    /**
     * 上浮 插入数据、堆化
     * 1. 从插入的位置开始，与父亲节点做比较
     * 2. 如果比父亲节点大，则交换位置
     * 3. 一直上浮直至根节点or没有小于上浮节点的父亲节点
     */
    // _shiftUP ( index: number ): void
    // {
    //     if ( index == 1 ) return;

    //     let parent = this._getParent( index );
    //     if ( this._data[ parent ] >= this._data[ index ] ) return;

    //     [ this._data[ parent ], this._data[ index ] ] = [ this._data[ index ], this._data[ parent ] ];
    //     this._shiftUP( parent );
    // }
    _shiftUP ( child: number ): void {
        let parent = null;
        while ( child !== 1 ) {
            parent = this._getParent( child );
            if ( this._data[ parent ] >= this._data[ child ] ) break;

            [ this._data[ parent ], this._data[ child ] ] = [ this._data[ child ], this._data[ parent ] ];
            child = parent;
        }
    }
    /**
     * 下沉 取出数据、堆化
     * 1. 比较左右孩子
     * 2. 与比较大的孩子进行位置交换
     * 3. 继续下沉直至没有左右孩子or没有大于该节点的孩子节点
     */
    // _shiftDown ( index: number ): void
    // {
    //     let left = this._getLeft( index );
    //     let right = this._getRight( index );
    //     let btChild = left;

    //     if ( left >= this.size ) return;

    //     if ( right < this.size && this._data[ right ] > this._data[ left ] )
    //         btChild = right;

    //     if ( this._data[ btChild ] < this._data[ index ] ) return;

    //     [ this._data[ index ], this._data[ btChild ] ] = [ this._data[ btChild ], this._data[ index ] ];
    //     this._shiftDown( btChild );
    // }
    _shiftDown ( parent: number ): void {
        let child = this._getLeft( parent );

        while ( child <= this.size ) {

            if ( child + 1 <= this.size && this._data[ child + 1 ] > this._data[ child ] )
                child = this._getRight( parent );
            // 判断孩子是否比自身大
            if ( this._data[ child ] <= this._data[ parent ] ) break;
            // 交换位置
            [ this._data[ parent ], this._data[ child ] ] = [ this._data[ child ], this._data[ parent ] ];

            parent = child;
            child = this._getLeft( parent );
        };
    }

    heapify ( arr: E[] ): void {
        this._data = this._data.concat( arr );
        for ( let i = this._getParent( this._data.length - 1 ); i >= 1; i-- )
            this._shiftDown( i );
    }

    toString (): string {
        let parents = [];
        let childs = [];
        parents.push( 1 );

        let height = 0;      // 高度
        let floor = [];
        let floors = [];     //  存储层数

        let parent = -1;
        let left = -1;
        let right = -1;
        do {
            if ( !parents.length ) {
                height++;
                floors.push( floor );
                floor = [];
                parents = childs.concat( [] );
                childs = [];
            }
            if ( !parents.length ) break;

            parent = parents.shift();
            left = this._getLeft( parent );
            right = this._getRight( parent );
            if ( left <= this.size ) childs.push( left );
            if ( right <= this.size ) childs.push( right );

            floor.push( this._data[ parent ] );
        } while ( true )
        return this._toTree( floors );
    }
    private _toTree ( floors: any[][] ): string {
        let str = "";
        for ( let i = 0; i < floors.length; i++ ) {
            for ( let j = 0; j < floors.length - i - 1; j++ ) {
                floors[ i ].unshift( "-" );
            }
        }
        for ( let i = 0; i < floors.length; i++ ) {
            let char = "";
            for ( let j = 0; j < floors[ i ].length; j++ ) {
                if ( floors[ i ][ j ] != "-" )
                    char += " ";
                char += floors[ i ][ j ];
            }
            str += char + "\n";
        }
        return str;
    }
}
