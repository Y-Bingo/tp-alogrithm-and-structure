import MaxHeap from "./src/Heap";

class Main {
    
    constructor () {
        let testData: number[] = [ 1, 12, 34, 5, 4, 52, 35, 5, 16, 8, 6, 9, 4, 1, 2, 3, 7, 5 ];
        let MAX = 1000000;
        for ( let i = 0; i < MAX; i++ ) {
            testData.push( parseInt( <any>( Math.random() * MAX ) ) );
        }
        console.log( `不使用heapify,初始化的数据花费的时间是: ${ this._testHeap( testData, false ) } ms` )
        console.log( `使用heapify,初始化的数据花费的时间是: ${ this._testHeap( testData, true ) } ms` )
    }

    private _testHeap ( testData: number[], isHeapify: boolean ): number {
        let maxHeap: MaxHeap<Number>;
        let arr = [];
        let len = testData.length;
        let t0 = process.uptime() * 1000;
        let t1 = t0;

        maxHeap = new MaxHeap<number>();

        if ( isHeapify )
            maxHeap.heapify( testData );
        else
            for ( let i = 0; i < len; i++ )
                maxHeap.push( testData[ i ] );

        t1 = process.uptime() * 1000;
        for ( let i = 0; i < len; i++ )
            arr[ i ] = maxHeap.extraTop();

        for ( let i = 1; i < len; i++ )
            if ( arr[ i ] < arr[ i + 1 ] )
                console.error( "这不是一个排序好的数组" );

        return t1 - t0;
    }

    private _testHeapify ( arr: number[] ): void {
        let maxHeap = new MaxHeap();
        maxHeap.heapify( arr );
        let str = "";
        while ( !maxHeap.isEmpty ) {
            str += maxHeap.extraTop() + ",";
        }

        console.log( str );
    }

    private _test1 (): void {
        let maxHeap = new MaxHeap();
        maxHeap.push( 4 );
        console.log( "插入 4：\n", maxHeap.toString() );

        maxHeap.push( 3 );
        console.log( "插入 3：\n", maxHeap.toString() );

        maxHeap.push( 6 );
        console.log( "插入 6：\n", maxHeap.toString() );

        // console.log( "排出 %d：\n", maxHeap.extraTop(), maxHeap.toString() );

        maxHeap.push( 2 );
        console.log( "插入 2：\n", maxHeap.toString() );

        maxHeap.push( 15 );
        console.log( "插入 15：\n", maxHeap.toString() );

        // console.log( "排出 %d：\n", maxHeap.extraTop(), maxHeap.toString() );

        maxHeap.push( 12 );
        console.log( "插入 12：\n", maxHeap.toString() );

        maxHeap.push( 5 );
        console.log( "插入 5：\n", maxHeap.toString() );

        maxHeap.push( 9 );
        console.log( "插入 9：\n", maxHeap.toString() );

        maxHeap.push( 7 );
        console.log( "插入 7：\n", maxHeap.toString() );

        maxHeap.push( 1 );
        console.log( "插入 1：\n", maxHeap.toString() );

        let str = "";
        while ( !maxHeap.isEmpty ) {
            str += maxHeap.extraTop() + ",";
        }

        console.log( str );
    }
}

new Main();
