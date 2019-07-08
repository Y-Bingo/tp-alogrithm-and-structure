/**
 * 冒泡排序
 */
function BubbleSort ( arr: any[], len: number = arr.length )
{
    for ( let i = 0; i < len; i++ ) {
        for ( let j = 0; j < len - i - 1; j++ ) {
            if ( arr[ j ] > arr[ j + 1 ] )
                [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
    }
}

export default BubbleSort;
