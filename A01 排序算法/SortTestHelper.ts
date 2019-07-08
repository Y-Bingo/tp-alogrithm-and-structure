/**
 * 排序测试辅助函数
 */
/**
 *
 * @param num        生成数组大小
 * @param randomL    最小值
 * @param randomR    最大值
 */
export function generateRandomArray ( num: number, randomL: number, randomR: number ): number[]
{
    let temp = 0;
    if ( randomL < randomR ) {
        temp = randomL;
        randomL = randomR;
        randomR = temp;
    }

    let arr = [];
    let random = null;
    for ( let i = 0; i < num; i++ ) {
        random = Math.floor( Math.random() * ( randomR - randomL + 1 ) ) + randomL;
        arr.push( random );
    }
    return arr;
}

export function generateOrderArray ( num: number, swap: number = num >> 4 ): number[]
{
    let arr = [];
    for ( let i = 0; i < num; i++ )
        arr.push( i );

    // 打乱顺序
    let randomIndex1 = 0;
    let randomIndex2 = 0;
    for ( let j = 0; j < swap; j++ ) {
        randomIndex1 = Math.floor( Math.random() * num );
        randomIndex2 = Math.floor( Math.random() * num );
        [ arr[ randomIndex1 ], arr[ randomIndex2 ] ] = [ arr[ randomIndex2 ], arr[ randomIndex1 ] ];
    }
    return arr;
}

export function sortTimeTest ( arr: number[], sort: Function, sortName: string ): void
{
    let newArr = arr.concat( [] );
    let start = 0, end = 0;
    start = process.uptime() * 1000;
    sort( newArr );
    end = process.uptime() * 1000;
    if ( !isSort( newArr ) ) {
        console.warn( `${ sortName } is not sorted!!` );
        return;
    }
    console.log( `${ sortName } cost time : ${ end - start } ms` );
}

function isSort ( arr: number[] ): boolean
{
    for ( let i = 0; i < arr.length - 1; i++ )
        if ( arr[ i ] > arr[ i + 1 ] )
            return false;
    return true;
}


