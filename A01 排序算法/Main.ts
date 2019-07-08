import * as SortHelper from "./SortTestHelper";
import InserSort, { InsertSort2 } from "./sort/03_InsertSort";
import SelectionSort from "./sort/02_SelectionSort";
import BubbleSort from "./sort/01_BubbleSort";
import MergeSort from "./sort/05_MergeSort";
import ShellSort, { ShellSort2 } from "./sort/04_ShellSort";
import QuickSort, { QuickSort3 } from "./sort/06_QuickSort";
import HeapSort from "./sort/07_HeapSort";

class Main
{
    constructor ()
    {
        console.log( "------------ 乱序数组 -----------------" );
        let arr = SortHelper.generateRandomArray( 1000000, 1, 1000000 );
        // SortHelper.sortTimeTest( arr, BubbleSort, "冒泡排序" );
        // SortHelper.sortTimeTest( arr, SelectionSort, "选择排序" );
        // SortHelper.sortTimeTest( arr, InserSort, "插入排序" );
        // SortHelper.sortTimeTest( arr, ShellSort, "希尔排序" );
        // SortHelper.sortTimeTest( arr, ShellSort2, "希尔排序2" );
        // SortHelper.sortTimeTest( arr, MergeSort, "归并排序" );
        // SortHelper.sortTimeTest( arr, QuickSort, "快速排序" );
        SortHelper.sortTimeTest( arr, HeapSort, "堆排序" );
        // // // SelectionSort( arr );
        console.log( "------------ 基本有序数组 -----------------" );
        let arr2 = SortHelper.generateOrderArray( 1000000, 100 );
        // SortHelper.sortTimeTest( arr2, InserSort, "插入排序" );
        // SortHelper.sortTimeTest( arr2, ShellSort, "希尔排序" );
        // SortHelper.sortTimeTest( arr2, ShellSort2, "希尔排序2" );
        // SortHelper.sortTimeTest( arr2, MergeSort, "归并排序" );
        // SortHelper.sortTimeTest( arr2, QuickSort, "快速排序" );
        SortHelper.sortTimeTest( arr, HeapSort, "堆排序" );

        let arrT = [ 5, 8, 9, 4, 7, 2, 6, 1, 3, 3, 2, 7 ];
        HeapSort( arrT );
        console.log( arrT.join( "," ) );
    }
}

new Main();
