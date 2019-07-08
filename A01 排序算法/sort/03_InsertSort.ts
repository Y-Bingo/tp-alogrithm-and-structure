/**
 * 插入排序
 * 特点： 能提早结束第二层循环
 */
export default function InserSort ( arr: any[], len: number = arr.length ): void
{
    let temp = null;
    let i = 0;
    let j = 0;
    for ( i = 0; i < len; i++ ) {
        temp = arr[ i ];
        for ( j = i; j > 0; j-- ) {
            if ( arr[ j - 1 ] < temp ) break;
            arr[ j ] = arr[ j - 1 ];
        }
        arr[ j ] = temp;
    }
}

export function InsertSort2 ( arr: any[], len: number = arr.length ): void
{
    for ( let i = 0; i < len; i++ ) {
        for ( let j = i - 1; j >= 0; j-- ) {
            if ( arr[ j ] > arr[ j + 1 ] ) {
                [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
            }
        }
    }
}
