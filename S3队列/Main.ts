import ArrayQueue from "./src/Queue";
import LoopQueue from "./src/LoopQueue";

class Test {
    constructor () {
        let arrayQueue = new LoopQueue( 5 );
        let outEle = null;
        for ( let i = 0; i < 10; i++ ) {
            console.log( `入队：${ i }` );
            arrayQueue.enqueue( i );
            console.log( arrayQueue.toString() );
            if ( i % 3 == 0 ) {
                outEle = arrayQueue.dequeue();
                console.log( `出队：${ outEle }` );
                console.log( arrayQueue.toString() );
            }
        }
    }
}

new Test();
