import {
    describe,
    it
} from "mocha";
import { expect } from "chai";

import { sum } from "../src/test";


describe( "test1", () => {
    it( 'adds 1 + 2 to equal 3', () => {
        expect( sum( 1, 2 ) ).equal( 3 );
    } );
} )

describe( "test2", () => {
    test( 'adds 1 + 2 to equal 3', () => {
        expect( sum( 1, 2 ) ).equal( 4 );
    } );
} )
