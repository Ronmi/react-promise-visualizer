import * as React from "react";
import { DefaultProvider } from "../../src/DefaultProvider";
import { Visualizer } from "../../src/Visualizer";

export default class App extends React.Component<{}, {}> {
    private v: Visualizer;

    render() {
	return (
	    <div>
		<button onClick={this.mustSuccess}>This will success</button>
		<button onClick={this.mustFail}>This will fail</button>
		<Visualizer className="state" provider={new DefaultProvider} duration={5000} ref={c => this.v = c} />
	    </div>
	);
    }

    mustSuccess: () => void = () => {
	this.v.show(new Promise<void>((res, rej) => {
	    setTimeout(res, 3000); // wait 3 secs, then resolve
	}));
    };

    mustFail: () => void = () => {
	this.v.show(new Promise<void>((res, rej) => {
	    setTimeout(rej, 3000); // wait 3 secs, then reject
	}));
    };
}
