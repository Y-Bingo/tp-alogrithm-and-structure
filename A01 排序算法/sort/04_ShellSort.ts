/**
 * 希尔排序
 */

export default function ShellSort ( arr: any[], len: number = arr.length ): void
{
    let j = 0, i = 0;
    let temp = null;
    let gap = len >> 1;
    for ( gap = len >> 1; gap > 0; gap = gap >> 1 ) {
        for ( i = gap; i < len; i++ ) {
            temp = arr[ i ];
            for ( j = i - gap; ( j >= 0 ) && ( arr[ j ] > temp ); j -= gap )
                arr[ j + gap ] = arr[ j ];
            arr[ j + gap ] = temp;
        }
    }
}

export function ShellSort2 ( arr: any[], len: number = arr.length )
{
    let gap = len >> 1;   // 增量 一般选区数据长度一半
    let i = 0, j = 0;
    let N = null;
    while ( gap > 0 ) {
        // 对各个分组进行插入排序
        for ( i = gap; i < len; i++ ) {
            N = arr[ i ];
            for ( j = i - gap; ( j >= 0 ) && ( N < arr[ j ] ); j -= gap )
                arr[ j + gap ] = arr[ j ];
            arr[ j + gap ] = N;
        }
        gap = gap >> 1;
    }
}
