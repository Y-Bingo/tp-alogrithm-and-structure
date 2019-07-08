/**
 * 选择排序
 * 事件复杂度： n^2
 */

function SelectionSort ( arr: any[], len: number = arr.length ): void
{
    let minIndex = -1;
    let i = 0;
    let j = 0;
    for ( i = 0; i < len; i++ ) {
        minIndex = i;
        for ( j = i + 1; j < len; j++ ) {
            if ( arr[ j ] < arr[ minIndex ] )
                minIndex = j;
        }
        [ arr[ minIndex ], arr[ i ] ] = [ arr[ i ], arr[ minIndex ] ];
    }
}

export default SelectionSort;
