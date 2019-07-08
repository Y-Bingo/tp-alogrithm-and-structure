/**
 * 堆排序
 */
export default function HeapSort ( arr: any[], end: number = arr.length - 1 )
{
    // 把数组变成一个堆
    for ( let i = ( end - 1 ) >> 1; i >= 0; i-- )
        _shiftDown2( arr, i, end );

    for ( let i = end; i >= 0; i-- ) {
        [ arr[ i ], arr[ 0 ] ] = [ arr[ 0 ], arr[ i ] ];
        _shiftDown2( arr, 0, i - 1 );
    }
}

function _shiftDown ( arr: any[], parent: number, end: number )
{
    /**
     * 左孩子 index * 2 + 1
     * 右孩子 index * 2 + 2
     */
    let child = parent * 2 + 1;
    while ( child <= end ) {

        if ( child + 1 <= end && arr[ child + 1 ] > arr[ child ] )
            child += 1;

        if ( arr[ parent ] >= arr[ child ] ) break;

        [ arr[ child ], arr[ parent ] ] = [ arr[ parent ], arr[ child ] ];

        parent = child;
        child = parent * 2 + 1;
    }
}

function _shiftDown2 ( arr: any[], T: number, end: number )
{
    /**
     * 左孩子 index * 2 + 1
     * 右孩子 index * 2 + 2
     */
    let t = T;
    while ( T * 2 + 1 <= end ) {

        t = T * 2 + 1;

        if ( t + 1 <= end && arr[ t + 1 ] > arr[ t ] )
            t += 1;

        if ( arr[ T ] >= arr[ t ] ) break;

        [ arr[ T ], arr[ t ] ] = [ arr[ t ], arr[ T ] ];

        T = t;
    }
}
