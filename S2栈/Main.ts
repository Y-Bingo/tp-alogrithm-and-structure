import Stack from "./src/Stack";

class Main {
    constructor () {
        let stack = new Stack<number>();
        for ( let i = 0; i < 5; i++ ) {
            stack.push( i );
            console.log( stack.toString() );
        }
        // console.log( stack.pop() );
    }
}

new Main();
