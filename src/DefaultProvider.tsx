import * as React from "react";
import { VNProvider } from "./VNProvider";

const ok = require<any>("../assets/ok.svg");
const failed = require<any>("../assets/failed.svg");
const running = require<any>("../assets/running.svg");
const css = require<any>("../assets/animation.css");

export class DefaultProvider implements VNProvider {
    done(): JSX.Element {
	return (
	    <img src={ok} style={{width: "inherit", height: "inherit"}} />
	);
    }
    failed(): JSX.Element {
	return (
	    <img src={failed} style={{width: "inherit", height: "inherit"}} />
	);
    }
    running(): JSX.Element {
	return (
	    <span className={css.spin}>
		<img src={running} style={{width: "inherit", height: "inherit"}} />
	    </span>
	);
    }
}
