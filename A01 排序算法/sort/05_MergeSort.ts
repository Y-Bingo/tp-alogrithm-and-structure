/**
 * 归并排序
 */

export default function MergeSort ( arr: any[], l: number = 0, r: number = arr.length - 1 ): void
{
    if ( r - l <= 0 )
        return;

    let mid = ( r >> 1 ) + ( l >> 1 );
    // 归并左半
    MergeSort( arr, l, mid );
    // 归并右半
    MergeSort( arr, mid + 1, r );
    // 归并左右
    _merge( arr, l, mid, r );
}

function _merge ( arr: any[], l: number, mid: number, r: number ): void
{
    let aux = [];
    for ( let i = l, j = mid + 1, k = 0; k < r - l + 1; k++ ) {

        if ( i > mid ) {
            aux[ k ] = arr[ j ];
            j++;
        }
        else if ( j > r ) {
            aux[ k ] = arr[ i ];
            i++;
        } else if ( arr[ i ] < arr[ j ] ) {
            aux[ k ] = arr[ i ];
            i++;
        }
        else {
            aux[ k ] = arr[ j ];
            j++;
        }
    }
    // 把辅助数组的值赋值到原数组中
    for ( let q = l; q <= r; q++ )
        arr[ q ] = aux[ q - l ];
}
