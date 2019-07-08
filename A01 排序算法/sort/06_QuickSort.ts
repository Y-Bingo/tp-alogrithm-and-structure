/**
 * 快速排序
 */
export default function QuickSort ( arr: any[], l: number = 0, r: number = arr.length - 1 ): void
{
    if ( l >= r ) return;
    let p = partition2( arr, l, r );
    QuickSort( arr, l, p - 1 );
    QuickSort( arr, p + 1, r );
}
// 分区操作
function partition ( arr: any[], l: number, r: number ): number
{
    // 选取区间内的第一个元素作为基准
    let pivot = arr[ l ];
    let j = l + 1, i = j;
    for ( ; i <= r; i++ ) {
        // 大于基准值的，分配到右边
        if ( arr[ i ] > pivot ) continue;
        // 小于基准值，则把元素分配到左边
        [ arr[ i ], arr[ j ] ] = [ arr[ j ], arr[ i ] ];
        j++;
    }
    [ arr[ l ], arr[ j - 1 ] ] = [ arr[ j - 1 ], arr[ l ] ];

    return j - 1;
}

// export default function QuickSort ( arr: number[], l: number = 0, r: number = arr.length - 1 )
// {
//     if ( r <= l ) return;

//     let p = _partition3( arr, l, r );
//     QuickSort( arr, l, p - 1 );
//     QuickSort( arr, p + 1, r );
// }

// // [l,r]
// function _partition1 ( arr: number[], l: number, r: number ): number
// {
//     let v = arr[ l ];

//     let j = l;
//     for ( let i = l; i <= r; i++ ) {
//         if ( arr[ i ] < v ) {
//             [ arr[ i ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ i ] ];
//             j++;
//         }
//     }
//     [ arr[ l ], arr[ j ] ] = [ arr[ j ], arr[ l ] ];
//     return j;
// }
/**
 * 随机选取一个标准，防止选取l位置上的元素导致快排退化成n^2;
 */
function _partition2 ( arr: number[], l: number, r: number ): number
{
    let randomIndex = Math.floor( Math.random() * ( r - l ) ) + l;
    [ arr[ randomIndex ], arr[ l ] ] = [ arr[ l ], arr[ randomIndex ] ];

    let v = arr[ l ]
    let j = l;
    for ( let i = j; i <= r; i++ ) {
        if ( arr[ i ] < v ) {
            [ arr[ i ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ i ] ];
            j++;
        }
    }
    [ arr[ l ], arr[ j ] ] = [ arr[ j ], arr[ l ] ];

    return j;
}
// 两路
function partition2 ( arr: any[], l: number, r: number )
{
    let randomIndex = Math.floor( Math.random() * ( r - l + 1 ) ) + l;
    [ arr[ randomIndex ], arr[ l ] ] = [ arr[ l ], arr[ randomIndex ] ];
    let paviot = arr[ l ];
    // 双路
    let i = l, j = r;
    while ( 1 ) {
        while ( i < r && arr[ i ] <= paviot ) i++;
        while ( j > l && arr[ j ] >= paviot ) j--;
        if ( i >= j ) break;
        [ arr[ i ], arr[ j ] ] = [ arr[ j ], arr[ i ] ];
        i++;
        j--;
    }
    [ arr[ l ], arr[ j ] ] = [ arr[ j ], arr[ l ] ];
    return j;
}
// 三路
export function QuickSort3 ( arr: any[], l: number = 0, r: number = arr.length - 1 ): void
{
    if ( l >= r ) return;

    let randomIndex = Math.floor( Math.random() * ( r - l ) ) + l;
    [ arr[ randomIndex ], arr[ l ] ] = [ arr[ l ], arr[ randomIndex ] ];
    let paviot = arr[ l ];

    let i = l + 1,      // [ lt + 1, gt - 1 ]  == paviot
        lt = l + 1,     // [ l, lt ]            < pavoit
        gt = r + 1;     // [ gt, r ]            > pavoit

    while ( i < gt ) {
        if ( arr[ i ] < paviot ) {
            [ arr[ i ], arr[ lt ] ] = [ arr[ lt ], arr[ i ] ];
            lt++;
            i++;
        } else if ( arr[ i ] > paviot ) {
            [ arr[ i ], arr[ gt - 1 ] ] = [ arr[ gt - 1 ], arr[ i ] ];
            gt--;
        } else {
            i++;
        }
    }
    [ arr[ l ], arr[ lt - 1 ] ] = [ arr[ lt - 1 ], arr[ l ] ];

    QuickSort3( arr, l, lt - 1 );
    QuickSort3( arr, gt, r );
}
