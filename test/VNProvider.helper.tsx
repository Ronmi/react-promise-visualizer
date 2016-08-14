/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/chai/index.d.ts" />

import * as React from "react";
import { VNProvider } from "../src/VNProvider";

const expect = chai.expect;

export function VNProviderSpec(factory: () => VNProvider) {
    describe("implements VNProvider", () => {
	it("returns a react component in done()", () => {
	    let p = factory();

	    // since the type-checking has done be typescript compiler,
	    // the only thing we need to check is ensuring it returns
	    // something, not empty.
	    expect(p.done()).not.null;
	});
	it("returns a react component in failed()", () => {
	    let p = factory();

	    // since the type-checking has failed be typescript compiler,
	    // the only thing we need to check is ensuring it returns
	    // something, not empty.
	    expect(p.failed()).not.null;
	});
	it("returns a react component in running()", () => {
	    let p = factory();

	    // since the type-checking has running be typescript compiler,
	    // the only thing we need to check is ensuring it returns
	    // something, not empty.
	    expect(p.running()).not.null;
	});
    });
}
