import LinkedList from "./src/LinkedList";
import LinkedListStack from "./src/LinkedListStack";
import LoopLinked from "./src/LoopLinked";

class Main {

    constructor () {
        // this._testLinkedList();
        // this._testLinkedListStack();
        this._testLoopLinkedList();
    }

    private _testLinkedList (): void {
        // 链表
        let linkedList: LinkedList<number> = new LinkedList<number>();
        let i = 7;
        while ( i ) {
            console.log( "添加节点：", i );
            linkedList.addFirst( i );
            console.log( linkedList.toString() );
            i--;
        }
        console.log( "在位置4上设置节点：", 666 );
        linkedList.set( 4, 666 );
        console.log( linkedList.toString() );

        console.log( "linedList contains 666 ?: ", linkedList.contains( 666 ) );
        console.log( "lineedList get index 3 :", linkedList.get( 3 ) );

        console.log( "删除第一个节点：", linkedList.removeFirst() );
        console.log( linkedList.toString() );

        console.log( "删除最后一个节点：", linkedList.removeLast() );
        console.log( linkedList.toString() );
    }

    private _testLinkedListStack (): void {
        let stack = new LinkedListStack<number>();
        for ( let i = 0; i < 8; i++ ) {
            stack.push( i );
            console.log( "压入元素", i );
            console.log( stack.toString() );
        }

        for ( let j = 0; j < 3; j++ ) {
            console.log( "弹出元素", stack.pop() );
            console.log( stack.toString() );
        }
    }

    private _testLoopLinkedList (): void {
        // 链表
        let linkedList = new LoopLinked<number>();
        let i = 7;
        while ( i ) {
            console.log( "添加节点：", i );
            linkedList.addFirst( i );
            console.log( linkedList.toString() );
            i--;
        }

        console.log( "linkList get index 3 :", linkedList.get( 3 ) );

        console.log( "删除第一个节点：", linkedList.removeFirst() );
        console.log( linkedList.toString() );

        console.log( "删除最后一个节点：", linkedList.removeLast() );
        console.log( linkedList.toString() );
    }
}

new Main();
