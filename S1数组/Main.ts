import MyArray from './src/Array';

class Main {

    constructor () {
        let arr: MyArray<number> = new MyArray( 10 );
        for ( let i = 0; i < 10; i++ ) {
            arr.push( i );
        }
        console.log( arr + "" );
        arr.unshift( -1 );
        console.log( arr + "" );
        arr.pop();
        console.log( arr + "" );
        arr.pop();
        console.log( arr + "" );
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        console.log( arr + "" );
    }
}

new Main();
